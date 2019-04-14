import React,{Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Login from './components/login/login'
import Main from './components/main/main'
import News from './components/news/news'
import NewDetail from './components/newDetail/newDetail'
import './common/reset.css'


class App extends Component{
    render(){
        return '';
        return(
            <div>
                {/* <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/main' component={Main}></Route>
                    <Route path='/news'component={News}></Route>
                    <Route path='/newDetail' component={NewDetail}></Route>
                    <Redirect to= '/login'/>
                </Switch> */}
            </div>
        )
    }
       
    
}
render(<BrowserRouter><App/></BrowserRouter>,document.body.appendChild(document.createElement('div')))