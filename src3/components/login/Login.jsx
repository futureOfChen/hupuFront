import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'

class Login extends Component{
    render(){
        return(
            <div>
                <div>{this.props.num}</div>
                <button onClick={()=>{this.props.add(100)}}>加</button>
             
            </div>
        )
    }
}
// let mapStateToProps = function(state){  
//     return {
//         num:state.num
//     }
// }
// let mapDispatchToProps = function(dispatch){
//     return{
//         add:(value)=>{
//             dispatch({
//                 type:'add',
//                 data:value
//             })
//         },
//         decrease:(value)=>{
//             dispatch({
//                 type:'decrease',
//                 data:value
//             })
//         }
//     }
// }


let mapState = function(state){
    return {
        num:state.num
    }
}

let mapDispatchToProps = function(dispatch){
    return {
        add:(value)=>{
            dispatch({
                type:'add',
                data:value
            })
        }
    }
}



// Login = connect(mapStateToProps,mapDispatchToProps)(Login)
Login = connect(mapState,mapDispatchToProps)(Login)

export default Login