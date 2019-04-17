import React,{Component} from 'react'
import './headNav.less'

class HeadNav extends Component{
    render(){
        return(
            <div id='headFixed'>
                <div className='header'>
                    <span className='text'>HUPU</span>
                    <div className='inputBox'>
                        <input type="text" placeholder='搜索' id="search" />
                    </div>
                    <span className='right'>
                        <div className='icon'></div>
                        <span className='spanText'>发布</span>
                    </span>
                </div>
    
                {/* 头部导航 */}
                {/* <div className='headerNav'>
                        <ul className='clearfix'>
                            <li>推荐</li>
                            <li>nba</li>
                            <li>视频</li>
                            <li>影视娱乐</li>
                            <li>中国篮球</li>
                            <li>英雄联盟</li>
                            <li>王者荣耀</li>
                        </ul>
                        <div className='navIcon'></div>

                </div> */}
        </div>
        )
    }
}

export default HeadNav