import {lazy} from "react"
import { Link } from "react-router-dom"
import { logoUrl } from "Constant/const_url"
import './Header.css'
import { useSelector } from "react-redux"

const Button = lazy(() => import("component/Common/Button/CommonButton"))

export default function Header() {
    
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
   
    return(
        <header id="main-header">
            <div id="headerLogo">
                <Link to="/"> <img src={logoUrl} alt="logo" id="brand-logo"></img></Link>                  
            </div>
            <div id="headerItems">            
                <Link className="header-icons" to="/about"> About </Link>
                <Link className="header-icons" to="/package"> Package </Link> 
                <Link className="header-icons" to="/contact"> Contact Us </Link> 
                {!isLoggedIn && <Link className="header-icons" to="/signIn">Sign In</Link>}
                <Link className="header-icons" to="/join"><Button buttonType='primary' buttonName={isLoggedIn ? "Logout" : "Join Us"} isDisabled="false" /></Link>
            </div>   
        </header>
    )
}