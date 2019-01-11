import React, { Component } from 'react'
import style from './ScoreBox.scss'
  
export class ScoreBox extends Component {
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
    this.state.data = props.data?props.data:this.state.data;
    console.log(this.state.data);
    
    this.setState(this.state);
}
render() {
  return (
    <div className={[style.ResultBox,this.state.resultStatus==false?style.resultErro:'','childcenter','childcolumn','childcontentstart'].join(' ')}>
        <div className={style.TitleBox}>
        <div className={style.Tittleleft} />
       {this.state.data? <div className={style.TittleValue}>{this.state.data.num}号题</div>:''}
        <div className={style.Tittleright} />
        </div>

        {this.state.data?<div className={[style.ResultValue,'childcenter','childcolumn'].join(' ')}>
            <div>{this.state.data.score}分</div>
        </div>:''}
        
  </div>
   )
   }
}
export default ScoreBox