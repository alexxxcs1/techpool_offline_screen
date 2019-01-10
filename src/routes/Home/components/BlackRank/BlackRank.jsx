import React, { Component } from "react";
import style from "./BlackRank.scss";
import longScroll from "assets/longScroll.png";
import button from "assets/button.png";
import tableHead from "assets/tablehead.png";
import tablechild from "assets/tablechild.png";

import {api} from 'common/app'

const zhcnNum = ['一','二','三','四','五','六','七','八','九','十'];
export class BlackRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
    };
    this.refreshProps = this.refreshProps.bind(this);
    this.createTableList = this.createTableList.bind(this);
    this.getBlackRank = this.getBlackRank.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
  }
  componentDidMount() {
    this.refreshProps(this.props);
    this.getBlackRank();
  }
  refreshProps(props) {}
  getBlackRank(){
    api.getBlackRank().then(res=>{
      console.log(res);
      if (res.code == 200) {
        this.state.data = res.result;
        this.setState(this.state);
      }
    },err=>{
      console.log(err);
      
    })
  }
  createTableList(){
      let result = [];
      for (let z = 0; z < this.state.data.length; z++) {
        result.push(<div className={[style.RowItem, "childcenter"].join(" ")}>
        <div className={[style.RowColumn, "childcenter"].join(" ")}>
          <div
            className={[style.ValueBox, "childcenter"].join(" ")}
            style={{ backgroundImage: "url(" + tablechild + ")" }}>
            第{zhcnNum[z]}名
          </div>
        </div>
        <div className={[style.RowColumn, "childcenter"].join(" ")}>
          <div
            className={[style.ValueBox, "childcenter"].join(" ")}
            style={{ backgroundImage: "url(" + tablechild + ")" }}>
            {this.state.data[z].username}({this.state.data[z].regionname})
          </div>
        </div>
        <div className={[style.RowColumn, "childcenter"].join(" ")}>
          <div
            className={[style.ValueBox, "childcenter"].join(" ")}
            style={{ backgroundImage: "url(" + tablechild + ")" }}>
            {this.state.data[z].rate}%
          </div>
        </div>
      </div>);
      }
      return result;
  }
  render() {
    return (
      <div
        className={[style.BlackRank, "childcenter", "childcolumn"].join(" ")}>
        <div
          className={[style.Tittle, "childcenter"].join(" ")}
          style={{ backgroundImage: "url(" + button + ")" }}>
          <span>黑</span>
          <span>榜</span>
        </div>
        <div
          className={[style.longScroll, "childcenter", "childcolumn"].join(" ")}
          style={{ backgroundImage: "url(" + longScroll + ")" }}>
          <div className={style.detial}>
            <div
              className={[style.TableHead, "childcenter"].join(" ")}
              style={{ "--rowwidth": "33%" }}>
              <div className={[style.TableColumn, "childcenter"].join(" ")}>
                <div
                  className={[style.Head, "childcenter"].join(" ")}
                  style={{ backgroundImage: "url(" + tableHead + ")" }}>
                  <span>排</span>
                  <span>名</span>
                </div>
              </div>
              <div className={[style.TableColumn, "childcenter"].join(" ")}>
                <div
                  className={[style.Head, "childcenter"].join(" ")}
                  style={{ backgroundImage: "url(" + tableHead + ")" }}>
                  <span>大</span>
                  <span>区</span>
                </div>
              </div>
              <div className={[style.TableColumn, "childcenter"].join(" ")}>
                <div
                  className={[style.Head, "childcenter"].join(" ")}
                  style={{ backgroundImage: "url(" + tableHead + ")" }}>
                  <span>参</span>
                  <span>与</span>
                  <span>率</span>
                </div>
              </div>
            </div>

            <div className={style.TableBody}>
                {this.createTableList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BlackRank;
