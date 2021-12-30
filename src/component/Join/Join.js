import { lazy,useEffect,useState } from "react"
import {  Link } from "react-router-dom"
import { logoUrl } from 'constant/const_url'
import { Tabs } from "antd"
import { insertUser,insertInterviewer,insertStudent } from "constant/apiUrl"
import { insertData } from "api/Api"
import { useCookies } from "react-cookie"
import GoogleLogin from "react-google-login"
import { googleIcon } from "constant/antIcons"
import alertActionCreator from "Redux/Action Creators/alertActionCreator"
import authActionCreator from "Redux/Action Creators/authActionCreators"
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import "./Join.css"

const { TabPane } = Tabs;
const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))

export default function JoinUs({ isSignUp }) {
    
    const [loggedIn,setLoggedIn] = useState(false)
    const [cookies, setCookie,removeCookie] = useCookies(['name']);
    const dispatch = useDispatch()
  
    const auth = useSelector(state => state.authReducer)

    useEffect(() => {
        if (auth.user && auth.user.isLoggedIn) { 
            setLoggedIn(true)
        }
    }, [auth])

    const handleLogin = async (googleData, role) => {
        
        if (cookies.user) { 
            removeCookie('user')
        }
       
        const data = {
            "name": googleData.profileObj.name,
            "email": googleData.profileObj.email,
            "role": role,
            "googleObj":googleData
        }

        let res = await insertData(insertUser, data)
       
        if (res.status === "success") { 
            let data = {"name": res.res.data.name,"email": res.res.data.email,"userId": res.res.data._id,"image": res.res.data.googleObj.profileObj.imageUrl}
            insertData(role === 'student' ? insertStudent : insertInterviewer, data)

            data.isLoggedIn = true;
            data.role = role;
            
            removeCookie('user')
            setCookie('user', data)

            authActionCreator.logIn(dispatch, data)
            alertActionCreator.setMessage(dispatch, "Sign up succesfull")
           
        }  
        else {
            alertActionCreator.setError(dispatch, "Sign up failed")  
            
        }     
       
    }

    return (
        <>
            <Header />
            {loggedIn && auth.user ? <Redirect to={`${auth.user.role}/dashboard`} />: <Redirect to="/signIn" /> }
                <div className="Join">
                    <section id="signUpBox">
                        <section id="welcome">
                            <h3>Welcome to Mockprep</h3>
                            <p>Create an account to join with us as interviewer or student</p>
                        </section>
                        <section id="signUpForm">
                            <img src={logoUrl} id="signLogo" alt="profile" />
                            <section id="signForm">
                            <h4>Sign Up</h4>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab={<span>Sign Up as Interviewer</span>} key="1">
                                    <p style={{color:"green"}}>Continue to join as Interviewer</p>
                                    <TabDetailsPane role="interviewer" isSignUp={isSignUp} handleSuccess={handleLogin} />
                                </TabPane>
                                <TabPane tab={<span>Sign Up as Student</span>} key="2">
                                    <p style={{color:"purple"}}>Continue to join as Student</p>
                                    <TabDetailsPane role="student" isSignUp={isSignUp} handleSuccess={handleLogin} />
                                </TabPane>
                            </Tabs>
                            <p id="signInLink">Already have an account ? <Link to="/signIn">Sign In</Link></p>
                            </section>                    
                        </section>
                    </section>
                </div>
            <Footer/>
        </>
    )
}

function TabDetailsPane({role,handleSuccess}){
    return (
            <>

                <GoogleLogin
                    clientId={"213326872377-nnd677fts32vl9asl3e3c8hb3iltt393.apps.googleusercontent.com"}
                render={renderProps => (<button onClick={renderProps.onClick} className="google-login-button" disabled={renderProps.disabled}>{googleIcon}Sign Up with Google</button>)}
                    onSuccess={(googleData) => handleSuccess(googleData,role)}        
                    onFailure = {() => console.log("Login Failure")}
                    cookiePolicy={'single_host_origin'}
                />
            </>
    )
}


