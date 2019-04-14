import React,{Component} from 'react'
import './footNav.less'

class FootNav extends Component{
    render(){
        return(
            <div id='footNav'>
                <ul className='clearfix'>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>首页</div>
                    </li>
                    <li>
                        <div className='footIcon'></div>
                        <div className='footText'>比赛</div>
                    </li>
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