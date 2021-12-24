import {lazy,useState,useEffect} from "react"
import { Link } from "react-router-dom"
import { logoUrl } from "Constant/const_url"
import { useSelector } from "react-redux"
import { useCookies } from "react-cookie"
import { useDispatch } from "react-redux"
import './Header.css'
import { setUser } from "@sentry/react"


const Button = lazy(() => import("component/Common/Button/CommonButton"))

export default function Header() {
   
   
    let auth = useSelector(state => state.authReducer)
    let [user,setUser] = useState([])

    useEffect(() => {
        if (auth.isLoggedIn) { 
            setUser(auth.user)
        }
    }, [user,auth])

    return(
        <header id="main-header">
            <div id="headerLogo">
                <Link to="/"> <img src={logoUrl} alt="logo" id="brand-logo"></img></Link>                  
            </div>
            <div id="headerItems">            
                <Link className="header-icons" to="/about"> About </Link>
                <Link className="header-icons" to="/package"> Package </Link> 
                <Link className="header-icons" to="/contact"> Contact Us </Link> 
                {!user.isLoggedIn ?
                    <Link className="header-icons" to="/signIn">Sign In</Link>:
                    <Link to={`${user.role}/dashboard`}> <Button buttonType='primary' buttonName={"Dashboard"} isDisabled="false" /></Link>
                }

            </div>   
        </header>
    )
}