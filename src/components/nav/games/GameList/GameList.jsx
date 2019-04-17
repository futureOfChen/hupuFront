import React , {Component} from 'react';

import GameItem from './gameItem/gameItem'
import './GameList.less' 

class GameList extends Component{
    render(){
        return(
            <div id='gameList'>
                <div className='date'>
                    <div className='dateIcon'></div>
                    <div className='dataText'>今日 周三</div>
                </div>
                <div className='gameBox'>
                    <GameItem />
                    <GameItem />
                    <GameItem />
                    <GameItem />
                    <GameItem />
                    <GameItem />
                    <GameItem />
                </div>
            </div>
        )
    }
}
export default GameList