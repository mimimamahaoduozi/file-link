import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import {connect} from 'react-redux'
import {LogIn,LogOut} from '../../store/actions'
import './login.css'
import http from '../../util/ajax'
const FormItem =  Form.Item;
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        http.post('http://www.qhdlink-student.top/student/login.php',{
          ...values,
          type:2
        }).then((res)=>{
          // console.log(res)
          // if (res.data === 'ok'){
            sessionStorage.setItem('isLogin',res.data)
            this.props.LogOut()
          // }
        }).then(()=>{
          location.reload()
        })
      }
    });
  }

  render() {
    console.log(this.props.isLogin);
    
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="content">
     <Form onSubmit={this.handleSubmit} className="login-form">
     <h1>用户登录</h1>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('userpwd', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('userclass', {
            rules: [{ required: true, message: '请输入班级' }],
          })(
            <Input prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Class" />
          )}
          <br/>
          <br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}
Login = Form.create({ name: 'normal_login' })(Login);
export default connect(state=>({
  isLogin:state.isLogin
}),{
  LogIn,
  LogOut
})(Login)
// export default Login