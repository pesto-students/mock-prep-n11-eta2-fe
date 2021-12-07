import React, { useState} from 'react'
import DashHeader from '../../Common/Header/DashHeader'
import { Person } from "@material-ui/icons"  
import { Button } from 'antd';
import "./InterviewerProfile.css"
import { interviewers } from '../../../../constant/data';
import { Tag } from "antd"
import FormModal from '../../../Primary Components/Modal/Form/FormModal';
import { InterviewerForm } from "../../../Primary Components/Forrm/Interviewer/InterviewerForm"

export const InterviewerProfile = () => {

    const interviewer = interviewers[0];
    const [isModalVisible, setIsModalVisible] = useState(false);

    const interviewerForm = JSON.parse(JSON.stringify(interviewer));
    delete interviewerForm.id
    delete interviewerForm.about;
    delete interviewerForm.contacts;
 

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = (value) => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        interviewer.name = values.name;
    };

    let rating = [];
    
    for (var i = 0; i < interviewer.rating; i++){
        rating.push(<i className="fa fa-star"/>);
    }

    return (
        <div className="interviewer-profile">
             
             <DashHeader title="Interviewer Profile" icon={<Person />}
                rightComponent={
                    <>
                        <section className="search">
                            <Button onClick={showModal} type="primary" className="update">Update Profile</Button>
                        </section></>} />
            
            <div className="int-profile-container">
                <section className="left-profile">
                    <img src={interviewer.pic} alt="profile"/>
                    <p>{interviewer.name}</p>
                    <p>{interviewer.designation}</p>
                    <p>{interviewer.company}</p>
                    <p>{interviewer.experience} years of experience in industry</p>
                    <p className="skill-chips">
                            {interviewer.skills.map(skill => (<>
                                <Tag className="chip" closable color="success" label={skill} >{skill}</Tag>
                            </>
                            ))}                 
                    </p>

                </section>
                <section className="right-profile">
                    <h3 className="heading">About</h3>
                    <p className="about">{interviewer.about}</p>
                    <h3 className="heading">Interview Topics</h3>
                    <p class="skill-chips">
                      {interviewer.topics.map(topic => (<>
                          <Tag className="chip2" closable color="warning" label={topic} >{topic}</Tag>
                      </>
                      ))}
                    </p>
                    <h3 className="heading" style={{margin:"3vh 0"}}>Total Interviews taken : <span style={{color:"orange"}}>{interviewer.interviewCount}</span></h3>
                    
                    <span style={{display:"flex"}}>
                    <h3 className="heading" style={{ marginRight:"1vw" }}>Contact : </h3>
                    <span style={{display:"flex",margin:"1vh 0"}}>
                        {interviewer.contacts.map(contact => (<>
                            <p style={{margin:"5px  2vw 5px 0"}}><i className={contact.icon}></i> { contact.value}</p>
                        </>
                        ))}
                    </span>
                    </span>
                    
                    <h3 className="heading">Student Rating (5) :
                        
                        {rating.map(rate => (
                            <>
                                {rate}
                            </>
                        ))}
                    </h3>

                </section>
            </div>
            <FormModal data={<InterviewerForm onFinish={onFinish} about={interviewer.about} interviewer={interviewerForm} />} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    )
}
 