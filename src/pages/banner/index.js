import React, { Component } from 'react'
import http from '../../util/ajax'
import { Upload, Button, Icon } from 'antd';
import './index.css'


const fileList = [{
  uid: '-1',
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
  uid: '-2',
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];



const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};


export default class Banner extends Component {
  constructor(props){
    super(props);
    this.state={
      img:[]
    }
  }
  componentDidMount(){
    http.post('http://www.qhdlink-student.top/student/banner.php',{
      username:'yuandong',
      userpwd:12345678,
      userclass:40,
      type:2,
    }).then((res)=>{
      console.log(res)
      let _img=[];
      for (const k1 in res.data) {
        for (const key in res.data[k1]) {
          // console.log(key,res.data[k1][key])
          if(key=='path_banner'){
            _img.push(res.data[k1][key])
          }
        }
      }
      console.log(_img)
      this.setState({
        img:_img
      })
    })
  }
  render() {
    console.log(this.state.img.length)
    return (
      <div>
        {
          this.state.img.length?this.state.img.map((index,v)=>{
            return<img src={'http://www.qhdlink-student.top/'+index} key={index} className='img'></img>
          }):<div>banner</div>
        }
        <div>
          <br />
          <Upload {...props2}>
            <Button>
              <Icon type="upload" /> 上传图片
            </Button>
          </Upload>
        </div>
      </div>
    )
  }
}
