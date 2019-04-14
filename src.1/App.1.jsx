// import 'es6-promise/auto';
// import React, { Component } from 'react';
// import ReactDOM, { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import route from './Config/Route'; //路由配置
// import store from './Config/Store';


// import 'normalize.css'; //重置浏览器默认样式
// // import 'flex.css'; //flex布局
// import 'flex.css/dist/data-flex.css'; //flex布局
// import './Style/style.less'; //加载公共样式
// import './Iconfont/iconfont.css'; //字体图标
// import 'github-markdown-css'; //markdown css

// store.subscribe(function () {
//     // console.log(store.getState());
// });


// render(
//     <Provider store={store}>
//     {route}
//     </Provider>,
//     document.body.appendChild(document.createElement('div'))
// );

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { HashRouter, Router, Route, Link, Switch } from 'react-router-dom';
// import { Provider, connect } from 'react-redux';
// import { createStore } from 'redux'
// // import IndexList from './Component/IndexList'; //首页组件


// class Welcome extends Component {

//     render() {
//         return <div>
//             <h3>欢迎来到我的天下</h3>
//             <Link to='/login/jack'>摸鱼</Link>
//         </div>
//     }
// }
// class Login extends Component {
//     componentDidMount() {
//         console.log(this.props.match.params.id);
//     }
//     render() {
//         return <h3>请您先登录一下</h3>
//     }
// }
// class Content extends Component {
//     render() {
//         return <h3>这是一款全新的游戏</h3>
//     }
// }

// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory();




// const initialState = {
//     num: 100
// };
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'add':
//             return {
//                 num: state.num + 1
//             };
//             break;
//         default:
//             return state;
//     }
// }
// const store = createStore(reducer);

// const mapStateToProps = (state, ownProps) => ({
//     num: state.num
// })

// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: () => { dispatch({type:'add'})}
//     }
// }

// class App extends Component {
//     render() {
//         let { num, add, store } = this.props;
//         return <Provider store={store}>


//             <Router history={history}>
//                 <div>
//                     {/* <h1>史前公园</h1> */}
//                     <div>{num}</div>
//                     <Switch>
//                         <Route path='/' exact component={Welcome} />
//                         <Route path='/login/:id' component={Login} />
//                     </Switch>
//                     <button onClick={add}>添加</button>

//                 </div>

//             </Router>
//         </Provider>
             

//     }
// }



// App = connect(mapStateToProps, mapDispatchToProps)(App);

// render(<App store={store}/>, document.body.appendChild(document.createElement('div')));    


import React , {Component} from 'react';
import {render} from 'react-dom';

// 路由
import {BrowserRouter,Route,NavLink,Switch,Redirect} from 'react-router-dom';

// 状态管理
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';

import Promise from 'promise'

let state = {
    num: 100
}

let reducer = function(initState = state , action) {
    switch(action.type) {
        case 'add':
            return {
                num: initState.num + action.num
            }
            break;
        default:
            return initState;
    }
}

let store = createStore(reducer);


class Welcome extends Component {
    render(){
        return <div>
            <h3 style={{color:"green"}}>这是欢迎页面</h3>
            <NavLink to='/main' >跳转到详情页</NavLink>
        </div>
    }
}

class Main extends Component {
    render() {
        return <div style={{color:"blue"}}>
            <h3>这是详情页面</h3>
            <NavLink to='/' >跳转到欢迎页</NavLink>

            <div> {this.props.num} </div>
            <button onClick= {this.props.add}>点我呀</button>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => ({
    num: state.num
})

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => { dispatch({type:'add',num:10}) }
    }
}



Main = connect(mapStateToProps,mapDispatchToProps)(Main)

class App extends Component {

    componentDidMount() {
        let p = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('success')
            }, 2000);
        });
        p.then(data=>{
            console.log(data);
        })
    }

    render() {
        return <BrowserRouter>
            <div> 
                {/* <h1>这是一款全新的游戏</h1> */}
                <Switch>
                    <Route path="/" exact component={Welcome}>
                    </Route>
                    <Route path="/main" component={Main}/>
                    
                </Switch>
            </div>
        </BrowserRouter>
    }
}



render(
   <Provider store={store}>
       <App/>
   </Provider>  
,document.body.appendChild(document.createElement('div')))




