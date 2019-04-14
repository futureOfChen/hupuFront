import React,{Component} from 'react'
import axios from 'axios'
import './login.less'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            text:'',
            psd:'',
            code:''
        }
        this.getCode = this.getCode.bind(this)
        this.textChange = this.textChange.bind(this)
        this.psdChange = this.psdChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    textChange(event){
        let text = event.target.value
        this.setState({text})
    }
    psdChange(event){
        let psd = event.target.value
        this.setState({psd})
    }    
        // 
    getCode(){
        axios.get('http://192.168.1.100:8000/user/getCode')
        .then(res=>{
            let {code} = res.data
            this.setState({code})
            alert(`验证码为:${code}`)
        })

        
       
    }
    handleClick(){
        let text = this.state.text.trim()
        let psd = this.state.psd.trim()
        let {code} = this.state
        if(text.length===0 || psd.length===0){
            if(text.length===0){
                alert('手机号码不能为空')
            }else if(psd.length===0){
                alert('验证码不能为空')
            }
        }else{
            if(psd==code){
                axios.post('http://192.168.1.100:8000/login',{
                    phone:text
                })
                .then(res=>{
                    let {statusCode} = res.data
                    if(statusCode==200){
                        this.props.history.push('/main')
                    }else{
                        alert('手机号码错误')
                    }
                    
                })
            }else{
                alert('验证码错误')
            }
        }
       
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
                        
                        <input type="text" placeholder='请输入手机号' value={this.state.text} onChange={this.textChange}/>
                    </div>
                    <div className='password'>
                        <input type="password" placeholder='请输入验证码'value={this.state.psd} onChange={this.psdChange}/>
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
