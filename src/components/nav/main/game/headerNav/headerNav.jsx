import React,{Component} from 'react'

import './headerNav.less'

class HeaderNav extends Component{
    render(){
        return(
                <div id='headerNav'>
                    <ul className='clearfix'>
                        <li>推荐</li>
                        <li className='borderRed'>nba</li>
                        <li>视频</li>
                        <li>影视娱乐</li>
                        <li>中国篮球</li>
                        <li>英雄联盟</li>
                        <li>王者荣耀</li>
                    </ul>
                    <div className='navIcon'></div>
                </div>

        )
    }
}
export default HeaderNav