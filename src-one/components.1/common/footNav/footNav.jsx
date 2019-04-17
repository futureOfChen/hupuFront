import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './footNav.less'

class FootNav extends Component{
    render(){
        return(
            <div id='footNav'>
                <ul className='clearfix'>
                <Link to='/login'>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>首页</div>
                    </li>
                </Link>
                <Link to='/gamesDetail'>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>比赛</div>
                    </li>
                </Link>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>社区</div>
                    </li>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>识货</div>
                    </li>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>更多</div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default FootNav