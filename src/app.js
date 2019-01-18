import React, { Component } from 'react';
import Router from './rooter'
import  {Redirect,Route,BrowserRouter} from 'react-router-dom'
import Layouta from './components/layout'
import Login from './pages/login/login'
import {connect} from 'react-redux'
import './style.less'
import './index.css'
import axios from 'axios'
import qs from 'qs';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            items:[
                1,2,3,4,5
            ],
            form:{
                getFieldDecorator:function(key,val){
                    console.log(key);
                    
                    return val
                }
            }
        }
    }
    render(){
        const isLogged=sessionStorage.getItem('isLogin') === "ok" ? true : false;
        return (
            isLogged?<Layouta></Layouta>:<Login></Login>
        )
    }
}
export default connect(state => state,{})(App)
