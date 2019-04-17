import React,{Component} from 'react'

import './NbaNav.less'



class NbaNav extends Component{
    render(){
        return(
            <div id='nbaNav'>
                <ul className='clearfix'>
                    <li className='fontred'>赛程</li>
                    <li>球队榜</li>
                    <li>球员榜</li>
                    <li>新秀榜</li>
                    <li>日榜</li>
                    <li>伤病</li>
                </ul>
            </div>
        )
    }
}

export default NbaNav