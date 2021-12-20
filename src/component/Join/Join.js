import { lazy } from "react"
import { Link } from "react-router-dom"
import { logoUrl } from 'constant/const_url'
import "./Join.css"
import GoogleLogin from "react-google-login"
import { useDispatch } from "react-redux"
import authActionCreator from "Redux/Action Creators/authActionCreators"
import { GoogleOutlined } from "@ant-design/icons"

const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))

export default function JoinUs ({isSignUp}){
    const dispatch = useDispatch()
    const handleLogin = async googleData => {
        const res = await fetch("http://localhost:8080/user", {
            method: "POST",
            body: JSON.stringify({
            token: googleData.tokenId
        }),
        headers: {
            "Content-Type": "application/json"
        }
        })
        const data = await res.json();
        authActionCreator.setRole(dispatch,true);
        console.log("Function Completed")
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