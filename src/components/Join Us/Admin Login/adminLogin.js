import './adminLogin.css'
import { Button, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,LoginOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux'
import authActionCreators from '../../../Redux/Action Creators/authActionCreators';
import { Alert } from 'antd';
import { Redirect } from 'react-router-dom';

export default function AdminLogin (){

    const [userName, setUsername ] = useState("")
    const [password, setPassword] = useState("")  
    
    const dispatch = useDispatch()
    const reduxError = useSelector(state => state.errorReducer)
    console.log(reduxError)
    const reduxLogin  = useSelector(state => state.authReducer)
    console.log(reduxLogin)
    
    return(
        <div className="adminLogin">
            <div className="login-box">
                <h2> Admin Login</h2>
                <Space direction = "vertical">
                    {reduxError.length > 0 && <Alert
                        message={reduxError}
                        type="error"
                    />}
                     {reduxLogin.login?.length > 0 &&  <Redirect to="/admin/dashboard" /> }

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