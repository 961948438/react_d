import React,{ Component } from 'react';
import './App.css';
import {HashRouter as Router,  Route, Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import home from './components/home.jsx'
import movie from './components/movie.jsx'
import about from './components/about.jsx'
const { Header, Content, Footer } = Layout;

  class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  componentWillMount(){
    console.log(window.location.hash.slice(1))
  }
  render() {
    return (
      <Router className="App">
        <Layout className="layout-t">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={window.location.hash.slice(1)} >
              <Menu.Item key="/home" className="menu-li">
                <Link to="/home">首页</Link>
              </Menu.Item>
              <Menu.Item key="/movie" className="menu-li">
                <Link to="/movie/hot_theaters/1">电影</Link>
              </Menu.Item>
              <Menu.Item key="/about" className="menu-li">
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              <Route path="/home" component={home}></Route>
              <Route path="/movie" component={movie}></Route>
              <Route path="/about" component={about}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>@麻溜的没得放东西</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App
