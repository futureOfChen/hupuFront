import React,{Component} from 'react'
// import {Link} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Item from './item/item'
import './news.less'
class Detail extends Component{
    render(){
        return(
            <div id='detail'>
                <div className='header'>
                    <Link to='/main'>
                        <div>《</div>
                    </Link>
                    <div>虎扑3月24日讯 独行侠今日在客场以126-91击败勇士，</div>
                    <div>独行侠本场比赛净胜对手35分创队史面对勇士的第二大净胜分差</div>
                </div>

                <div className='information'>
                    <div className='nav'>
                        <span className='red'>1</span>
                        <span>/4 赛后战绩</span>
                    </div>
                    <Link to='/newDetail'>
                        <Item />
                    </Link>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        )
    }
}
export default Detail