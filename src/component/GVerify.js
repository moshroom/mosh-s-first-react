import React from 'react';

import checkImg from '../images/login_11.png'
import refresh from '../images/login_13.png'

class GVerify extends React.Component{
    componentDidMount(){
        let that=this;
        let options={
            id: that.refs.v_container, //容器Id
            canvasId: that.refs.verifyCanvas, //canvas的ID
            width: "90", //默认canvas宽度
            height: "30", //默认canvas高度
            type: "blend", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
            code: "",
            numArr: "0,1,2,3,4,5,6,7,8,9".split(","),//数字
            letterArr: getAllLetter(),//生成字母数组
        }
        function GVerify() { //创建一个图形验证码对象，接收options对象为参数
            this._init();//初始化
            this.refresh();//生成验证码
        }

        GVerify.prototype = {
            /**版本号**/
            version: '1.0.0',

            /**初始化方法**/
            _init: function() {
                // var con = options.id;//获得验证码的DIV
                // const canvas = options.canvasId;//获得画布   IE不能支持canvas，可以增加excanvas.js插件，但是还是不支持createelement()的形式
                const canvasFresh = that.refs.refresh
                // options.width = con.offsetWidth > 0 ? con.offsetWidth : "90";//如果有宽度就使用自己的，没有就默认100
                // options.height = con.offsetHeight > 0 ? con.offsetHeight : "30";//如果有长度就使用自己的，没有就默认30
                //    canvas.id = options.canvasId;//为兼容IE把这些去掉
                //    canvas.width = options.width;
                //    canvas.height = options.height;
                //    canvas.style.cursor = "pointer";
                //    canvas.innerHTML = "您的浏览器版本不支持canvas";
                //    con.appendChild(canvas);
                var parent = this;//把this赋值parent
                canvasFresh.onclick = function(){//验证码点击切换刷新
                    parent.refresh();
                }
            },

            /**生成验证码**/
            refresh: function() {
                options.code = "";//定义验证码为""
                var canvas = options.canvasId;//获得验证码画布
                if(canvas.getContext) {//
                    var ctx = canvas.getContext('2d');//获得绘画对象
                }else{//
                    return;
                }
                ctx.textBaseline = "middle";
                ctx.fillStyle = randomColor(180, 240);
                ctx.fillRect(0, 0, options.width, options.height);//绘制矩形
                console.log(options.width+'-----3')
                /* x:矩形起点横坐标（坐标原点为canvas的左上角，当然确切的来说是原始原点，后面写到变形的时候你就懂了，现在暂时不用关系）
                 y:矩形起点纵坐标
                 width:矩形长度
                 height:矩形高度*/
                if(options.type == "blend") { //判断验证码类型 blend:数字字母混合类型、number:纯数字、letter:纯字母
                    var txtArr = options.numArr.concat(options.letterArr);
                } else if(options.type == "number") {
                    var txtArr = options.numArr;
                } else {
                    var txtArr = options.letterArr;
                }
                for(var i = 1; i <= 4; i++) {
                    var txt = txtArr[randomNum(0, txtArr.length)];//取得一个字符
                    options.code += txt;//连接验证码
                    ctx.font = randomNum(options.height/1, options.height) + 'px SimHei'; //随机生成字体大小
                    ctx.fillStyle = randomColor(50, 160); //填充的样式 随机生成字体颜色
                    ctx.shadowOffsetX = randomNum(-3, 3);//阴影的横向位移量
                    ctx.shadowOffsetY = randomNum(-3, 3);//阴影的纵向位移量
                    ctx.shadowBlur = randomNum(-3, 3);//阴影的模糊范围（值越大越模糊）
                    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";//阴影的颜色
                    var x = options.width / 5.2 * i;
                    var y = options.height / 2;
                    var deg = randomNum(-30, 30);
                    /**设置旋转角度和坐标原点
                     *
                     *  平移context.translate(x,y)
                     *    x:坐标原点向x轴方向平移x
                     *    y:坐标原点向y轴方向平移y
                     *
                     * **/
                    ctx.translate(x, y);
                    ctx.rotate(deg * Math.PI / 180);//旋转context.rotate(angle)
                    ctx.fillText(txt, 0, 0);//context.fillText(text,x,y)
                    /**恢复旋转角度和坐标原点**/
                    ctx.rotate(-deg * Math.PI / 180);
                    ctx.translate(-x, -y);
                }
                /**绘制干扰线**/
                for(var i = 0; i < 4; i++) {
                    ctx.strokeStyle = randomColor(40, 180);//随机颜色
                    ctx.beginPath();//路径  context.beginPath()
                    ctx.moveTo(randomNum(0, options.width), randomNum(0, options.height));//绘制线段 context.moveTo(x,y)  context.lineTo(x,y)
                    ctx.lineTo(randomNum(0, options.width), randomNum(0, options.height));
                    ctx.stroke();
                }
                /**绘制干扰点**/
                for(var i = 0; i < options.width/4; i++) {
                    ctx.fillStyle = randomColor(0, 255);
                    ctx.beginPath();
                    ctx.arc(randomNum(0, options.width), randomNum(0, options.height), 1, 0, 2 * Math.PI);// 圆弧context.arc(x, y, radius, starAngle,endAngle, anticlockwise)
                    ctx.fill();
                }
            },

            /**验证验证码**/
            validate: function(code){
                var code = code.toLowerCase();
                var v_code = options.code.toLowerCase();
                //console.log(v_code);
                if(code == v_code){
                    return true;
                }else{
                    this.refresh();
                    return false;
                }
            }
        }
        /**生成字母数组**/
        function getAllLetter() {
            var letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
            return letterStr.split(",");
        }
        /**生成一个随机数**/
        function randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        /**生成一个随机色**/
        function randomColor(min, max) {
            var r = randomNum(min, max);
            var g = randomNum(min, max);
            var b = randomNum(min, max);
            return "rgb(" + r + "," + g + "," + b + ")";
        }
        let verifyCode = new GVerify();
        let codeInput = that.refs.verifyCode;
        codeInput.onchange = () => {
            console.log(codeInput)
            console.log(codeInput.value)
            if(codeInput.value.length>3){
                let res = verifyCode.validate(codeInput.value)
                if(res){
                    alert("验证正确");
                }else{
                    alert("验证码错误");
                }
            }
        }
    }
    render(){
        let divStyle={
            display: 'inline-block',
            width: '90px',
            height: '30px'
        }

        return(
        <div className="log-form">
            <label htmlFor="check">
                <img src={checkImg} alt=""/>
            </label>
            <input type="text" id="check" placeholder="验证码" ref="verifyCode"/>
            <div ref="v_container" style={divStyle} className="checkFresh">
                <canvas ref="verifyCanvas" width="90" height="30"></canvas>
            </div>
            {/*<div id="v_container" style={divStyle} className="checkFresh">
             <canvas id="verifyCanvas" width="77" height="30"></canvas>
             </div>*/}
            {/*<img src={check} className="checkFresh" alt=""/>*/}
            <img src={refresh} ref='refresh' alt=""/>
        </div>

        )
    }
}

export default GVerify;
