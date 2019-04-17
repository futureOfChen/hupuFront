import React,{Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import './common/reset.css'


import Login from './components/login/login'
import MainNav from './components/nav/Nav'
import Contents from './components/contents/Contents'

class App extends Component{
    render(){
        return(
          
            <BrowserRouter>
                 <div>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/nav' component={MainNav} />
                        <Route path='/content' component={Contents}></Route>
                        <Redirect to='/login'/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
render(<App />,document.body.appendChild(document.createElement('div')))
    