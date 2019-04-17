import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import IndexPage from './index/index'
import Game from './game/game'
import Grop from './grop/grop'
import HeadNav from '../../common/headNav/headNav'

class Main extends Component{
    render(){
        return(
            <div>
               {/* <HeadNav /> */}
                <Switch>
                    <Route path='/nav/main/index' component={IndexPage}/>
                    <Route path='/nav/main/game' component={Game}/>
                    <Route path='/nav/main/grop' component={Grop}/>
                    <Redirect to='/nav/main/index'/>

                </Switch>
            </div>
        )
    }
}

export default Main