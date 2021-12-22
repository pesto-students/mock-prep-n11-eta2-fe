import "./InterviewerCard.css"
import { Tag} from "antd"

export default function InterviewerCardList({ id, image, name, designation, company,skills,delIcon,btn1,btn2,degree }) {
    return (
        <section className="person" key={id}>
                <section id="hoverCard">
                        {delIcon}
                        <span id="">
                            {btn1}
                            {btn2}
                        </span>
                </section>
               
                <img alt="int-profile" src={image} id="profile" />
                <p className="int-details">{name}</p>
           
                { degree?  <p className="int-details">{degree},</p>: <p className="int-details">{designation},</p>}
                <p className="int-details">{company}</p>
                
                {skills.map((skill, index) => (
                    <Tag key={index} style={{margin:"4px 5px"}} color="success">{skill}</Tag>
                ))}
        </section>
    )
}


