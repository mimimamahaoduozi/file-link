import React from 'react'
import ReactDom from 'react-dom'
import App from './app.js'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,document.querySelector('#root'));

if(module.hot){
    module.hot.accept();
}
