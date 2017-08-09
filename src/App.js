import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import './App.css';

import Home from './Home/Home'
import Login from './Login/Login'
// import Wrap from './App/app'

/*react-router-dom: Router Route Link
 * Link = 替代a标签，做路由跳转用的 to="/地址"
 * Route = 告诉路由怎么处理路径，path="/进来的路径" component = "{需要显示的组件}"
 * Router = 整个大模块，在Router里面只能有一个子节点，所有的Route和其他组件都要包在一个div里面*/

const history = createHistory()

class App extends Component {

    /*  myLogin(){
     console.log("logged in.....")
     }*/
    /*getInitialState (){
        return {
            myMessage: [ './images/image_02.png',
                './images/GLinp_03.png',
                './images/GLinp_06.png',
                './images/GLinp_08.png',
                './images/GLinp_10.png',
                './images/GLinp_12.png',
                './images/GLinp_14.png',
                './images/GLinp_16.png',
                './images/GLinp_b_03.png',
                './images/GLinp_b_05.png']
        }
    }*/

    render() {
        const part = () => {
            if(1){
                return
            }
        }
        /*
        const initialState = history.location;*/
        return (
            <Router history={history}>
                <Switch className="App">
                    <Route path='/home' component={Home}></Route>
                    <Route path='/' exact component={Login}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;




