import { lazy } from "react"
import { Link } from "react-router-dom"
import { logoUrl } from 'constant/const_url'
import "./Join.css"

const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))

export default function JoinUs ({isSignUp}){
    return (
        <>
            <Header/>
                <div className="Join">
                    <section className="signBox">
                        <img src={logoUrl} alt="profile" />
                        <JoinUsButton className="sign-btn" signin={isSignUp} type={"facebook"}  />
                        <JoinUsButton className="sign-btn" sigin={isSignUp} type={"google"} />
                        <p>Already have an account ? <Link to="/signIn">Sign in</Link> </p>
                    </section>
                </div>
            <Footer/>
        </>
    )
}