import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Item from './item'
import Links from './links'
import News from './news'
import FootNav from './footnav'
import './main.less'
class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            games:[]
        }
    }
    
    componentDidMount(){
        axios.post('http://192.168.1.100:8000/getGames',{login:true})
        .then(res=>{
            if(res.data.statusCode==200){
                let {games} = res.data
                this.setState({games})
            
            }
        
            
        })
    }
    render(){
        return(
            <div id='main'>
                {/* //头部 */}
                <div className='headFixed'>
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
                    <div className='headerNav'>
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

                    </div>
                </div>
                    {/* item详情 */}
                <div className='allContent'>
                    <div className='game clearfix'>
                        {this.state.games.map((game,index)=><Item  key={index} game={game}/>)}
                    

                    </div >

                    {/* link导航 */}
                    <Links />
                    {/* 新闻详情 */}
                    <Link to='/news'>
                        <News />
                    </Link >
                    <Link to='/news'>
                        <News />
                    </Link>
                    <Link to='/news'>
                        <News />
                    </Link>
                    <Link to='/news'>
                        <News />
                    </Link>
                    <Link to='/news'>
                        <News />
                    </Link>
                    
                </div>
                <FootNav />
            </div>
        )
    }
}
export default Main