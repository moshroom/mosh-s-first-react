import React from 'react';
import './Home.css'
//引入组件
import Mycharts from '../component/charts'
import HeaderNav from '../component/headerNav'
import Nav from '../component/nav'

 import  process from '../images/GLinp_b_03.png';
 import  info from '../images/GLinp_b_05.png';

class Home extends React.Component{
    /*constructor(props){
        super(props);
        console.log(this.props.data)
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
    }*/

    render(){
        return(
            <div className="Login">
                <HeaderNav></HeaderNav>
                <Nav></Nav>
                <div className="Login-intro" id="intro">
                    <Mycharts></Mycharts>
                    <div>
                        <img src={process} alt=""/>
                        <img src={info} alt=""/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;
