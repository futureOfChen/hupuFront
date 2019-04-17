import React,{Component} from 'react'
import CommentItem from './commentItem/commentItem'
import './comments.less'
class Comments extends Component{
    render(){
        return(
                <div id='comments'>
                    <div className='head'>这些评论亮了</div>
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                 
                </div>
        )
    }

}
export default Comments