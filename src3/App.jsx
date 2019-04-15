import React,{Component} from 'react'
import {render} from 'react-dom'
import {Switch,BrowserRouter,Route,Redirect} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'



import Login from './components/login/Login'
import Main from './components/main/Main'

// let initState = {
//     num:100,
// }

// let store = createStore(function(state=initState,action){
//     switch (action.type){
//         case 'add':
//             return {
//                 num: state.num + (action.data || 1)
//             }
//         case 'decrease':
//             return {
//                 num: state.num - (action.data ||1)
//             }
//         default:
//             return state
//     }
// })
let initState ={
    num:100
}
let store = createStore(function(state = initState,action){
    switch(action.type){
        case 'add':
        return{
            num:state.num+(action.data || 1)
        }
        default :
        return state
            
    }
})



class App extends Component{

    render(){
        return(
            <Provider store = {store}>
                <BrowserRouter >
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/main' component={Main} />
                        <Redirect to='/login'/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        
        )
    }
}

render(<App />,document.body.appendChild(document.createElement('div')))