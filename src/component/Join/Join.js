import { lazy ,useEffect,useState} from "react"
import { Link } from "react-router-dom"
import { logoUrl } from 'Constant/const_url'
import { Tabs } from "antd"
import GoogleLogin from "react-google-login"
import { useDispatch } from "react-redux"
import authActionCreator from "Redux/Action Creators/authActionCreators"
import { insertUser,insertInterviewer,insertStudent } from "Constant/apiUrl"
import { insertData } from "api/Api"
import { useCookies } from 'react-cookie';
import "./Join.css"
import { utilityFunction } from "component/Utility/utility"
import { useSelector } from "react-redux"
import {  notification } from 'antd';
import { errorSign } from 'Constant/antIcons'

const { TabPane } = Tabs;
const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))

export default function JoinUs({ isSignUp }) {
    
    const [cookies, setCookie,removeCookie] = useCookies()
    const dispatch = useDispatch()
    console.log(cookies)

    const error = useSelector(state => state.errorReducer)

    useEffect (() => {
        notification.open({
            message: error.error,
            icon: errorSign,
          });
       
    },[error])
    

    const handleLogin = async (googleData,role) => {
        console.log(googleData,role);
        const data = {
            "name": googleData.profileObj.name,
            "email": googleData.profileObj.email,
            "role": role,
            "googleObj":googleData
        }

            let res = await insertData(insertUser, data)
        if (res.status === "success") { 
            let student = {"name": res.data.name,"email": res.data.email,"userId": res.data._id, }
            insertData( role === 'Student'? insertStudent:insertInterviewer, student)
            utilityFunction.logIn(dispatch,student,role,setCookie)
        }  
        else {
            utilityFunction.setError(dispatch, "Sign Up Failed")
        }     
        utilityFunction.logIn(dispatch,data,role,setCookie) 
        console.log("Function Completed")
    }

    return (
        <>
            <Header/>
                <div className="Join">
                    <section className="signBox">
                    <img src={logoUrl} alt="profile" />
                    <button onClick = {() => utilityFunction.logIn(dispatch,{},"student",setCookie)} >Login</button>
                    <button onClick = {() => utilityFunction.logOut(dispatch,removeCookie,cookies)} >Logout</button>
                    <Tabs defaultActiveKey="1">
                           <TabPane tab={<span>Join as Interviewer</span>} key="1">
                                <TabDetailsPane role="Interviewer" isSignUp={isSignUp} handleSuccess={handleLogin} />
                           </TabPane>
                            <TabPane tab={<span>Join as Student</span>} key="2">
                                <TabDetailsPane role="Student" isSignUp={isSignUp} handleSuccess={handleLogin} />
                            </TabPane>
                    </Tabs>
                    </section>
                </div>
            <Footer/>
        </>
    )
}


function TabDetailsPane({role,isSignUp,handleSuccess}){
    return (
            <>
                <p>Continue to join as {role}</p>
                
                <GoogleLogin
                    clientId={"213326872377-nnd677fts32vl9asl3e3c8hb3iltt393.apps.googleusercontent.com"}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className="google-login-button" disabled={renderProps.disabled}><JoinUsButton className="sign-btn" sigin={isSignUp} type={"google"} /></button>
                    )}
                    
                            onSuccess={(googleData) => handleSuccess(googleData,role)}
                            
                            onFailure = {() => console.log("Login Failure")}
                            cookiePolicy={'single_host_origin'}
                />
                <p>Already have an account ? <Link to="/signIn">Sign in</Link> </p>
            </>
    )
}


