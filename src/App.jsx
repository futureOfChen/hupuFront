import React,{Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import './common/reset.css'


import Login from './components/login/login'
import Main from './components/main/main'
import News from './components/news/news'
import NewsDetail from './components/newDetail/newDetail'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/main' component={Main} />
                    <Route path='/news' component={News} />
                    <Route path='/newsDetail' component={NewsDetail} />
                    <Redirect to='/login'/>

                    
                    
                </Switch>
            </BrowserRouter>
        )
    }
}
render(<App />,document.body.appendChild(document.createElement('div')))
    