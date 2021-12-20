import { lazy ,useState} from "react"
import { Link } from "react-router-dom"
import { logoUrl } from 'Constant/const_url'
import { Button, Tabs } from "antd"
import GoogleLogin from "react-google-login"
import { useDispatch } from "react-redux"
import authActionCreator from "Redux/Action Creators/authActionCreators"
import { insertUser,insertInterviewer,insertStudent } from "Constant/apiUrl"
import { insertData } from "api/Api"
import "./Join.css"

const { TabPane } = Tabs;
const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
const JoinUsButton = lazy(() => import("component/Common/Button/JoinUsButton/JoinUsButton"))

export default function JoinUs({ isSignUp }) {
    
    let [role,setRole] = useState("admin")
       
    const dispatch = useDispatch()
    
    const handleLoginInt = async googleData => {

        setRole("Interviewer")
        const data = {
            "name": googleData.profileObj.name,
            "email": googleData.profileObj.email,
            "role": role,
            "googleObj":googleData
        }
        let res = await insertData(insertUser, data)

        if (res.status === 200) {
            let interviewer = { "name": res.data.name, "email": res.data.email, "userId": res.data._id, }
            let rs = await insertData(insertInterviewer, interviewer)
            console.log(rs)
        }
        else { 
            alert("Registration failed")
        }
       
     
        

        authActionCreator.setRole(dispatch,true);
    }

    const handleLoginStu = async googleData => {

        setRole("Student")
        const data = {
            "name": googleData.profileObj.name,
            "email": googleData.profileObj.email,
            "role": role,
            "googleObj":googleData
        }
        let res = await insertData(insertUser, data)

        if (res.status === 200) { 
            let student = {"name": res.data.name,"email": res.data.email,"userId": res.data._id, }
            let rs = await insertData(insertStudent, student)
    
        }
        else { 
            alert("Registration failed")
        }
       
      
        authActionCreator.setRole(dispatch,true);
        console.log("Function Completed")
    }

    return (
        <>
            <Header/>
                <div className="Join">
                    <section className="signBox">
                    <img src={logoUrl} alt="profile" />
                    
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span>Join as Interviewer</span>} key="1">
                            <p>Continue to join as Interviewer</p>
                           
                            <GoogleLogin
                                clientId={"213326872377-nnd677fts32vl9asl3e3c8hb3iltt393.apps.googleusercontent.com"}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} className="google-login-button" disabled={renderProps.disabled}><JoinUsButton className="sign-btn" sigin={isSignUp} type={"google"} /></button>
                                )}
                                
                                        onSuccess={handleLoginInt}
                                      
                                        onFailure = {() => console.log("Login Failure")}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                    <p>Already have an account ? <Link to="/signIn">Sign in</Link> </p>
                            </TabPane>
                            <TabPane tab={<span>Join as Student</span>} key="2">
                            <p>Continue to join as Student</p>
                           
                            <GoogleLogin 
                                    clientId = {"213326872377-nnd677fts32vl9asl3e3c8hb3iltt393.apps.googleusercontent.com"}
                                    render={renderProps => (
                                        <button onClick={renderProps.onClick} className ="google-login-button" disabled={renderProps.disabled}><JoinUsButton className="sign-btn" sigin={isSignUp} type={"google"} /></button>
                                )}
                                   
                                    onSuccess = {handleLoginStu}
                                    onFailure = {() => console.log("Login Failure")}
                                    cookiePolicy={'single_host_origin'}
                                />
                                <p>Already have an account ? <Link to="/signIn">Sign in</Link> </p>
                            </TabPane>
                    </Tabs>
                    </section>
                </div>
            <Footer/>
        </>
    )
}