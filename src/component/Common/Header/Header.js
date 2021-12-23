import {lazy} from "react"
import { Link } from "react-router-dom"
import { logoUrl } from "Constant/const_url"
import { useSelector } from "react-redux"
import { useCookies } from "react-cookie"
import { useDispatch } from "react-redux"
import './Header.css'

import authActionCreator from "Redux/Action Creators/authActionCreators";

const Button = lazy(() => import("component/Common/Button/CommonButton"))

export default function Header() {
    
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)

    const [ removeCookie] = useCookies(["user"])
     const dispatch = useDispatch()
   
    const logout = () => { 
        if (isLoggedIn) { 
            
            authActionCreator.logOut(dispatch);
            removeCookie('user');
        }
    }

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
                    <Button onClick={() => logout()} buttonType='primary' buttonName={"Logout"} isDisabled="false" />
                }
                
               
                
            </div>   
        </header>
    )
}