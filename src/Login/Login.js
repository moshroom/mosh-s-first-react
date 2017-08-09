import React from 'react';
import {BrowserRouter as Router, Link ,} from 'react-router-dom'
import PropTypes from 'prop-types';
import GVerify from '../component/GVerify'
import './login.css'
import bg from '../images/login.png'
import userImg from '../images/login_03.png'
import passImg from '../images/login_06.png'
import check from '../images/login_09.png'

class Login extends React.Component{
    // constructor(props){
    //     super(props)

    // }
    /*componentDidMount(){
        let verifyCode = new GVerify("v_container");
             /!*document.getElementById("my_button").onclick = function(){
             var res = verifyCode.validate(document.getElementById("code_input").value);
             if(res){
                alert("验证正确");
             }else{
                alert("验证码错误");
             }*!/
         }
    }*/
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

                        <GVerify></GVerify>
                        {/*<div id="v_container" style={divStyle} className="checkFresh">
                            <canvas id="verifyCanvas" width="77" height="30"></canvas>
                        </div>*/}
                       {/*<img src={check} className="checkFresh" alt=""/>*/}

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
