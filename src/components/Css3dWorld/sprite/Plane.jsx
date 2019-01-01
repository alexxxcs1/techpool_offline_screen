import React, { Component } from 'react'

export class Plane extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
        texture:null,
        style : {
            width:'100px',
            height:'100px',
            background:'#fff',
            backgroundSize:'100% 100%',
            
        }
    }; 
    this.refreshProp = this.refreshProp.bind(this);
  }
  componentWillReceiveProps(nextprops)
  {
      this.refreshProp(nextprops)
  }
  componentDidMount()
  {
      this.refreshProp(this.props)
  }
  refreshProp(prop)
  {
    var custom_props  =JSON.parse(JSON.stringify(prop.style?prop.style:''));
    var custom_state = JSON.parse(JSON.stringify(this.state.style));
    var style = Object.assign(custom_state,custom_props);
    style.backgroundImage = 'url('+(prop.texture?prop.texture:this.state.texture)+')';
    console.log(style);
    
    this.setState({
      style:style,
    })
  }
  render() {
    return (
      <div style={this.state.style}>
        
      </div>
    )
  }
}

export default Plane
