import axios from 'axios'
import qs from 'qs'
import { rejects } from 'assert';

let http = {
    post:'',
    get:''
}

http.post = function(api,data){
    let params = qs.stringify(data)
    
    return new Promise((resolve,reject) => {
        axios.post(api,params).then((res) => {
            resolve(res)
        })
    })
}

http.get = function(api){
    return new Promise((resolve,reject)=>{
        axios.get(api) .then((res)=>{
            resolve(res)
        })
    })
}

export default http