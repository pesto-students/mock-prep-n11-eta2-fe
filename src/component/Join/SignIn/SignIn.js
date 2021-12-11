import React, { lazy } from 'react'
import { Link } from "react-router-dom"
import { logoUrl } from 'constant/const_url'
import { Button, Tabs } from "antd"
import "./SignIn.css"

const { TabPane } = Tabs;
const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))


export default function SignIn() {
    
    return (
        <>
            <Header />
            
            <div className="SignIn">
                <section class="signInBox">
                    <img src={logoUrl} alt="profile" />
                    <Tabs defaultActiveKey="1">
                            <TabPane tab={<span>Login</span>} key="1">
                                <section>
                                        <JoinUsButton className="sign-btn" signin={true} type={"facebook"}  />
                                        <JoinUsButton className="sign-btn" signin={true} type={"google"} />
                                        <p>New to MockPrep ? <Link to="/join">Sign up</Link> </p>
                                </section>
                            </TabPane>
                            <TabPane tab={<span>Dummy Login</span>} key="2">
                               
                                <section className="dummyButtons">
                                        <Link to="/admin/dashboard/"><Button  className="dummybtn">Sign In as Student</Button></Link>
                                        <Link to="/admin/dashboard/"><Button  className="dummybtn">Sign In as Interviewer</Button></Link>
                                        <Link to="/admin/dashboard/"><Button  className="dummybtn">Sign In as Admin</Button></Link>
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