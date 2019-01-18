import {Input,Button} from 'antd';
import Editor from 'wangeditor';
import React from 'react'
var editor2 = new Editor('#editor1');
editor2.customConfig.emotions = [
    {
        // tab 的标题
        title: '默认',
        // type -> 'emoji' / 'image'
        type: 'image',
        // content -> 数组
        content: [
            {
                alt: '[坏笑]',
                src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
            },
            {
                alt: '[舔屏]',
                src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
            }
        ]
    },
    {
        // tab 的标题
        title: 'emoji',
        // type -> 'emoji' / 'image'
        type: 'emoji',
        // content -> 数组
        content: ['😀', '😃', '😄', '😁', '😆']
    }
]
export default class AddNews extends React.Component {
  constructor(props){
      super(props)
      this.state={
          con:{}
      }
  }
  componentDidMount() {
    editor2.create()
  }
  // 获取内容
  getContent=()=> {
    // var content = this.editor2.innerHTML;

    // console.log(editor2.txt.html());
    // console.log(this.refs.title.input.value);
    let _title=this.refs.title.input.value;
    let _con=editor2.txt.html();
    let _time=new Date();
    this.setState({
        con:{
            title:_title,
            con:_con,
            time:_time
        }
    })
  }
    

  render() {
    return (
        <div>
            <div >
            新闻标题：<Input ref='title'></Input>
            </div>
            <br/>
            <br/>
            <div id="editor1" style={{
				width: '100%',
				height: '500px'
			}} ></div>
            <h1>
                {this.state.con.title}
            </h1>
            <p>
                {this.state.con.con}
            </p>
            <Button onClick={this.getContent} type='primary'>确认提交</Button>
        </div>
    );
  }
}