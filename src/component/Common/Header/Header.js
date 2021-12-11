import {lazy,useState} from "react"
import { Link } from "react-router-dom"
import { logoUrl } from "constant/const_url"
import './Header.css'

const Button = lazy(() => import("component/Common/Button/CommonButton"))

export default function Header({ isLoggedIn }) {
    
    let [toggle, setToggle] = useState(true)

    const handleResize = () => { 
 
        if (window.innerWidth <= 425) {
            setToggle(false)
        }

        else if (window.innerWidth > 425) { 
            setToggle(true)
        }
    }
    
     // Add event listener
     window.addEventListener("resize", handleResize);

    return(
        <header id="main-header">
            <div id="headerLogo">
                <Link to="/" onClick={() => {window.location.reload();}}> <img src={logoUrl} alt="logo" id="brand-logo"></img></Link>
                <Link to="#" id="toggle-btn" onClick={() => {if (toggle) { setToggle(false) }else {setToggle(true) }}}><i className="fas fa-bars fa-2x"></i></Link>
            </div>
               {toggle ?
                 <div id="headerItems">
                    
                 <Link className="header-icons" to="/about"> About </Link>
                 <Link className="header-icons" to="/package"> Package </Link> 
                 <Link className="header-icons" to="/join"> Join Us </Link> 
                 <Link className="header-icons" to="/contact"> Contact Us </Link> 
                 <Link className="header-icons" to="/join">
                     <Button buttonType='primary' buttonName={isLoggedIn ? "Logout" : "Sign In"} isDisabled="false" size="middle" width={"100%"} />
                 </Link>
                </div> :
                <></>
            }
           
        </header>
    )
}