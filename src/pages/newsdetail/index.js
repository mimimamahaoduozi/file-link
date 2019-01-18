import React, { Component } from 'react'
import http from '../../util/ajax'
export default class Newsdetail extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        http.post('http://www.qhdlink-student.top/student/newsinfo.php',{
            username:'yuandong',
            userpwd:12345678,
            userclass:40,
            type:2,
            m:parseInt(this.props.match.params.id)
        }).then((res)=>{
            this.setState({
                data:res.data[0]
            })
        })
    }
  render() {
      let arr = Object.keys(this.state.data)
    return (
        arr.length==0?<div>正在疯狂加载。。。</div>:<div>
            <h1>{this.state.data.title_news}</h1>
            <span style={{
                lineHeight:'50px'
            }}>{this.state.data.time_news}</span>
            <p dangerouslySetInnerHTML = {{ __html:this.state.data.info_news }}></p>
        </div>
    )
  }
}
