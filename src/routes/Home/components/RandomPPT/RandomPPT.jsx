import React, { Component } from "react";
import style from "./RandomPPT.scss";
import PropTypes from "prop-types";
import button from "assets/button.png";
import longScroll from "assets/longScroll.png";
import tablehead from "assets/tablehead.png";
import tablechild from "assets/tablechild.png";

export class RandomPPT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ws_connection:null,
      data:[],
    };
    this.refreshProps = this.refreshProps.bind(this);
    this.RandomPerson = this.RandomPerson.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
    
  }
  componentDidMount() {
    this.refreshProps(this.props);
    this.connectWebSocket();
  }
  refreshProps(props) {}
  connectWebSocket(){
    let connection = new WebSocket(this.context.WebSocketIP);
    this.state.ws_connection = connection;
    this.setState(this.state);
    let self = this;
    //open connection
    connection.onopen = function () {
      connection.send(JSON.stringify({'type':'pcppt','action':'show'})); 
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
          self.state.data = data.result;
          self.setState(self.state);
          break;
        default:
          break;
      }
    };
  }
  RandomPerson(){
      let result = [];
    for (let z = 0; z < this.state.data.length; z++) {
          result.push(<div className={[style.RandomResultBox,'childcenter','childcolumn'].join(' ')} key={this.state.data[z].id+'person'}>
              <div className={[style.RegionName,'childcenter'].join(' ')} style={{backgroundImage:'url('+tablehead+')'}}>{this.state.data[z].regionid}</div>
              <div className={[style.PersonNameBox,'childcenter','childcolumn'].join(' ')}>
                  <div className={[style.PersonName,'childcenter'].join(' ')} style={{backgroundImage:'url('+tablechild+')'}}>{this.state.data[z].username}</div>
              </div>
              {this.state.data[z].over == 0?'':<div className={[style.ScoreBox,'childcenter'].join(' ')} style={{ backgroundImage: "url(" + button + ")" }}>
                {this.state.data[z].score}分
              </div>}
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
RandomPPT.contextTypes = {
  WebSocketIP: PropTypes.func
};
export default RandomPPT;
