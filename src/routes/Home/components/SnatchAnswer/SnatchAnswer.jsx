import React, { Component } from "react";
import style from "./SnatchAnswer.scss";

import AlertBox from "./components/AlertBox";
import SnatchedQuestion from "./components/SnatchedQuestion";

import longScroll from "assets/longScroll.png";
import button from "assets/button.png";
import tableHead from "assets/tablehead.png";
import tablechild from "assets/tablechild.png";
import flag from "assets/flag.png";

export class SnatchAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ws_connection:null,
      data:[],
      stageStatus: 0
    };
    this.refreshProps = this.refreshProps.bind(this);
    this.customRoute = this.customRoute.bind(this);
    this.createTableList = this.createTableList.bind(this);
    this.createQuestionOption = this.createQuestionOption.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
  }
  componentDidMount() {
    this.refreshProps(this.props);
    let connection = new WebSocket('ws://192.168.1.12:8282');

    this.state.ws_connection = connection;
    this.setState(this.state);
    let self = this;
    //open connection
    connection.onopen = function () {
      connection.send(JSON.stringify({'type':'pcqiangda','action':'show'})); 
    };
    //onerror
    connection.onerror = function (error) {
      console.log('WebSocket Error ' + error);
    };
    
    //to receive the message from server
    connection.onmessage = function (e) {
      let data = JSON.parse(e.data);
      switch (data.action) {
        case 'show':
          self.state.stageStatus = data.step;
          self.state.data = data.result[self.state.stageStatus];
          self.setState(self.state);
          break;
        default:
          break;
      }
    };
  }
  refreshProps(props) {}
  createTableList() {
    let result = [];
    for (let z = 0; z < 10; z++) {
      result.push(
        <div className={[style.RowItem, "childcenter"].join(" ")}>
          <div className={[style.RowColumn, "childcenter"].join(" ")}>
            <div
              className={[style.ValueBox, "childcenter"].join(" ")}
              style={{ backgroundImage: "url(" + tablechild + ")" }}>
              第一名
            </div>
          </div>
          <div className={[style.RowColumn, "childcenter"].join(" ")}>
            <div
              className={[style.ValueBox, "childcenter"].join(" ")}
              style={{ backgroundImage: "url(" + tablechild + ")" }}>
              彭于晏(上海大区)
            </div>
          </div>
          <div className={[style.RowColumn, "childcenter"].join(" ")}>
            <div
              className={[style.ValueBox, "childcenter"].join(" ")}
              style={{ backgroundImage: "url(" + tablechild + ")" }}>
              20%
            </div>
          </div>
        </div>
      );
    }
    return result;
  }
  createQuestionOption() {
    let result = [];
    for (let z = 0; z < this.state.data.length; z++) {
      result.push(
        <div className={[style.Question, "childcenter"].join(" ")}>
          <div
            className={[style.Flag, "childcenter", "childalignstart"].join(" ")}
            style={{ backgroundImage: "url(" + flag + ")" }}>
            <div
              className={[
                style.QuestionInfo,
                "childcenter",
                "childcolumn",
                "childcolumn"
              ].join(" ")}>
              <span>{this.state.data[z].num}</span>
              <span>{this.state.data[z].score}分</span>
            </div>
          </div>
        </div>
      );
    }
    return result;
  }
  customRoute() {
    switch (this.state.stageStatus) {
      // default:
      case 'list':
        return (
          <div
            className={[
              style.QuestionBox,
              "childcenter",
              "childcontentstart",
              "childalignstart"
            ].join(" ")}>
            {this.createQuestionOption()}
          </div>
        );
      case 'user':
        return <AlertBox />;
    }
  }
  render() {
    return (
      <div
        className={[style.SnatchAnswer, "childcenter", "childcolumn"].join(
          " "
        )}>
        <div
          className={[style.Tittle, "childcenter"].join(" ")}
          style={{ backgroundImage: "url(" + button + ")" }}>
          <span>回</span>
          <span>天</span>
          <span>有</span>
          <span>道</span>
        </div>
        <div
          className={[style.longScroll, "childcenter", "childcolumn"].join(" ")}
          style={{ backgroundImage: "url(" + longScroll + ")" }}>
          <div className={[style.detial, "childcenter"].join(" ")}>
            {this.customRoute()}
          </div>
        </div>
      </div>
    );
  }
}
export default SnatchAnswer;
