import React , {Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'

import HeadSearch from '../../common/headSearch/headSearch'
import HeaderNav from '../../common/headerNav/headerNav'
import NbaNav from './NbaNav/NbaNav'
import GameList from './GameList/GameList'
import Team from './Team/team'
import Player from './player/palyer'
import './games.less'

class Games extends Component {
    
    render() {
        return (
            <div id='games'>
                <div className='head'>
                    <HeadSearch />
                    <HeaderNav />
                    <NbaNav />

                </div>

                <div className='content'>

                    <Route  path='/nav/games/gameList' component={GameList}/>
                    <Route  path='/nav/games/team' component={Team}/>
                    <Route  path='/nav/games/player' component={Player}/>

                </div>
                
            </div>
        )
    }
}

export default Games;


