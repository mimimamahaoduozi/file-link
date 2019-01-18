import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import Router from '../rooter'
import {BrowserRouter, Link} from 'react-router-dom'
import http from '../util/ajax'
import './layout.css'
const { Header, Sider, Content } = Layout;



export default class Layouta extends Component {
    constructor(props){
        super(props)
        this.state={
            collapsed:false
        }
    }
    componentDidMount(){
        // http.post('http://www.qhdlink-student.top/student/login.php',{
        //     username:'yuandong',
        //     userpwd:12345678,
        //     userclass:40,
        //     type:2
        // }).then((res)=>{
        //     console.log(res);
            
        // })
    }
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
  render() {
      return(
        <BrowserRouter>
        <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
            <img src="http://www.qhdlink.com/img/logo.png"></img>
          </div>
          {/* <BrowserRouter> */}
          <Menu theme="dark" mode="inline" >
            <Menu.Item key="1">
               <Link to='/banner'><Icon type="upload" />
                <span>banner图片</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to='/news'><Icon type="solution" />
                <span>新闻</span></Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to='/addnews'><Icon type="solution" />
                <span>添加新闻</span></Link>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to='/user'><Icon type="user" />
                <span>个人中心</span></Link>
            </Menu.Item>
          </Menu>
          {/* </BrowserRouter> */}
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span>秦皇岛朗科后台管理系统</span>
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            <Router></Router>
          </Content>
        </Layout>
      </Layout>
      </BrowserRouter>
      )
  }
}
