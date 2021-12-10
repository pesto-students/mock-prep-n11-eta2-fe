import {lazy} from "react"
import { Link } from "react-router-dom"
import { logoUrl } from ''
import './Header.css'

const MPButton = lazy(() => import("../Button/MP_Button"))

export default function Header ({isLoggedIn}){
    return(
        <header id="main-header">
            <div id="headerLogo">
                <a href="/" onClick={() => {window.location.reload();}}> <img src={logoUrl} alt="logo" id="brand-logo"></img></a>
            </div>
            <div id="headerItems">
                    <Link className="header-icons" to="/about"> About </Link>
                    <Link className="header-icons" to="/package"> Package </Link> 
                    <Link className="header-icons" to="/join"> Join Us </Link> 
                    <Link className="header-icons" to="/contact"> Contact Us </Link> 
                    <Link className="header-icons" to="/join"><MPButton buttonType='primary' buttonName={isLoggedIn ? "Logout" : "Sign In"} isDisabled="false" size="middle" width={"100%"} /></Link>
            </div>
        </header>
    )
}