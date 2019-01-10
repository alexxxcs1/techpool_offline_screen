import React, { Component } from 'react'
import { Redirect,Route,Switch} from 'react-router-dom';
import style from './Home.scss'
import background from 'assets/background.png'
import PresonRank from './components/PresonRank'
import PresonRankOnline from './components/PresonRankOnline'

import RegionRank from './components/RegionRank'
import RegionRankOline from './components/RegionRankOline'

import RandomPPT from './components/RandomPPT'
import RotationAnswer from './components/RotationAnswer'
import BlackRank from './components/BlackRank'
import SnatchAnswer from './components/SnatchAnswer'

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
                  <Route path='/regionrank' component={RegionRank} /> {/*预热ajax*/} 
                  <Route path='/presonrank' component={PresonRank} /> {/*预热ajax*/} 
                  <Route path='/olinepersonrank' component={PresonRankOnline} /> {/*现场个人排行榜ajax*/} 
                  <Route path='/olineregionrank' component={RegionRankOline} /> {/*现场大区排行榜ajax*/} 
                  
                  <Route path='/randomppt' component={RandomPPT} />
                  <Route path='/rotation' component={RotationAnswer} />
                  <Route path='/blackrank' component={BlackRank} />
                  <Route path='/snatch' component={SnatchAnswer} />
                  <Redirect from="/" to="/regionrank" />

              </Switch>
          </div>
      </div>
    )
  }
}

export default Home
