import { CheckOutlined } from '@ant-design/icons';
import MPButton from '../Button/MP_Button';
import './Bundle.css'
export default function Bundle ({id,title,description,details}){
    return(
        <section className="package" key={id}>
            <h3 className="heading" style={{textAlign:"center"}}>{title}</h3>
            <p>{description}</p>
            <section className="pack-adv">
            {details.map((det,index) => (
                <p  key={index}><CheckOutlined style={{ fontSize: '12px', color: '#1F4682' }} />  {det}</p>

            ))}
            </section>
            <MPButton buttonType='primary' buttonName="Learn More" onClick={() => alert("Test")} isDisabled = "false" size = "large" width = {"100%"} />
        </section>
    )
}