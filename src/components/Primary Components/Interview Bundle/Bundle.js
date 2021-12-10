import { CheckOutlined } from '@ant-design/icons';
import MPButton from '../Button/MP_Button';
import './Bundle.css'
export default function Bundle ({id,title,description,details}){
    return(
        <section className="package" key={id}>
            <h3 className="heading" style={{textAlign:"center",marginBottom:"4vh"}}>{title}</h3>
            <section className="pack-adv">
                {details.map((det,index) => (
                    <p  key={index}><CheckOutlined />  {det}</p>
                ))}
            </section>
            <MPButton buttonType='primary' className="learn-btn" buttonName="Learn More" onClick={() => alert("Test")} isDisabled = "false" size = "large" width = {"100%"} />
        </section>
    )
}