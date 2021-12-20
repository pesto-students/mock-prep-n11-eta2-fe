import { CheckOutlined } from '@ant-design/icons';
import CommonButton from 'component/Common/Button/CommonButton';
import "./InterviewBundle.css"

export default function InterviewBundle ({title,description,details}){
    return(
        <section className="package">
            <h3 className="heading" style={{textAlign:"center",marginBottom:"4vh"}}>{title}</h3>
            <section className="pack-adv">{details.map((det,index) => (<p key={index}><CheckOutlined id="check" />{det}</p>))}</section>
            <CommonButton buttonType='primary' className="learn-btn" buttonName="Learn More" onClick={() => alert("Test")} isDisabled = "false" size = "large" width = {"100%"} />
        </section>
    )
}