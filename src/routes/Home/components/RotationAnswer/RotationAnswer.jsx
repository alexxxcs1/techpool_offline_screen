import React, { Component } from 'react';
import style from './RotationAnswer.scss';

import PropTypes from "prop-types";
import QuestionBox from './components/QuestionBox'

import button from 'assets/button.png'
import ElderScroll from 'assets/ElderScroll.png'
import tablehead from 'assets/tablehead.png'
import tablechild from 'assets/tablechild.png'

import correct from 'assets/correct.png'
import wrong from 'assets/wrong.png'



export class RotationAnswer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         stageStatus:null,
         userGroup:[],
         question:null,
         imgurl:null,
      };
      this.refreshProps = this.refreshProps.bind(this);
      this.createPerson = this.createPerson.bind(this);
      this.customRoute = this.customRoute.bind(this);
   }
   componentWillReceiveProps(nextprops) {
      this.refreshProps(nextprops);
   }
   componentDidMount() {
      this.refreshProps(this.props);
      let connection = new WebSocket(this.context.WebSocketIP);
      this.state.ws_connection = connection;
      this.setState(this.state);
      let self = this;
      //open connection
      connection.onopen = function () {
         connection.send(JSON.stringify({'type':'pclunda','action':'show'})); 
      };
      //onerror
      connection.onerror = function (error) {
         console.log('WebSocket Error ' + error);
      };
      
      //to receive the message from server
      connection.onmessage = function (e) {
         let data = JSON.parse(e.data);
         self.state.stageStatus = data.step;
         self.state.userGroup = data.result.user;
         self.state.question = data.result.question;
         self.state.imgurl = data.result.imgurl;
         self.setState(self.state);
      };
   }
   refreshProps(props) { }
   createPerson(){
      let result = [];
      for (let z = 0; z < this.state.userGroup.length; z++) {
         result.push(<div className={[style.PersonBox,'childcenter','childcolumn'].join(' ')} style={{'--index':z}}>
         <div className={[style.RegionName,'childcenter'].join(' ')} style={{ backgroundImage: 'url(' + tablehead + ')' }}>{this.state.userGroup[z].regionname}</div>
         <div className={[style.PersonName,'childcenter'].join(' ')} style={{ backgroundImage: 'url(' + tablechild + ')' }}>{this.state.userGroup[z].username}</div>
         <div className={[style.PersonTitle,'childcenter'].join(' ')} style={{ backgroundImage: 'url(' + tablechild + ')' }}>{this.state.userGroup[z].scorename}</div>
         {this.state.userGroup[z].over?<div className={[style.PersonResult,'childcenter'].join(' ')}>
            {this.state.userGroup[z].is_correct == 'success'?<img src={correct} className={style.correctpng} alt="" />:''}
            {this.state.userGroup[z].is_correct == 'error'?<img src={wrong} className={style.wrongpng} alt="" />:''}
         </div>:''}
      </div>);
      }
      return result;
   }
   customRoute(){
      switch (this.state.stageStatus) {
         case 'user':
            return <div className={[style.TheElderScroll,'childcenter'].join(' ')} style={{ backgroundImage: 'url(' + ElderScroll + ')' }}>
               <div className={[style.Detial,'childcenter'].join(' ')}>

                  {this.createPerson()}

               </div>
            </div>
         case 'question':
            return <QuestionBox data={this.state.question}/>
         case 'img':
            return <img src={this.state.imgurl} style={{width:'960px',marginTop:'80px'}}/>
      }
   }
   render() {
      return (
         <div className={[style.RotationAnswer, 'childcenter', 'childcolumn'].join(' ')} >
            
            <div
               className={[style.Tittle, "childcenter"].join(" ")}
               style={{ backgroundImage: "url(" + button + ")" }}>
               <span>甲</span>
               <span>冠</span>
               <span>天</span>
               <span>下</span>
            </div>
            {this.customRoute()}
         </div>
      );
   }
}
RotationAnswer.contextTypes = {
  WebSocketIP: PropTypes.func
};
export default RotationAnswer;