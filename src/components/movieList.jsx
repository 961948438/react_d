import React, { Component } from 'react'
import axios from 'axios'
import  {Space, Spin,Alert} from  'antd'

export default class movieList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            params: this.props.match.params,
            movies: [],
            nowPage: parseInt(this.props.match.params.page) || 1,
            pageSize: 14,
            total: 0,
            isloading: true
        }
    }
    componentWillMount(){
        window.setTimeout(()=> {
            console.log('5秒后即将更新')
            this.setState({
                isloading: false
            })
        },5000)
        axios.get('http://t.yushu.im/v2/movie/in_theaters').then(r => {
            console.log(r)
        })
        
    }
    componentWillUpdate(){
        window.addEventListener('hashchange',() =>  {
            this.setState(function(nextprops,nextstate){
                return {
                    params: this.props.match.params
                }
            })
        })
        
    }
    render() {
        return (
            <div>
                {/* <h1>movie栏目</h1>
                <h1>{this.state.params.type}---{this.state.params.page}</h1> */}
                {this.renderlist()}
            </div>
        )
    }
    renderlist = () => {
        if(this.state.isloading) {
            return <Spin tip="Loading..." size="large">
            <Alert
            message="正在请求电影列表"
            description="精彩内容没了，哈哈哈！"
            type="info"
            />
        </Spin>
        } else {
            return <h1>加载完成了</h1>
        }
    }
}
