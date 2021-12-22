import React, { lazy } from 'react'
import { Link } from "react-router-dom"
import { logoUrl } from 'Constant/const_url'
import GoogleLogin from "react-google-login"
import { Button, Tabs } from "antd"
import "./SignIn.css"
import { insertData } from 'api/Api'
import { loginUser } from 'Constant/apiUrl'
import { utilityFunction } from 'component/Utility/utility'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'

const { TabPane } = Tabs;
const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))





export default function SignIn() {
    const dispatch = useDispatch();
    const [cookies, setCookie,removeCookie] = useCookies()

    const handleLogin = async (googleData) => {
        console.log(googleData);
        const data = {
            name: googleData.profileObj.name,
            email: googleData.profileObj.email,
            googleObj:googleData
        }
    
        const response = await insertData(loginUser,{email :data.email})
        if (response.status === "success") { 

            const {res} = response;
            const [user] = res.data
            utilityFunction.logIn(dispatch,user,user.role,setCookie)
        }  
        else {
            utilityFunction.setError(dispatch, "Sign Up Failed")
        }     
    
    }
    
    return (
        <>
            <Header />
            
            <div className="SignIn">
                <section className="signInBox">
                    <img src={logoUrl} alt="profile" />
                    <Tabs defaultActiveKey="1">
                            <TabPane tab={<span>Login</span>} key="1">
                                <section id="signBtn">
                                        {/* <JoinUsButton className="sign-btn" signin={true} type={"facebook"}  /> */}
                                        <GoogleLogin
                                            clientId={"213326872377-nnd677fts32vl9asl3e3c8hb3iltt393.apps.googleusercontent.com"}
                                            render={renderProps => (
                                                <button onClick={renderProps.onClick} className="google-login-button" disabled={renderProps.disabled}><JoinUsButton className="sign-btn" sigin={false} type={"google"} /></button>
                                            )}
                                        
                                            onSuccess={(googleData) => handleLogin(googleData)}
                                            
                                            onFailure = {() => console.log("Login Failure")}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                        <p>New to MockPrep ? <Link to="/join">Sign up</Link> </p>
                                </section>
                            </TabPane>
                            <TabPane tab={<span>Dummy Login</span>} key="2">                            
                                <section className="dummyButtons">
                                        <Link to="/admin/dashboard"><Button  className="dummybtn">Sign In as Student</Button></Link>
                                        <Link to="/admin/dashboard"><Button  className="dummybtn">Sign In as Interviewer</Button></Link>
                                        <Link to="/admin/dashboard"><Button  className="dummybtn">Sign In as Admin</Button></Link>
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