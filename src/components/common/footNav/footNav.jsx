import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './footNav.less'

class FootNav extends Component{
    render(){
        return(
            <div id='footNav'>
                <ul className='clearfix'>
                <Link to='/nav/index'>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>首页</div>
                    </li>
                </Link>
                <Link to='/nav/games/gameList'>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>比赛</div>
                    </li>
                </Link>
                <Link to='/nav/group'>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>社区</div>
                    </li>
                </Link>
                <Link to='/nav/goods'>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>识货</div>
                    </li>
                </Link>
                <Link to='/nav/more'>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>更多</div>
                    </li>
                </Link>
                    
                    
                    
                </ul>
            </div>
        )
    }
}

export default FootNav