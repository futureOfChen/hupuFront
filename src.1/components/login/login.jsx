import React,{Component} from 'react'
import axios from 'axios'
import './login.less'
// import { start } from 'repl';
class Login extends Component{
    constructor(props){
        super(props);
        this.getCode = this.getCode.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePasChange = this.handlePasChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state={
            tex:'',
            pas:'',
            code:''
        }
    }
    //获取验证码
    getCode(){
        axios.get('http://192.168.1.100:8000/getCode')
        .then(res=>{
                let {code} = res.data
                this.setState({code})
            alert(`验证码为${code}`)
            // console.log(code);
        })
        .catch(err=>{
            alert(err)
        })
    }

    handleTextChange(event){
        const tex = event.target.value.trim()
        this.setState({
            tex
        })
    }
    handlePasChange(event){
        const psd = event.target.value.trim()
        this.setState({
            psd
        })
    }

    //点击登录后的回调
    handleClick() {
        let {tex} = this.state
        let {psd} = this.state

        if(tex.length == 0 || psd.length == 0){
            alert('内容不能为空')
        }else {
            let {code} = this.state
            if(psd===code){
                axios.post('http://192.168.1.100:8000/login',{
                    phone:tex,
                })
                .then(res=>{
                    let statusCode = res.data.statusCode
                    if(statusCode==200){
                        this.props.history.push('/main')
                    }else{
                        alert('号码不正确')
                        console.log(res)
                       
                    }
                })
                // alert('登录成功')
            }else{
                alert('验证码错误')
            }
        }

        // alert(tex)
    }
    render(){
        return(
            <div id='login'>
                {/* 头部 */}
                
                <div className='header'>
                    <h1>手机快捷登录</h1>
                    <div>您需要登录才能进行后续操作</div>
                </div>

                {/* input登录框 */}
                <div className='inputGroup'>
                    <div className='text'>
                        <span className='tip'>
                            <span className='icon'></span>
                            <span className='num'>+86</span>
                        </span>
                        
                        <input type="text" placeholder='请输入手机号' value={this.state.content} onChange={this.handleTextChange}/>
                    </div>
                    <div className='password'>
                        <input type="password" placeholder='请输入验证码'value={this.state.content} onChange={this.handlePasChange}/>
                        <a href="###" onClick={this.getCode}>获取验证码</a>
                    </div>
                    <p>未注册手机验证后自动注册</p>
                    <button onClick={this.handleClick}>登 录</button>
                    <div className='loginLinks'>
                        <a href="###">账号密码登录</a>
                        <div>其他方式登录</div>
                    </div>
                    <div className='link'>
                        <div>
                            <div className='icon'></div>
                            <span className='linkText'>微信登录</span>
                        </div>
                        <div>
                            <div className='icon'></div>
                            <span className='linkText'>qq登录</span>
                        </div>
                    </div>
                    <div className='foot'>
                        <span>完成登录即代表已同意</span>
                        <a href="###">虎扑用户协议(含隐私政策)</a>
                    </div>
                    
                    


                </div>

                
            </div>
        )
    }
}
export default Login