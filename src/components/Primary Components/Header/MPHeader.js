import Title from 'antd/lib/skeleton/Title'
import MPButton from '../Button/MP_Button'
import { logoUrl } from '../../../constant/data'
import './MPHeader.css'

export default function MPHeader ({isLoggedIn}){
    return(
        <header className="header">
            <div className="headerLogo">
                <img src={logoUrl} alt="logo" className="brand-logo"></img>
            </div>
            <div className="headerItems">
                <div className="headerItem"> About </div>
                <div className="headerItem"> Packages </div>
                <div className="headerItem"> Join Us </div>
                <div className="headerItem"> Contact Us </div>
                <MPButton buttonType='primary' buttonName={isLoggedIn?"Logout":"Sign In"} onClick={() => alert("Test")} isDisabled = "false" size = "middle" width = {"25%"} />
            </div>
        </header>
    )
}