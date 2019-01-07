import React, { Component } from "react";
import style from "./PresonRank.scss";
import longScroll from "assets/longScroll.png";
import button from "assets/button.png";
import tableHead from "assets/tablehead.png";
import tablechild from "assets/tablechild.png";
import {api} from 'common/app'

export class PresonRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
    this.refreshProps = this.refreshProps.bind(this);
    this.createTableList = this.createTableList.bind(this);
    this.getData = this.getData.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
  }
  componentDidMount() {
    this.refreshProps(this.props);
    this.getData();
  }
  refreshProps(props) {}
  getData(){
    api.getWarmUpPersonRank().then(res=>{
      if(res.code == 200){
        this.state.data = res.result;
        this.setState(this.state);
      }else{
        console.log(res.message);
      }
    },err=>{
      console.log(err);
    })
  }
  createTableList(){
      let result = [];
      for (let z = 0; z < this.state.data.length; z++) {
        result.push(<div className={[style.RowItem, "childcenter"].join(" ")}>
        <div className={[style.RowColumn, "childcenter"].join(" ")} style={{width:'25%'}}>
          <div
            className={[style.ValueBox, "childcenter"].join(" ")}
            style={{ backgroundImage: "url(" + tablechild + ")" }}>
            第{this.state.data[z].rank}名
          </div>
        </div>
        <div className={[style.RowColumn, "childcenter"].join(" ")} style={{width:'50%'}}>
          <div
            className={[style.ValueBox, "childcenter"].join(" ")}
            style={{ backgroundImage: "url(" + tablechild + ")" }}>
            {this.state.data[z].username}({this.state.data[z].regionid})
          </div>
        </div>
        <div className={[style.RowColumn, "childcenter"].join(" ")} style={{width:'25%'}}>
          <div
            className={[style.ValueBox, "childcenter"].join(" ")}
            style={{ backgroundImage: "url(" + tablechild + ")" }}>
            {this.state.data[z].score}积分
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
              >
              <div className={[style.TableColumn, "childcenter"].join(" ")} style={{width:'25%'}}>
                <div
                  className={[style.Head, "childcenter"].join(" ")}
                  style={{ backgroundImage: "url(" + tableHead + ")" }}>
                  <span>排</span>
                  <span>名</span>
                </div>
              </div>
              <div className={[style.TableColumn, "childcenter"].join(" ")} style={{width:'50%'}}>
                <div
                  className={[style.Head, "childcenter"].join(" ")}
                  style={{ backgroundImage: "url(" + tableHead + ")" }}>
                  <span>姓</span>
                  <span>名</span>
                </div>
              </div>
              <div className={[style.TableColumn, "childcenter"].join(" ")} style={{width:'25%'}}>
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
