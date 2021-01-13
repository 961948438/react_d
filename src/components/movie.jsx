import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import { Route, Link } from 'react-router-dom'
import movieList from './movieList'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default class movie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Sider width={200} >
                    <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="正在热映">
                    <Menu.Item >
                        <Link to="/movie/hot_theaters/1">热映</Link>
                    </Menu.Item>
                    <Menu.Item >暂未开放</Menu.Item>
                    <Menu.Item >暂未开放</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="即将上映">
                    <Menu.Item >
                    <Link to="/movie/will_theaters/1">即将上映</Link>
                    </Menu.Item>
                    <Menu.Item >暂未开放</Menu.Item>
                    <Menu.Item >暂未开放</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="GO">
                    <Menu.Item >
                    <Link to="/movie/go_theaters/1">GoTop100</Link>
                    </Menu.Item>
                    <Menu.Item >暂未开放</Menu.Item>
                    <Menu.Item >暂未开放</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{  paddingLeft: '1px'}}>
                    <Content style={{ padding: 24, margin: 0, minHeight: 280}}>
                        <Route path="/movie/:type/:page" component={movieList}></Route>
                    </Content>
                </Layout>
            </Layout>                                   
        )
    }
}
