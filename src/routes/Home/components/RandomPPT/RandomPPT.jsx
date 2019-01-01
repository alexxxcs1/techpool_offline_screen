import React, { Component } from "react";
import style from "./RandomPPT.scss";
import button from "assets/button.png";
import longScroll from "assets/longScroll.png";
import tablehead from "assets/tablehead.png";
import tablechild from "assets/tablechild.png";



export class RandomPPT extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.refreshProps = this.refreshProps.bind(this);
    this.RandomPerson = this.RandomPerson.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
  }
  componentDidMount() {
    this.refreshProps(this.props);
  }
  refreshProps(props) {}
  RandomPerson(){
      let result = [];
    for (let z = 0; z < 3; z++) {
        result.push(<div className={[style.RandomResultBox,'childcenter','childcolumn'].join(' ')}>
        <div className={[style.RegionName,'childcenter'].join(' ')} style={{backgroundImage:'url('+tablehead+')'}}>香港大区</div>
        <div className={[style.PersonNameBox,'childcenter','childcolumn'].join(' ')}>
            <div className={[style.PersonName,'childcenter'].join(' ')} style={{backgroundImage:'url('+tablechild+')'}}>吴彦祖</div>
        </div>
        <div className={[style.ScoreBox,'childcenter'].join(' ')} style={{ backgroundImage: "url(" + button + ")" }}>
          {Math.floor(Math.random()*200)}分
        </div>
    </div>);
    }
    return result;
  }
  render() {
    return (
      <div className={[style.RandomPPTBox, "childcenter", "childcolumn"].join(" ")}>
        <div
          className={[style.Tittle, "childcenter"].join(" ")}
          style={{ backgroundImage: "url(" + button + ")" }}>
          <span>群</span>
          <span>雄</span>
          <span>争</span>
          <span>霸</span>
        </div>
        <div className={[style.longScroll, "childcenter", "childcolumn"].join(" ")}
          style={{ backgroundImage: "url(" + longScroll + ")" }}>
            <div className={[style.detial,'childcenter'].join(' ')}>
                {this.RandomPerson()}
            </div>
        </div>
      </div>
    );
  }
}
export default RandomPPT;
