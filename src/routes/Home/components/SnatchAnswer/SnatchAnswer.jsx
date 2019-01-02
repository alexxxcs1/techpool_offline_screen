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
      stageStatus: 1
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
    for (let z = 0; z < 10; z++) {
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
              <span>{z + 1}</span>
              <span>{Math.floor(Math.random() * 10) + 1}分</span>
            </div>
          </div>
        </div>
      );
    }
    return result;
  }
  customRoute() {
    switch (this.state.stageStatus) {
      default:
      case 0:
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
      case 1:
        return <SnatchedQuestion />;
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
