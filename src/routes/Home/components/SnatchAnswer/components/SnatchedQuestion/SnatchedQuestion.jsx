import React, { Component } from "react";
import style from "./SnatchedQuestion.scss";

export class SnatchedQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        score:{
            show:true,
            index:Math.floor(Math.random()*10),
            value:Math.floor(Math.random()*10)
        }
    };
    this.refreshProps = this.refreshProps.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
  }
  componentDidMount() {
    this.refreshProps(this.props);
    let self = this;
    setTimeout(() => {
        self.state.score.show = false;
        self.setState(self.state);
    }, 2000);
  }
  refreshProps(props) {}
  render() {
    return (
      <div className={[style.SnatchedQuestion, "childcenter"].join(" ")}>

        {this.state.score.show?<div
          className={[
            style.SnatchedScore,
            "childcenter",
            "childcolumn",
            "childcontentstart"
          ].join(" ")}>
          <div className={style.TitleBox}>
            <div className={style.Tittleleft} />
            <div className={style.TittleValue}>6号题</div>
            <div className={style.Tittleright} />
          </div>

          <div className={[style.TitleInfo, "childcenter"].join(" ")}>5分</div>
        </div>:''}

        {this.state.score.show?'':<div className={[style.detial, "childcenter", "childcolumn"].join(" ")}>
          <div className={[style.QuestionTitle, "childcenter"].join(" ")}>
            1.RE-LY研究中对多少亚洲亚组人群进行了分析RE-LY研究中对多少亚洲亚组人群进行了分析RE-LY研究中对多少亚洲亚组人群进行了分析RE-LY研究中对多少亚洲亚组人群进行了分析？
          </div>
          <div className={[style.QuestionOptionGroup, "childcenter"].join(" ")}>
            <div className={[style.OptionBox, "childcenter"].join(" ")}>
              A. 2,782例
            </div>
            <div className={[style.OptionBox, "childcenter"].join(" ")}>
              A. 2,781例
            </div>
            <div className={[style.OptionBox, "childcenter"].join(" ")}>
              A. 2,783例
            </div>
            <div className={[style.OptionBox, "childcenter"].join(" ")}>
              A. 2,784例
            </div>
          </div>
        </div>}
      </div>
    );
  }
}
export default SnatchedQuestion;
