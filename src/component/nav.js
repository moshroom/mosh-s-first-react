import React from 'react';

import  nav from '../images/GLinp_03.png';
import  search from '../images/GLinp_06.png';
import  change from '../images/GLinp_08.png';
import  item from '../images/GLinp_10.png';
import  thing from '../images/GLinp_12.png';
import  save from '../images/GLinp_14.png';
import  user from '../images/GLinp_16.png';

class Nav extends React.Component{
    render(){
        return(
            <div className="Login-intro">
                <nav className="Login-intro-nav">
                    <ul>
                        <li className="choose">
                            <div>
                                <img src={nav} alt=""/>
                                <p>概况</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={search} alt=""/>
                                <p>检索</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={change} alt=""/>
                                <p>交换</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={item} alt=""/>
                                <p>元素</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={thing} alt=""/>
                                <p>事件</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={save} alt=""/>
                                <p>储存</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={user} alt=""/>
                                <p>用户</p>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;

