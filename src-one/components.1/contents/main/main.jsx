import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from'axios'
import './main.less'
import Item from './item/item'
import News from './news/news'
import Links from './links/links'
import FootNav from './footNav/footNav'

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
            let {games} = res.data
            this.setState({games})
            console.log(games)
        })
    }
    render(){
        // console.log(this.state.games)
        return(
            <div id='main'>
            {/* //头部 */}

                {/* item详情 */}
            <div className='allContent'>
                <div className='game clearfix'>
                {this.state.games.map((game,index)=><Item key={index} game={game}/>)}
                    {/* <Item/>
                    <Item/>
                    <Item/>
                    <Item/> */}
                

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
          
        </div>
        )
    }
}

export default Main