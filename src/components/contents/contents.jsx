import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import NewContent from './newContent/newContent'
import Details from './details/details'



class Contents extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path='/contents/newContent' component={NewContent}/>
                    <Route path='/contents/details' component={Details}/>
                    <Redirect to='/contents/newContent' /> 
                
                  
                </Switch>
               
            </div>
        )
    }
}

export default Contents