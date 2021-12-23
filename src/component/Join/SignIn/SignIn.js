import React, { lazy } from 'react'
import { Link } from "react-router-dom"
import { logoUrl } from 'Constant/const_url'
import { getData } from 'api/Api'
import { getUsers} from "Constant/apiUrl"
import { utilityFunction } from 'component/Utility/utility'
import { useDispatch, useSelector } from 'react-redux'
import {  useCookies } from 'react-cookie'
import { Button, Tabs } from "antd"
import GoogleLogin from "react-google-login"

import "./SignIn.css"

const { TabPane } = Tabs;
const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))

export default function SignIn() {
    const dispatch = useDispatch();
    const [ setCookie] = useCookies(["user"])
    const reduxLogin  = useSelector(state => state.authReducer)
    
    console.log(reduxLogin)
 
  
    const handleLogin = async (googleData) => {
       
        let data = {"name": googleData.profileObj.name,"email": googleData.profileObj.email, }
       
        const response = await getData(getUsers)
        if (response.data.length>0) { 
           
            response.data.forEach(res => { 
                if (res.email === data.email) {
                    
                    utilityFunction.logIn(dispatch, res, res.role)
                    setCookie("user", res)
                }
            })
           
        }  
        else {
            utilityFunction.setError(dispatch, "Login Failed")
        }     
    
    }
    
    const dummyLogin = (role) => { 
        const user = {
            "name" :"saif",
            "role" : "admin"
        };
      
        utilityFunction.logIn(dispatch, user, user.role, setCookie);
        window.location.href = role;
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
                                        <Button  className="dummybtn">Sign In as Student</Button>
                                        <Button className="dummybtn">Sign In as Interviewer</Button>
                                        <Button onClick={dummyLogin("admin")}  className="dummybtn">Sign In as Admin</Button>
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