import JoinUsButton from '../Primary Components/Join Us/Join Us Button'
import './JoinUs.css'

export default function JoinUs ({isSignUp}){
    return(
        <div className="JoinUsContainer">
            <JoinUsButton signin={false} type={"facebook"} />
        </div>
    )
} 