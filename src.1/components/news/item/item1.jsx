import React,{Component} from 'react'
class Item extends Component{
    render(){
        return(
            <div id='item'>
                <div className='newsItem'>
                    <div className='left'></div>
                    <div className='right'></div>
                </div>
            </div>
        )
    }
}
export default Item