import React, { Component } from 'react'
import { Redirect,Route,Switch} from 'react-router-dom';
import style from './Home.scss'
import background from 'assets/background.png'
import PresonRank from './components/PresonRank'
import RegionRank from './components/RegionRank'
import RandomPPT from './components/RandomPPT'
import RotationAnswer from './components/RotationAnswer'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stageStatus:'regionrank'
    };
    this.customRoute = this.customRoute.bind(this);
  }
  componentDidMount()
  {
  }
  customRoute(){
    //此处应该用hash路由，不能用状态路由
    switch (this.state.stageStatus) {
      default:
      case 'regionrank':
        return <RegionRank />
      case 'presonrank':
        return <PresonRank />
    }
  }
  render() {
    return (
      <div className={[style.Box].join(' ')}>
          <div className={[style.Screen,'childcenter'].join(' ')} style={{backgroundImage:'url('+background+')'}}>
              <Switch>
                  
                  {/* 首页 */}
                  <Route path='/regionrank' component={RegionRank} />
                  <Route path='/presonrank' component={PresonRank} />
                  <Route path='/randomppt' component={RandomPPT} />
                  <Route path='/rotation' component={RotationAnswer} />
                  <Redirect from="/" to="/regionrank" />

              </Switch>
          </div>
      </div>
    )
  }
}

export default Home
