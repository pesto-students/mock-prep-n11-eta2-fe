import { lazy } from "react"
import { Link } from "react-router-dom"
import { logoUrl } from 'Constant/const_url'
import GoogleLogin from "react-google-login"
import { useDispatch } from "react-redux"
import { getData, insertData } from "api/Api"
import { insertUser,insertTopic, getInterviewers} from "Constant/apiUrl"


import authActionCreator from "Redux/Action Creators/authActionCreators"
import "./Join.css"

const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))

export default function JoinUs ({isSignUp}){
    const dispatch = useDispatch()
    
    const handleLogin = googleData => {

        const interviewer = getData(getInterviewers);
        console.log(interviewer)

        insertData(insertTopic, googleData)
        insertData(insertUser, {name:"saif",email:"saj"})
    }

    return (
        <>
            <Header/>
                <div className="Join">
                    <section className="signBox">
                        <img src={logoUrl} alt="profile" />
                        <GoogleLogin 
                            clientId = {"213326872377-nnd677fts32vl9asl3e3c8hb3iltt393.apps.googleusercontent.com"}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className ="google-login-button" disabled={renderProps.disabled}><JoinUsButton className="sign-btn" sigin={isSignUp} type={"google"} /></button>
                              )}
                            onSuccess = {handleLogin}
                            onFailure = {() => console.log("Login Failure")}
                            cookiePolicy={'single_host_origin'}
                        />
                        <p>Already have an account ? <Link to="/signIn">Sign in</Link> </p>
                      
                    </section>
                </div>
            <Footer/>
        </>
    )
}