import { lazy,useState,useEffect } from "react"
import { Link, Redirect } from "react-router-dom"
import { logoUrl } from 'Constant/const_url'
import { Tabs } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { insertUser,insertInterviewer,insertStudent } from "Constant/apiUrl"
import { insertData } from "api/Api"
import { useCookies } from "react-cookie";
import { utilityFunction } from "component/Utility/utility"
import GoogleLogin from "react-google-login"
import "./Join.css"

const { TabPane } = Tabs;
const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))

export default function JoinUs({ isSignUp }) {
    
    const [setCookie] = useCookies(["user"]);
    const dispatch = useDispatch()
    const [userLoggedIn,setUserLoggedIn] = useState(false)

    const auth = useSelector(state => state.authReducer);

    useEffect(() => {
        console.log(auth)
        if ( auth.user !==null &&  auth.user.isLoggedIn) { 
            setUserLoggedIn(true)
        }
    }, [auth])

    const handleLogin = async (googleData,role) => {
       
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
            console.log(data)
            utilityFunction.logIn(dispatch, data, role)
            data.isLoggedIn = true;
            data.role = role;
            setCookie("user", data)
            alert("User Registered Succesfully");
        }  
        else {
            utilityFunction.setError(dispatch, "Sign Up Failed")
        }     
       
    }

    return (
        <>
            <Header />
            {userLoggedIn ? <Redirect to={`${auth.user.role}/dashboard`} /> : <Redirect to="/join" /> }
                <div className="Join">
                    <section className="signBox">
                    <img src={logoUrl} alt="profile" />
                    <Tabs defaultActiveKey="1">
                           <TabPane tab={<span>Join as Interviewer</span>} key="1">
                                <TabDetailsPane role="interviewer" isSignUp={isSignUp} handleSuccess={handleLogin} />
                           </TabPane>
                            <TabPane tab={<span>Join as Student</span>} key="2">
                                <TabDetailsPane role="student" isSignUp={isSignUp} handleSuccess={handleLogin} />
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


