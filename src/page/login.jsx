import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
const FormItem = Form.Item;

export default class Login extends Component {
    // 登录
	handleSubmit = (e) => {
		e.preventDefault();
        message.success('登录成功')
        this.props.history.replace({pathname:'/'})
	}
    render() {
        return (
			<Form onSubmit={this.handleSubmit} className='loginForm animated fadeInRight'>
				<FormItem>
                <Input
                    placeholder="账号"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
				</FormItem>
				<FormItem>
                    <Input.Password 
                    prefix={<Icon type="shopping" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    autoComplete='new-password' onPressEnter={this.handleSubmit}  placeholder="密码" />
				</FormItem>
				<FormItem >
					<Button type='primary' block  htmlType="submit" className='loginFormButton'>登录</Button>
				</FormItem>
			</Form>
        )
    }
}