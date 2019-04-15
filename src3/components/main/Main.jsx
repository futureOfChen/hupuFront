import React,{Component} from 'react'
import {connect} from 'react-redux'

class Main extends Component{
    render(){
        return(
            <div>{this.props.num}</div>
        )
    }
}

let mapState = function(state){
    return {
        num:state.num
    }
}

Main = connect(mapState)(Main)
export default Main