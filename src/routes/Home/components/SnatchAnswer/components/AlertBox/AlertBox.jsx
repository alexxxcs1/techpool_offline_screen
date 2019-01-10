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
  refreshProps(props) {}
  render() {
    return (
      <div className={[style.AlertBox, "childcenter", "childcolumn"].join(" ")}>
        <div className={[style.Detial, "childcenter", "childcolumn"].join(" ")}>
          <span>恭喜上海大区的彭于晏</span>
          <span>抢到了题目！</span>
          <span>他选择的旗帜是6号旗</span>
        </div>
      </div>
    );
  }
}
export default AlertBox;
