import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import IndexPage from './index/index'
import Games from './games/Games'
import Group from './group/Group'
import Goods from './goods/goods'
import More from './more/more'
import FootNav from '../common/footNav/footNav'

class Nav extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path='/nav/index' component={IndexPage}/>
                    <Route path='/nav/games' component={Games}/>
                    <Route path='/nav/group' component={Group}/>
                    <Route path='/nav/goods' component={Goods}/>
                    <Route path='/nav/more' component={More}/>
                    {/* <Redirect to='/nav/main' /> */}
                    <FootNav></FootNav>
                </Switch>
                <FootNav /> 
            </div>
        )
    }
}

export default Nav