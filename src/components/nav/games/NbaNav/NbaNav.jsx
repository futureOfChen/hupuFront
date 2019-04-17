import React,{Component} from 'react' 
import {Link} from 'react-router-dom'

import './NbaNav.less'



class NbaNav extends Component{
    render(){
        return(
            <div id='nbaNav'>
                <ul className='clearfix'>
                <Link to='/nav/games/gameList'>
                    <li className='fontred'>赛程</li>
                </Link>
                <Link to='/nav/games/team'>
                    <li>球队榜</li>
                </Link>
                <Link to='/nav/games/player'>
                    <li>球员榜</li>
                </Link>
                    <li>新秀榜</li>
                    <li>日榜</li>
                    <li>伤病</li>
                </ul>
            </div>
        )
    }
}

export default NbaNav