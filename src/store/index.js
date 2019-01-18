import {createStore} from 'redux'

let destate={
    isLogin:false
}
function counter(state = destate, action) {
    switch (action.type) {
      case 'LOGIN':
        return {isLogin:true}
      case 'LOGOUT':
        return {isLogin:false}
      default:
        return state
    }
  }
  let store = createStore(counter)
  export default store;