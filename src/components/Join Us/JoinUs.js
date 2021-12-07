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
            
                <section class="signBox">
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

//  <h1> Logo </h1>
{/* <JoinUsButton signin={isSignUp} type={"facebook"}  />
<JoinUsButton sigin={isSignUp} type={"google"} />
<p style={{marginTop: "50px", fontSize:"18px", color :"#4B4A4A"  }}>{isSignUp?`Already a member? Sign In`: `New to Mock Prep ? Sign Up`}</p> */}
