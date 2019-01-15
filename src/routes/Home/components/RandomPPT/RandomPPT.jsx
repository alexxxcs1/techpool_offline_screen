import React, { Component } from "react";
import style from "./RandomPPT.scss";
import PropTypes from "prop-types";
import button from "assets/button.png";
import longScroll from "assets/longScroll.png";
import tablehead from "assets/tablehead.png";
import tablechild from "assets/tablechild.png";

let RandmonAnimInterval;
export class RandomPPT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ws_connection:null,
      data:[],
      InitData:[],
      randomNum:0,
    };
    this.refreshProps = this.refreshProps.bind(this);
    this.RandomPerson = this.RandomPerson.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
    
  }
  componentDidMount() {
    this.refreshProps(this.props);
    this.connectWebSocket();
  }
  refreshProps(props) {}
  connectWebSocket(){
    let connection = new WebSocket(this.context.WebSocketIP);
    this.state.ws_connection = connection;
    this.setState(this.state);
    let self = this;
    //open connection
    connection.onopen = function () {
      connection.send(JSON.stringify({'type':'pcppt','action':'show'})); 
    };
    //onerror
    connection.onerror = function (error) {
      console.log('WebSocket Error ' + error);
    };
    connection.onclose = function () {
      window.location.reload();
    }
    //to receive the message from server
    connection.onmessage = function (e) {
      let data = JSON.parse(e.data);
      console.log(e.data);
      clearInterval(RandmonAnimInterval);
      switch (data.step) {
        case 'initialState':
          self.state.data = [];
          self.state.InitData = data.result;
          self.state.randomNum = data.num;
          self.setState(self.state);
          
          RandmonAnimInterval = setInterval(()=>{
            self.setState(self.state)
          },100)
          break;
        case 'inProgress':
          self.state.data = data.result;
          self.setState(self.state);
          break;
        default:
          break;
      }
    };
  }
  RandomPerson(){
      let result = [];
      for (let z = 0; z < this.state.data.length; z++) {
            result.push(<div className={[style.RandomResultBox,'childcenter','childcolumn'].join(' ')} key={this.state.data[z].id+'person'}>
                <div className={[style.RegionName,'childcenter'].join(' ')} style={{backgroundImage:'url('+tablehead+')'}}>{this.state.data[z].regionid}</div>
                <div className={[style.PersonNameBox,'childcenter','childcolumn'].join(' ')}>
                    <div className={[style.PersonName,'childcenter'].join(' ')} style={{backgroundImage:'url('+tablechild+')'}}>{this.state.data[z].username}</div>
                </div>
                {this.state.data[z].over == 0?'':<div className={[style.ScoreBox,'childcenter'].join(' ')} style={{ backgroundImage: "url(" + button + ")" }}>
                  {this.state.data[z].score}分
                </div>}
            </div>);   
      }
      return result;
  }
  CeateRandomAnmiComponents(){
    if(this.state.InitData == 0||this.state.randomNum==0) return;
    let result=[];
    for (let z = 0; z < this.state.randomNum; z++) {
      let index = Math.floor(Math.random()*this.state.InitData.length);
      result.push(<div className={[style.RandomResultBox,'childcenter','childcolumn'].join(' ')} key={Math.random()*1024}>
          <div className={[style.RegionName,'childcenter'].join(' ')} style={{backgroundImage:'url('+tablehead+')'}}>{this.state.InitData[index].regionid}</div>
          <div className={[style.PersonNameBox,'childcenter','childcolumn'].join(' ')}>
              <div className={[style.PersonName,'childcenter'].join(' ')} style={{backgroundImage:'url('+tablechild+')'}}>{this.state.InitData[index].username}</div>
          </div>
      </div>)
    }
    return result;
  }
  render() {
    return (
      <div className={[style.RandomPPTBox, "childcenter", "childcolumn"].join(" ")}>
        <div
          className={[style.Tittle, "childcenter"].join(" ")}
          style={{ backgroundImage: "url(" + button + ")" }}>
          <span>群</span>
          <span>雄</span>
          <span>争</span>
          <span>霸</span>
        </div>
        <div className={[style.longScroll, "childcenter", "childcolumn"].join(" ")}
          style={{ backgroundImage: "url(" + longScroll + ")" }}>
            <div className={[style.detial,'childcenter'].join(' ')}>
                {this.state.data.length == 0?this.CeateRandomAnmiComponents():this.RandomPerson()}
            </div>
        </div>
      </div>
    );
  }
}
RandomPPT.contextTypes = {
  WebSocketIP: PropTypes.func
};
export default RandomPPT;
