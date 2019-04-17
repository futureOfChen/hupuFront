import React , {Component} from 'react';
import './gameItem.less'

class GameItem extends Component{
    render(){
        return(
            <div id='gameItem'>
                <div className='palyerName'>
                    <div className='topBox'>
                        <div className='platerIcon'></div>
                        <div className='platerText'>猛龙</div>
                        <div className='num'>82</div>
                    </div>
                    <div className='topBox'>
                        <div className='platerIcon'></div>
                        <div className='platerText'>魔术</div>
                        <div className='num'>111</div>

                    </div>
                   
                </div>

                <div className='rightBox'>
                    <div className='state'>已结束</div>
                    <div className='jj'>集锦</div>
                </div>
                {/* <div className='num'>
                    <div className='top'>82</div>
                    <div className='top'>111</div>
                </div> */}
                {/* <div className='message'>
                    <div className=''>第三节</div>
                    <div className='time'>7:45</div>
                    <div className='live'>LIVE</div>

                </div> */}
            </div>
        )
    }
}
export default GameItem