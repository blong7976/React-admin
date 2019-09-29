import React, { Component } from 'react';
import { 
    Card,
    Button, 
    Table, 
    Modal,
    message
} from 'antd';
import AddForm from './add-form'

export default class Role extends Component {
    state ={
        roles:[],
        role:{},
        isShowAdd:false
    }
    componentWillMount(){
        this.initRoles()
    }
    
    initRoles= ()=>{
        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                _id:Math.random(),
                key: i.toString(),
                name: `Edrward ${i}`,
                creat_time: Date.now(),
                auth_time: Date.now(),
                auth_name:`admin ${i}`
            });
        }
        this.setState({roles:data})
    }
    onRow= (role)=>{
        return {
            onClick: event => { // 点击行
               this.setState({role})
            }, 
        };      
    }
    addroleShow=()=>{
        this.setState({isShowAdd:true})
    }
    addRole=()=>{
        
        this.form.validateFields((error,value)=>{
            if(!error){
                const { roleName } =value
                this.form.resetFields()
                console.log( this.state)
                let newrole = this.state.roles
                newrole.unshift({
                    _id:Math.random(),
                    key: Math.random(),
                    name: roleName,
                    creat_time: Date.now(),
                    auth_time: Date.now(),
                    auth_name:roleName
                })
                this.setState({
                    roles:newrole,
                    isShowAdd:false
                })
                message.success('添加角色成功')
            }
        })
    }
    handleCancel=()=>{
        this.setState({isShowAdd:false})
    }
    render() {
        const {roles,role,isShowAdd} = this.state
        const title = (
            <span>
                <Button type="primary" onClick={this.addroleShow}>创建角色</Button>&nbsp;&nbsp;
                <Button type="primary" disabled={!role._id}>设置角色权限</Button>
            </span>
        )

          const columns = [
            {
              title: '角色名称',
              dataIndex: 'name',
            },
            {
              title: '创建时间',
              dataIndex: 'creat_time',
            },
            {
              title: '授权时间',
              dataIndex: 'auth_time',
            },
            {
              title: '授权人',
              dataIndex: 'auth_name',
            }
          ];

          

          const rowSelection = {
            type:'radio',
            selectedRowKeys:[role._id],  
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
          };

        return (
            <Card title={title}>
                <Table 
                    rowKey='_id'
                    bordered
                    rowSelection={rowSelection} 
                    columns={columns} 
                    dataSource={roles}
                    onRow={this.onRow}
                    />

                <Modal
                    title="添加角色"
                    visible={isShowAdd}
                    onOk={this.addRole}
                    onCancel={this.handleCancel}
                >
                    <AddForm
                        setForm={(form)=>{ this.form = form}}
                    ></AddForm>
                </Modal>    
            </Card>
        )
    }
}