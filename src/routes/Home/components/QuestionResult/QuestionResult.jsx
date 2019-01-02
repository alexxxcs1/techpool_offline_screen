import React, { Component } from 'react'
import style from './QuestionResult.scss'
  
export class QuestionResult extends Component {
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
    <div>
        QuestionResult
    </div>
   )
   }
}
export default QuestionResult