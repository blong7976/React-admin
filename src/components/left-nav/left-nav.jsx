import React, { Component } from 'react';
import { Link ,withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import logo from '../../assets/image/logo.png'
import './index.css'
import menulist from '../../config/menuConfig'
const { SubMenu } = Menu;

class LeftNav extends Component {

    // 1: map
    getMenuNodes_map = (menulist) =>{
        return menulist.map(item =>{
            if(!item.children){
                return (
                <Menu.Item key={item.key}>
                    <Link to={item.key}>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
                )
            }else{
                return (
                    <SubMenu
                    key={item.key}
                    title={
                    <span>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                    </span>
                    }>
                       {this.getMenuNodes_map(item.children)} 
                    </SubMenu>
                )
            }
        })
    }
    // 2: reduce
    getMenuNodes = (menulist) =>{
        return menulist.reduce((pre,item) =>{
            if(!item.children){
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            }else{
                const path = this.props.location.pathname
                const cItem = item.children.find(cItem => cItem.key ===path )
                if(cItem){
                    this.openKey = item.key
                }
                pre.push((
                    <SubMenu
                    key={item.key}
                    title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    }>
                       {this.getMenuNodes(item.children)} 
                    </SubMenu> 
                ))
            }
            return pre
        },[])
    }
    
    UNSAFE_componentWillMount  () {
       this.menuNodes = this.getMenuNodes(menulist)
    }

    render() {
        const path = this.props.location.pathname
        const openKey = this.openKey
        return (
            <div>
                <Link className="Vm-left-nav" to='/home'>
                    <header className="left-nav-header">
                        <img src={logo} alt="logo"/>
                        <h1>React Admin</h1>
                    </header>
                </Link>

                <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={[path]}
                selectedKeys={[path]}
                defaultOpenKeys={[openKey]}
                >
                { 
                    this.menuNodes 
                }    
                </Menu>
            </div>
           
        )
    }
}

export default withRouter(LeftNav)