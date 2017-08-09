import React from 'react';

import logo from '../images/image_02.png';

class HeaderNav extends React.Component{
    render(){
        return(
            <div className="Login-header">
                <div className="Login-header-nav">
                    <img src={logo} className="Login-logo" alt="logo" />
                </div>
                <div className="Login-header-nav">
                    <p>报表</p>
                </div>
            </div>
        )
    }
}

export default HeaderNav;

