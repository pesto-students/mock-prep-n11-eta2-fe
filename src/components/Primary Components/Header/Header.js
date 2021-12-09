import MPButton from '../Button/MP_Button'
import { logoUrl } from '../../../constant/data'
import './Header.css'
import { Link} from "react-router-dom"

export default function Header ({isLoggedIn}){
    return(
        <header className="main-header">
            <div className="headerLogo">
                <Link to="/"> <img src={logoUrl} alt="logo" className="brand-logo"></img></Link>
            </div>
            <div className="headerItems">
                    <Link to="/about"> About </Link>
                    <Link to="/package"> Package </Link> 
                    <Link to="/join"> Join Us </Link> 
                    <Link to="/contact"> Contact Us </Link> 
                    <Link to="/join"><MPButton buttonType='primary' buttonName={isLoggedIn ? "Logout" : "Sign In"} isDisabled="false" size="middle" width={"100%"} /></Link>
            </div>
        </header>
    )
}