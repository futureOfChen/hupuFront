import React,{Component} from 'react'
import Comment from './comment/comment'
import './comments.less'
class Comments extends Component{
    render(){
        return(
                <div id='comments'>
                    <div className='head'>这些评论亮了</div>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
        )
    }

}
export default Comments