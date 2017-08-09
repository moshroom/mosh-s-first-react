import React from 'react';
import {BrowserRouter as Router, Link ,} from 'react-router-dom'
import PropTypes from 'prop-types';
import './login.css'
import bg from '../images/login.png'
import userImg from '../images/login_03.png'
import passImg from '../images/login_06.png'
import check from '../images/login_09.png'
import checkImg from '../images/login_11.png'
import refresh from '../images/login_13.png'
class Login extends React.Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    login(){
        console.log("已登录");
        // this.props.onVerify();
        const userName=document.getElementById("user").value;
        const password=document.getElementById("pass").value;
        console.log(userName)
        // if(userName&&password){
            console.log(this.context)
            this.context.router.history.push('/home')
        // }
    }

    render(){
        return(
            <Router>
                <div className="log">
                    <img src={bg} alt="" className="log-bg"/>
                    <div className="log-intro">
                        <div className="log-form log-user">
                            <label htmlFor="user">
                                <img src={userImg} alt=""/>
                            </label>
                            <input type="text" id="user" placeholder="用户名"/>
                        </div>
                        <div className="log-form">
                            <label htmlFor="pass">
                                <img src={passImg} alt=""/>
                            </label>
                            <input type="password" id="pass" placeholder="密码"/>
                        </div>
                        <div className="log-forget">
                            <Link to="">忘记密码</Link>
                        </div>
                        <div className="log-form">
                            <label htmlFor="check">
                                <img src={checkImg} alt=""/>
                            </label>
                            <input type="text" id="check" placeholder="验证码"/>
                           <img src={check} className="checkFresh" alt=""/>
                           <img src={refresh} alt=""/>
                        </div>
                        <div className="log-form log-btn">
                            <button className="btn btn-primary" onClick={this.login.bind(this)}>登 录</button>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }

}

export default Login
