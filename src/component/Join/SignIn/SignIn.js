import React, { lazy } from 'react'
import { Link } from "react-router-dom"
import { logoUrl } from 'constant/const_url'
import { getData } from 'api/Api'
import { getUsers} from "constant/apiUrl"
import { utilityFunction } from 'component/Utility/utility'
import { useDispatch, useSelector } from 'react-redux'
import {  Cookies, useCookies } from 'react-cookie'
import { Button, Tabs } from "antd"
import GoogleLogin from "react-google-login"

import "./SignIn.css"

const { TabPane } = Tabs;
const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))

export default function SignIn() {
    const dispatch = useDispatch();
    const [ cookie,setCookie] = useCookies(["user"])
    const reduxLogin  = useSelector(state => state.authReducer)
    
    const handleLogin = async (googleData) => {
       
        let data = {"name": googleData.profileObj.name,"email": googleData.profileObj.email, }
       
        const response = await getData(getUsers)
        if (response.data.length>0) { 
           
            response.data.forEach(res => { 
                if (res.email === data.email) {
                    
                    utilityFunction.logIn(dispatch, res, res.role)

                    data.id = res._id;
                    data.role = res.role;
                    console.log(res)
                    setCookie("user",data )
                    console.log(cookie)
                    window.location.href = res.role;
                }
            })
           
        }  
        else {
            utilityFunction.setError(dispatch, "Login Failed")
        }     
    
    }
    
    const dummyLogin = (role) => {
        let user;
        if (role === "interviewer") {
            user = {
                "name": "millie taylor",
                "email": "millie.taylor@gmail.com",
                "role": role,
                "id": "61c35291b7809a993100293c",
                "isLoggedIn": true
            };
        }
        else if (role === "student") {
            user = {
                "name": "Silki Hansen",
                "email": "silki.hansen@gmail.com",
                "role": role,
                "id": "61c35cefb7809a9931002a2c",
                "isLoggedIn": true
            };
        }

        else if (role === "admin") {
            user = {
                "name": "Mohammed Saif",
                "email": "saifmohammed888@gmail.com",
                "role": role,
                "id": "61c35cefb7809a9931002a2c",
                "isLoggedIn": true
            };
        }
       
        utilityFunction.logIn(dispatch, user);
        setCookie('user',user)
        window.location.href = role+"/dashboard";
    }

    return (
        <>
        <Header />
            <div className="SignIn">
                <section className="signInBox">
                    <img src={logoUrl} alt="profile" />
                    <Tabs defaultActiveKey="1">
                            <TabPane tab={<span>Login</span>} key="1">
                              
                                    <TabDetailsPane handleLogin={handleLogin} />
                                    <p>New to MockPrep ? <Link to="/join">Sign up</Link> </p>
                             
                            </TabPane>
                            <TabPane tab={<span>Dummy Login</span>} key="2">                            
                                <section className="dummyButtons">
                                        <Button  onClick={()=>dummyLogin("student")}  className="dummybtn">Sign In as Student</Button>
                                        <Button  onClick={()=>dummyLogin("interviewer")}  className="dummybtn">Sign In as Interviewer</Button>
                                        <Button onClick={()=>dummyLogin("admin")}  className="dummybtn">Sign In as Admin</Button>
                                        <p>New to MockPrep ? <Link to="/join">Sign up</Link> </p>   
                                </section>
                            </TabPane>
                    </Tabs>
                </section>          
            </div>
        <Footer/>
        </>
    )
}

function TabDetailsPane({handleLogin}){
    return (
            <>
                 <GoogleLogin
                    clientId={"213326872377-nnd677fts32vl9asl3e3c8hb3iltt393.apps.googleusercontent.com"}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className="google-login-button" disabled={renderProps.disabled}><JoinUsButton signin="true" className="sign-btn"  type={"google"} /></button>
                    )}
                    
                            onSuccess={(googleData) => handleLogin(googleData)}
                            
                            onFailure = {() => console.log("Login Failure")}
                            cookiePolicy={'single_host_origin'}
                />
            </>
    )
}