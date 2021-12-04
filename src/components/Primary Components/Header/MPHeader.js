import Title from 'antd/lib/skeleton/Title'
import MPButton from '../Button/MP_Button'
import './MPHeader.css'

export default function MPHeader ({isLoggedIn}){
    return(
        <header className="header">
            <div className="headerLogo">
                Logo
            </div>
            <div className="headerItems">
                <div className="headerItem"> About </div>
                <div className="headerItem"> Packages </div>
                <div className="headerItem"> Join Us </div>
                <div className="headerItem"> Contact Us </div>
                <MPButton buttonType='primary' buttonName={isLoggedIn?"Logout":"Sigin / Signup"} onClick={() => alert("Test")} isDisabled = "false" size = "middle" width = {"25%"} />
            </div>
        </header>
    )
}