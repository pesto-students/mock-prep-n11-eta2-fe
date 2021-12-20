import { lazy, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { logoUrl } from 'Constant/const_url'
import "./Join.css"
import GoogleLogin from "react-google-login"
import authActionCreator from "Redux/Action Creators/authActionCreators"
import { useDispatch, useSelector } from "react-redux"

const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))

export default function JoinUs ({isSignUp}){
    const [user,setUser] = useState({});
    const loginState = useSelector(state => state.authReducer);
    console.log(loginState)
  
    const dispatch = useDispatch();
    const handleLogin = async googleData => {
        const res = await fetch("/auth", {
            method: "POST",
            body: JSON.stringify({
            token: googleData.tokenId
        }),
        headers: {
            "Content-Type": "application/json"
        }
        })
        const data = await res.json()
        setUser(data);
        // store returned user somehow
    }

    useEffect(() => {
        if(user.status === 'success'){
            authActionCreator.setRole(dispatch,"true")
        }
    }, [dispatch,user.status])


    return (
        <>
            <Header/>
                <div className="Join">
                    <section className="signBox">
                        <img src={logoUrl} alt="profile" />
                        {/* <JoinUsButton className="sign-btn" signin={isSignUp} type={"facebook"}  />
                        <JoinUsButton className="sign-btn" sigin={isSignUp} type={"google"} /> */}
                      
                        <GoogleLogin 
                        
                            clientId = {"213326872377-nnd677fts32vl9asl3e3c8hb3iltt393.apps.googleusercontent.com"}
                            buttonText = "Login with Google"
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