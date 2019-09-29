import React,{Component} from "react"
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import LeftNav from '../components/left-nav/left-nav.jsx'
import Header from '../components/header/header.jsx'

import Index from './index/index';
import Product from './product/product';
import Catrproy from './product/cateproy';
import User from './user/user';
import Role from './role/role';

const { Footer, Sider, Content } = Layout;
const route = [
	{ path:'/Index', pages: Index },
    { path:'/Product', pages: Product },
    { path:'/Catrproy', pages: Catrproy },
    { path:'/User', pages: User },
    { path:'/Role', pages: Role }
]

const Main = () => (
	<Switch>
		{route.map((v, i) => {
			return (<Route  key={i} path={v.path} component={v.pages} />)
		})}
		<Redirect to={ '/Index'} />
	</Switch>
)

export default class Home extends Component {
    render() {
        return (
            <Layout style={{height:'100vh'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{margin:20,backgroundColor:'#fff'}}>
                        <Main />
                    </Content>
                    <Footer className="Vm-footer">树欲静而风不止</Footer>
                </Layout>
            </Layout>
        )
    }
}