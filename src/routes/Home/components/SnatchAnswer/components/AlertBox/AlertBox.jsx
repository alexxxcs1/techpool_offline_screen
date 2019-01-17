import React, { Component } from "react";
import style from "./AlertBox.scss";

export class AlertBox extends Component {
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
      <div className={[style.AlertBox, "childcenter", "childcolumn"].join(" ")}>
        {this.state.data?<div className={[style.Detial, "childcenter", "childcolumn"].join(" ")}>
          {/* <span>恭喜{this.state.data.regionname}的{this.state.data.username}</span>
          <span>抢到了题目！</span>
          <span>他选择的旗帜是{this.state.data.num}号旗</span> */}
          <span>{this.state.data.split('|')[0]}</span>
          <br/>
          <span>{this.state.data.split('|')[1]}</span>
        </div>:''}
      </div>
    );
  }
}
export default AlertBox;
