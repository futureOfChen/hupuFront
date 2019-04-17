import React,{Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import './common/reset.css'

import Login from './components/login/login'
import Nav from './components/nav/nav'
import Contents from './components/contents/contents'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/nav' component={Nav} />
                    <Route path='/contents' component={Contents} />
                    <Redirect to='login'/>

                </Switch>
            </BrowserRouter>
        )
    }
}

render(<App />,document.body.appendChild(document.createElement('div')))