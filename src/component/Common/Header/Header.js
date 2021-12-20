import {lazy} from "react"
import { Link } from "react-router-dom"
import { logoUrl } from "Constant/const_url"
import './Header.css'

const Button = lazy(() => import("component/Common/Button/CommonButton"))

export default function Header({ isLoggedIn }) {
    
    return(
        <header id="main-header">
            <div id="headerLogo">
                <Link to="/"> <img src={logoUrl} alt="logo" id="brand-logo"></img></Link>                  
            </div>
            <div id="headerItems">            
                <Link className="header-icons" to="/about"> About </Link>
                <Link className="header-icons" to="/package"> Package </Link> 
                <Link className="header-icons" to="/contact"> Contact Us </Link> 
                <Link className="header-icons" to="/join"><Button buttonType='primary' buttonName={isLoggedIn ? "Logout" : "Sign In"} isDisabled="false" /></Link>
            </div>   
        </header>
    )
}