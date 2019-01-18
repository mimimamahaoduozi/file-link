import React, { Component } from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
// import {withRouter} from 'react-router'
export default class User extends Component {
  constructor(){
    super();
    this.state={
      isLogin:true
    }
  }
  logout = () =>{
    this.setState({
      isLogin:!this.isLogin
    })
    // sessionStorage.setItem('isLogin','no')
  }
  render() {
    return (
      <div>
        <Button type="danger" onClick={this.logout}>退出登录</Button>
      </div>
    )
  }
}
