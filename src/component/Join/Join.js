import { lazy, useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { logoUrl } from 'constant/const_url'
import "./Join.css"
import GoogleLogin from "react-google-login"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))

export default function JoinUs ({isSignUp}){
    const [user,setUser] = useState({});
    let history = useHistory();
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
        console.log(user)
        if(user.status === 'success'){
            history.push('/interviewer/dashboard')
        }
    }, [user])

    

    return (
        <>
            <Header/>
                <div className="Join">
                    <section className="signBox">
                        <img src={logoUrl} alt="profile" />
                        <JoinUsButton className="sign-btn" signin={isSignUp} type={"facebook"}  />
                        <JoinUsButton className="sign-btn" sigin={isSignUp} type={"google"} />
                        <p>Already have an account ? <Link to="/signIn">Sign in</Link> </p>
                        <GoogleLogin 
                            clientId = {"213326872377-nnd677fts32vl9asl3e3c8hb3iltt393.apps.googleusercontent.com"}
                            buttonText = "Login with Google"
                            onSuccess = {handleLogin}
                            onFailure = {() => console.log("Login Failure")}
                            cookiePolicy={'single_host_origin'}
                        />
                    </section>
                </div>
            <Footer/>
        </>
    )
}