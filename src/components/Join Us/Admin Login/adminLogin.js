import './adminLogin.css'
import { Button, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,LoginOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {useDispatch } from 'react-redux'
import authActionCreators from '../../../Redux/Action Creators/authActionCreators';

export default function AdminLogin (){

    const [userName, setUsername ] = useState("")
    const [password, setPassword] = useState("")    
    const dispatch = useDispatch()

    return(
        <div className="adminLogin">
            <div className="login-box">
                <h2> Admin Login</h2>
                <Space direction = "vertical">
                    <Input placeholder="Enter Username" 
                        size="large" 
                        onChange = {(e) => setUsername(e.target.value)}
                        value = {userName}
                        />
                    <Input.Password 
                        placeholder='Enter Password' 
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        size="large"
                        onChange = {(e) => setPassword(e.target.value)}
                        value = {password}
                        />
                    <Button type="primary" shape="round" icon={<LoginOutlined />} size={"large"} onClick={() => authActionCreators.loginAdmin(dispatch,{userName,password})} >Login</Button>
                </Space>
            </div>
        </div>
    )
}