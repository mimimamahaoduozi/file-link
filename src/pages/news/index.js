import React, { Component } from 'react'
import http from '../../util/ajax'
import { Table,Modal, Button} from 'antd';
import {Link,Bro} from 'react-router-dom'
const columns = [{
  title: '标题',
  dataIndex: 'title_news',
  key: 'title',
  render: (text,record) => <Link to={'/newsdetail/'+record.id_news}>{text}</Link>,
}, {
  title: '日期',
  dataIndex: 'time_news',
  key: 'date',
}];
export default class News extends Component {
  constructor(props){
    super(props)
    this.state={
      img:[],
      visible: false
    }
  }
  componentDidMount(){
    http.post('http://www.qhdlink-student.top/student/newsa.php',{
      username:'yuandong',
      userpwd:12345678,
      userclass:40,
      type:2,
    }).then((res)=>{
      console.log(res)
      let _img=[];
      for (const k1 in res.data) {
        _img.push(res.data[k1])
      }
      console.log(_img)
      this.setState({
        img:_img
      })
    })
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={this.state.img}/>
        <Button type="primary" ><Link to='/addnews'>添加新闻</Link></Button>

      </div>
    )
  }
}
