import React,{Component} from 'react'

import './item.less'


class Item extends Component{
    render(){
        return(
            <div className='item'>
                <div className='detail'>
                    <div className='title'>
                        <span>常规赛</span>
                        <span className='text'>集锦</span>
                    </div>
                    <div className='content clearfix'>
                        <div className='left'>
                            <div className='leftIcon'></div>
                            <div className='text'>快船</div>
                        </div>
                        <div className='middle'>100-100</div>
                        <div className='right'>
                            <div className='rightIcon'></div>
                            <div className='text'>勇士</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Item