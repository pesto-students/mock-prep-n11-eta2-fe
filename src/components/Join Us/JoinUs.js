import JoinUsButton from '../Primary Components/Join Us/Join Us Button'
import './JoinUs.css'

export default function JoinUs ({isSignUp}){
    return(
        <div className="OuterContainer">
            <div className="JoinUsContainer">
                <h1> Logo </h1>
                <JoinUsButton signin={isSignUp} type={"facebook"}  />
                <JoinUsButton sigin={isSignUp} type={"google"} />
                <p style={{marginTop: "50px", fontSize:"18px", color :"#4B4A4A"  }}>{isSignUp?`Already a member? Sign In`: `New to Mock Prep ? Sign Up`}</p>
            </div>
        </div>
    )
} 