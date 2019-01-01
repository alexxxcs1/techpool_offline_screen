import React, { Component } from 'react';
import style from './RotationAnswer.scss';
import button from 'assets/button.png'
import ElderScroll from 'assets/ElderScroll.png'

export class RotationAnswer extends Component {
   constructor(props) {
      super(props);
      this.state = {};
      this.refreshProps = this.refreshProps.bind(this);
   }
   componentWillReceiveProps(nextprops) {
      this.refreshProps(nextprops);
   }
   componentDidMount() {
      this.refreshProps(this.props);
   }
   refreshProps(props) { }
   render() {
      return (
         <div className={style.RotationAnswer} style={{backgroundImage:'url('+ElderScroll+')'}}>
            RotationAnswer
         </div>
      );
   }
}
export default RotationAnswer;