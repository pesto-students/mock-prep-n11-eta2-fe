import { GoogleOutlined,FacebookFilled } from '@ant-design/icons';
import './Join Us Button.css'

const details = {
    google : <GoogleOutlined style={{ fontSize: '40px', color: '#EA4335' }} />,
    facebook : <FacebookFilled style={{ fontSize: '40px', color: '#3B5998' }} />
}

export default function JoinUsButton ({signin,type}) {
    return (
        <div className="JoinUsButton">
            <div className="JoinUsLogo">
                {details[type]}
            </div>
            <div className="JoinUsText">
                {signin?"Sign In" : "Sign Up"}
            </div>
        </div>
    )
}