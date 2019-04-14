import React,{Component} from 'react'
import './news.less'
class News extends Component{
    render(){
        return(
            <div className='news'>
                <div className='left'>
                    <span className='content'>[赛后]76人127-129老鹰，特雷-杨32+6+11抛投绝杀，普林斯23+5，恩比德27+12</span>
                    <div className='bottomBox'>
                        <div className='comment'>
                            <span className='icon'></span>
                            <span className='num'>123456</span>
                        </div>
                        <div className='textBox'>
                            <div className='zd'>置顶</div>
                            <div className='zt'>专题</div>
                        </div>
                    </div>
                </div>
                <div className='right'></div>
            </div>
        )
    }
}
export default News