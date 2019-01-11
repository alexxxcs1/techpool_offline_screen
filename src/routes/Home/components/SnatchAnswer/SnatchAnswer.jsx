import React, { Component } from "react";
import style from "./SnatchAnswer.scss";

import AlertBox from "./components/AlertBox";
import SnatchedQuestion from "./components/SnatchedQuestion";
import ScoreBox from "./components/ScoreBox";
import QuestionBox from "./components/QuestionBox";

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
        return <AlertBox data={this.state.data}/>;
      case 'score':
        return <ScoreBox data={this.state.data}/>
      case 'question':
        return <QuestionBox data={this.state.data}/>
      case 'correct':
        return <div className={[style.CurrectOrNot,'childcenter childcolumn'].join(' ')}>
          <span>{this.state.data.num}号题回答{this.state.data.is_correct=='error'?'失败':'成功'}</span>
          <span>该大区{this.state.data.is_correct=='error'?'减':'加'}{this.state.data.score}分</span>
        </div>;
      case 'imgurl':
        return <img className={style.ResultImg} src={this.state.data}/>
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
