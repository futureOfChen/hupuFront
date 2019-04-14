import React,{Component} from 'react'
import './item.less'
import axios from 'axios';
class Item extends Component{
    

    render(){
        let {game} = this.props
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
                            <div className='text'>{game.host.name}</div>
                        </div>
                        <div className='middle'>{game.host.score}-{game.guster.score}</div>
                        <div className='right'>
                            <div className='rightIcon'></div>
                            <div className='text'>{game.guster.name}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Item