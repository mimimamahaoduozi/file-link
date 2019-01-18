import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login'
import User from './pages/user/index'
import Banner from './pages/banner/index'
import News from './pages/news/index'
import AddNews from './pages/addnews/index'
import Newsdetail from './pages/newsdetail/index'
export default class Rooter extends Component {
  render() {
    return (
        <div>
          <Route path='/user' component={User}></Route>
          <Route path='/banner' component={Banner}></Route>
          <Route path='/news' component={News}></Route>
          <Route path='/addnews' component={AddNews}></Route>
          <Route path='/newsdetail/:id' component={Newsdetail}></Route>
        </div>
    )
  }
}
