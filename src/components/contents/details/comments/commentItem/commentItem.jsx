import React,{Component} from 'react'
import './commentItem.less'
class CommentItem extends Component{
    render(){
        return(
                    <div id='comment'>
                        <div className='left'>
                            <div className='avater'></div>
                        </div>
                        <div className='right'>
                            <div className='rightName'>克莱汤普森</div>
                            <div className='time'>1小时前</div>
                            <div className='commentContent'>1111111111111</div>
                            <div className='commentFoot'>
                                <div className='footIcon'></div>
                                <div className='liangle'>亮了(1234)</div>
                                <div className='reply'>回复</div>
                                <div className='dut'>...</div>
                            </div>
                        </div>
                    </div>
        )
    }

}
export default CommentItem