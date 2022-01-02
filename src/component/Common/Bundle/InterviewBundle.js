import { CheckOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

import "./InterviewBundle.css"

export default function InterviewBundle ({title,details}){
    return(
        <section className="package">
            <h3 className="heading" style={{textAlign:"center",marginBottom:"4vh"}}>{title}</h3>
            <section className="pack-adv">{details.map((det,index) => (<p key={index}><CheckOutlined id="check" />{det}</p>))}</section>
            <Link to="/pricing"><button type="button" className="btn btn-outline-success">Learn More.</button> </Link>
        </section>
    )
}