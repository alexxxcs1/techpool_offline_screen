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
  
}
render() {
  return (
        <div className={[style.QuestionBox,'childcenter'].join(' ')} style={{backgroundImage:'url('+longScroll+')'}}>
            <div className={[style.detial,'childcenter','childcolumn'].join(' ')}>

                <div className={[style.QuestionTitle,'childcenter'].join(' ')}>1.RE-LY研究中对多少亚洲亚组人群进行了分析RE-LY研究中对多少亚洲亚组人群进行了分析RE-LY研究中对多少亚洲亚组人群进行了分析RE-LY研究中对多少亚洲亚组人群进行了分析？</div>
                <div className={[style.QuestionOptionGroup,'childcenter'].join(' ')}>
                    <div className={[style.OptionBox,'childcenter'].join(' ')}>A. 2,782例</div>
                    <div className={[style.OptionBox,'childcenter'].join(' ')}>A. 2,781例</div>
                    <div className={[style.OptionBox,'childcenter'].join(' ')}>A. 2,783例</div>
                    <div className={[style.OptionBox,'childcenter'].join(' ')}>A. 2,784例</div>
                </div>
            </div>
        </div>
   )
   }
}
export default QuestionBox