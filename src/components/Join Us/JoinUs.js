import JoinUsButton from '../Primary Components/Join Us/Join Us Button'
import "./Join.css"
import MPHeader from '../Primary Components/Header/Header'
import Footer from '../Primary Components/Footer/Footer'
import { logoUrl } from '../../constant/data'
import { Link} from "react-router-dom"

export default function JoinUs ({isSignUp}){
    return (
        <>
             <MPHeader/>
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
