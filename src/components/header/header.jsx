import React, { Component } from 'react';
import {withRouter } from 'react-router-dom'
import { Modal } from 'antd';
import './index.css'
import { formatedate } from '../../utils/dateUtils'
import menulist from '../../config/menuConfig'
class Header extends Component {
    state = {
        currentTime:formatedate(Date.now())
    }
    loginOut = () =>{
        Modal.confirm({
            content:"确定退出吗？",
            onOk:()=>{
                console.log(this)
                this.props.history.replace('/login')
            },
            onCancel(){
                
            }
        })
    }

    getTitle = () =>{
        const path = this.props.location.pathname
        let title='';
        menulist.forEach(item=>{
            if(item.key===path){
                title = item.title
            }else if(item.children){
               const cItem = item.children.find( cItem => cItem.key===path)
               if(cItem){
                 title = cItem.title
               }
            }
        })
        return title
    }

    getTime = () =>{
        setInterval(()=>{
            const currentTime = formatedate(Date.now())
            this.setState({currentTime})
        },1000)
    }

    componentDidMount(){
        this.getTime()
    }

    render() {
        const {currentTime} =this.state
        const title = this.getTitle()
        return (
            <div className="Vm-header">
                <div className="header-top">
                    <span>欢迎 Admin</span>
                    <span onClick={this.loginOut}>退出登录</span>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)