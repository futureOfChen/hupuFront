import React , {Component} from 'react'
import FooterNav from '../common/footNav/footNav'
import {Route} from 'react-router-dom'
import Main from './main/Main'
import Goods from './goods/Goods'
import More from './more/More'

class MainNav extends Component {
    render() {
        return <div>
            <div>
                <Route path='/nav/main' component={Main}></Route>
                <Route path='/nav/goods' component={Goods}></Route>
                <Route path='/nav/more' component={More}></Route>
            </div>
            <FooterNav></FooterNav>
        </div>
    }
}

export default MainNav;