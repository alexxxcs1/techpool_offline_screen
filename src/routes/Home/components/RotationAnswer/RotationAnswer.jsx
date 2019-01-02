import React, { Component } from 'react';
import style from './RotationAnswer.scss';
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
      this.state = {};
      this.refreshProps = this.refreshProps.bind(this);
      this.createPerson = this.createPerson.bind(this);
   }
   componentWillReceiveProps(nextprops) {
      this.refreshProps(nextprops);
   }
   componentDidMount() {
      this.refreshProps(this.props);
   }
   refreshProps(props) { }
   createPerson(){
      let result = [];
      for (let z = 0; z < 10; z++) {
         result.push(<div className={[style.PersonBox,'childcenter','childcolumn'].join(' ')} style={{'--index':z}}>
         <div className={[style.RegionName,'childcenter'].join(' ')} style={{ backgroundImage: 'url(' + tablehead + ')' }}>上海大区</div>
         <div className={[style.PersonName,'childcenter'].join(' ')} style={{ backgroundImage: 'url(' + tablechild + ')' }}>吴彦祖</div>
         <div className={[style.PersonTitle,'childcenter'].join(' ')} style={{ backgroundImage: 'url(' + tablechild + ')' }}>镖旗将军</div>
         <div className={[style.PersonResult,'childcenter'].join(' ')}>
            <img src={correct} className={style.correctpng} alt="" />
            <img src={wrong} className={style.wrongpng} alt="" />
         </div>
      </div>);
         
      }
      return result;
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
            {/* <div className={[style.TheElderScroll,'childcenter'].join(' ')} style={{ backgroundImage: 'url(' + ElderScroll + ')' }}>
               <div className={[style.Detial,'childcenter','childcontentstart'].join(' ')}>

                  {this.createPerson()}

               </div>
            </div> */}
            <QuestionBox />
         </div>
      );
   }
}
export default RotationAnswer;