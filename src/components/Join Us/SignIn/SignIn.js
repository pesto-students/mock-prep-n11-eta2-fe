import React, { useState} from 'react'
import MPHeader from '../../Primary Components/Header/Header'
import Footer from '../../Primary Components/Footer/Footer'
import { logoUrl } from '../../../constant/data'
import { Link } from "react-router-dom"
import JoinUsButton from '../../Primary Components/Join Us/Join Us Button'
import { Button} from "antd"
import "./SignIn.css"

export default function SignIn() {
    
    const [dummy, setDummy] = useState(true);

    const normalSign = () => {
        setDummy(false);
    }

    const dummySign = () => {
        setDummy(true);
    }

    return (
        <>
         <MPHeader/>
            <div className="Join">
                <section class="signBox">

                    <img src={logoUrl} alt="profile" />

                    <section className="dummy">
                        <Button className="dummyToggle" onClick={normalSign}>Sign In</Button>
                        <Button className="dummyToggle" onClick={dummySign}>Dummy Sign In</Button>
                    </section>

                    {dummy ?
                    <section className="dummyButtons">
                            <Link to="/admin/dashboard/"><Button  className="dummybtn">Sign In as Student</Button></Link>
                            <Link to="/admin/dashboard/"><Button  className="dummybtn">Sign In as Interviewer</Button></Link>
                            <Link to="/admin/dashboard/"><Button  className="dummybtn">Sign In as Admin</Button></Link>
                            <p>New to MockPrep ? <Link to="/join">Sign up</Link> </p>   
                    </section>
                    :
                    <section>
                        <JoinUsButton className="sign-btn" signin={true} type={"facebook"}  />
                        <JoinUsButton className="sign-btn" signin={true} type={"google"} />
                        <p>New to MockPrep ? <Link to="/join">Sign up</Link> </p>
                    </section>
                    }
                </section>
            
            </div>
            <Footer/>
        </>
    )
}
