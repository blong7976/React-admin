import React from 'react'
import {
    Form,
    Input
} from 'antd'
import PropTypes from 'prop-types';
class AddForm extends React.Component {
    
    static propTypes ={
        setForm:PropTypes.func.isRequired,
    }
    UNSAFE_componentWillMount(){
        this.props.setForm(this.props.form)
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="addRole">
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 17 }}>
                    <Form.Item label="角色名称">
                        {getFieldDecorator('roleName', {
                            rules: [{ required: true, message: '角色名称必须输入' }],
                        })(
                            <Input placeholder="请输入角色名称"
                            />,
                        )}
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(AddForm)