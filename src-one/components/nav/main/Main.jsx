import React, {Component} from 'react';
import {Route,IndexRoute} from 'react-router-dom'
import IndexPage from './index/index'
import GamePage from './game/game'
import GroupPage from './group/group'

class Main extends Component {
    render() {
        return <div>
            <div>Main</div>
            <Route path='/nav/main/index' component={IndexPage}></Route>
            <Route path='/nav/main/game' component={GamePage}></Route>
            <Route path='/nav/main/group' component={GroupPage}></Route>
        </div>
    }
}

export default Main;