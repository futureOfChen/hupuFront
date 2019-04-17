import React,{Component} from 'react'
import './indexLink.less'
class indexLink extends Component{
    render(){
        return(
            <div className='linksNav'>
                    <ul className='clearfix'>
                        <li>
                            <div className='icon'></div>
                            <div>比赛</div>
                        </li>
                        <li>
                            <div className='icon'></div>
                            <div>排行</div>
                        </li>
                        <li>
                            <div className='icon'></div>
                            <div>社区</div>
                        </li>
                        <li>
                            <div className='icon'></div>
                            <div>留言</div>
                        </li>
                        <li>
                            <div className='icon'></div>
                            <div>视频</div>
                        </li>
                    </ul>
                </div>
        )
    }
}
export default indexLink