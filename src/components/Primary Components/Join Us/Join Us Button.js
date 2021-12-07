import { GoogleOutlined,FacebookFilled } from '@ant-design/icons';
import { links } from '../../../constant/links';
import './Join Us Button.css'

const details = {
    google : <GoogleOutlined className='icon' style={{ fontSize: '40px', color: '#EA4335' }} />,
    facebook : <FacebookFilled className='icon' style={{ fontSize: '40px', color: '#3B5998' }} />
}

export default function JoinUsButton ({signin,type}) {

    function getUserDetails(){
      alert("Login Clicked")
    }

    return (
        <div className="JoinUsButton" onClick ={() => getUserDetails()}>
            <div className="JoinUsLogo">
                {details[type]}
            </div>
            <div className="JoinUsText">
                {signin?`Sign In with ${type}` : `Sign Up with ${type}`}
            </div>
        </div>
    )
}