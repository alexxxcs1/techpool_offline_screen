import React, { Component } from 'react'
import style from './QuestionBox.scss'

import longScroll from 'assets/longScroll.png'
  
export class QuestionBox extends Component {
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
refreshProps(props) {
    this.state.question = props.data;
    this.setState(this.state);
}
render() {
  return (
        <div className={[style.QuestionBox,'childcenter'].join(' ')} style={{backgroundImage:'url('+longScroll+')'}}>
            {this.state.question?<div className={[style.detial,'childcenter','childcolumn'].join(' ')}>
                <div className={[style.QuestionTitle,'childcenter'].join(' ')}>{this.state.question.title}</div>
                <div className={[style.QuestionOptionGroup,'childcenter'].join(' ')}>
                    <div className={[style.OptionBox,'childcenter childcontentstart childalightstart childalignstart'].join(' ')}>{this.state.question.check['A']? <div> <span className={style.optionkey}> A. </span> {this.state.question.check['A']}</div>:''}</div>
                    <div className={[style.OptionBox,'childcenter childcontentstart childalightstart childalignstart'].join(' ')}>{this.state.question.check['B']? <div> <span className={style.optionkey}> B. </span> {this.state.question.check['B']}</div>:''}</div>
                    <div className={[style.OptionBox,'childcenter childcontentstart childalightstart childalignstart'].join(' ')}>{this.state.question.check['C']? <div> <span className={style.optionkey}> C. </span> {this.state.question.check['C']}</div>:''}</div>
                    <div className={[style.OptionBox,'childcenter childcontentstart childalightstart childalignstart'].join(' ')}>{this.state.question.check['D']? <div> <span className={style.optionkey}> D. </span> {this.state.question.check['D']}</div>:''}</div>
                </div>
            </div>:''}
        </div>
   )
   }
}
export default QuestionBox