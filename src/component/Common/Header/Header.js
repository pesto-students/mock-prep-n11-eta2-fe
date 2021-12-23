import {lazy,useState,useEffect} from "react"
import { Link } from "react-router-dom"
import { logoUrl } from "Constant/const_url"
import { useSelector } from "react-redux"
import { useCookies } from "react-cookie"
import { useDispatch } from "react-redux"
import './Header.css'

import authActionCreator from "Redux/Action Creators/authActionCreators";

const Button = lazy(() => import("component/Common/Button/CommonButton"))

export default function Header() {
   
    let isLoggedIn = useSelector(state => state.authReducer.user.isLoggedIn)
    let userRole = useSelector(state => state.authReducer.user.role)


    const [cookies,getCookie, removeCookie] = useCookies(["user"])
    const dispatch = useDispatch()
    let [log, setLog] = useState(false)
    
    useEffect(() => {
        isLoggedIn = isLoggedIn;
        userRole = userRole;
    }, [isLoggedIn,userRole ])
    

    return(
        <header id="main-header">
            <div id="headerLogo">
                <Link to="/"> <img src={logoUrl} alt="logo" id="brand-logo"></img></Link>                  
            </div>
            <div id="headerItems">            
                <Link className="header-icons" to="/about"> About </Link>
                <Link className="header-icons" to="/package"> Package </Link> 
                <Link className="header-icons" to="/contact"> Contact Us </Link> 
                {!isLoggedIn ?
                    <Link className="header-icons" to="/signIn">Sign In</Link>:
                    <Link to={`${userRole}/dashboard`}> <Button buttonType='primary' buttonName={"Dashboard"} isDisabled="false" /></Link>
                }

            </div>   
        </header>
    )
}