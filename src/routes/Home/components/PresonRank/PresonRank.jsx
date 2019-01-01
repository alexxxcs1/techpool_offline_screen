import React, { Component } from "react";
import style from "./PresonRank.scss";
import longScroll from "assets/longScroll.png";
import button from "assets/button.png";
import tableHead from "assets/tablehead.png";
import tablechild from "assets/tablechild.png";

export class PresonRank extends Component {
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
            阿萨德
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
            5积分
          </div>
        </div>
      </div>);
      }
      return result;
  }
  render() {
    return (
      <div
        className={[style.PresonRank, "childcenter", "childcolumn"].join(" ")}>
        <div
          className={[style.Tittle, "childcenter", "childcolumn"].join(" ")}
          style={{ backgroundImage: "url(" + button + ")" }}>
          "天纵奇才"挑战赛琅琊榜
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
                  <span>姓</span>
                  <span>名</span>
                </div>
              </div>
              <div className={[style.TableColumn, "childcenter"].join(" ")}>
                <div
                  className={[style.Head, "childcenter"].join(" ")}
                  style={{ backgroundImage: "url(" + tableHead + ")" }}>
                  <span>积</span>
                  <span>分</span>
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
export default PresonRank;
