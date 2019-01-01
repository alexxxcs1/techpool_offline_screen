import React, { Component } from 'react'
import style from './Css3dWorld.scss';

import Coordinate from './tool/Coordinate';
import Cube from './sprite/Cube';
import { Transform } from 'stream';
import texture from './imgs/texture.png'
import fire from './imgs/fire.jpg'
import snow from './imgs/snow.jpg'


export class Css3dWorld extends Component {
  constructor(props)
  {
    super(props);
  }
  componentDidMount()
  {
    // this.refs.rs.refs.top.style.border = '#123333 20px solide'
    var Planes = this.refs.rs.retrunPlane();
  }
  render() {
    return (
      <div className={style.ViewBox}>
        <div className={style.Stage}>
            
            {/* <Coordinate /> */}
            {/* <Cube width='100' height='100' length='100' position={[-100,20,-200]} border={'#999 solid 2px'}/>
            <Cube width='100' height='100' length='100' position={[100,-20,200]} border={'#999 solid 2px'}/>
            <Cube width='100' height='100' length='100' position={[0,0,0]} border={'#666 solid 40px'}/> */}
            <Cube width='100' height='100' length='100' position={[0,-80,-200]} texture={[texture]}/>
            <Cube width='100' height='100' length='100' position={[0,-80,200]}  texture={[texture]}/>
            <Cube width='100' height='100' length='100' position={[200,-80,0]}  texture={[texture]}/>
            <Cube width='100' height='100' length='100' position={[-200,-80,0]} texture={[texture]}/>
            <Cube width='150' height='150' length='150' position={[0,-150,0]}   texture={[fire]}/>
            <Cube width='50' height='50' length='50' position={[0,-300,0]}   texture={[fire]}/>
            
            
            <Cube width='800' height='10' length='800' position={[0,6,0]} border={'#000 solid 0.1px'} texture={[texture]} ref='rs'/>
            
            
            
            {/* <DPlane type='bottom'/> */}
        </div>
      </div>
    )
  }
}

export default Css3dWorld
