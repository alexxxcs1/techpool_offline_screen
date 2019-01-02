import React, { Component } from "react";
import style from "./BlackRank.scss";
import longScroll from "assets/longScroll.png";
import button from "assets/button.png";
import tableHead from "assets/tablehead.png";
import tablechild from "assets/tablechild.png";

export class BlackRank extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.refreshProps = this.refreshProps.bind(this);
    this.createTableList = this.createTableList.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
  }
  componentDidMount() {
    this.refreshProps(this.props);
  }
  refreshProps(props) {}
  createTableList(){
      let result = [];
      for (let z = 0; z < 10; z++) {
        result.push(<div className={[style.RowItem, "childcenter"].join(" ")}>
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
