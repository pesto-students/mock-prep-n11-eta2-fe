import React, { useState} from 'react'
import DashHeader from '../../Common/Header/DashHeader'
import { Person } from "@material-ui/icons"  
import { Button } from 'antd';
import "../../Interviewer/Profile/InterviewerProfile.css"
import {  students } from '../../../../constant/data';
import { Tag } from "antd"
import FormModal from '../../../Primary Components/Modal/Form/FormModal';
import { InterviewerForm } from "../../../Primary Components/Forrm/Interviewer/InterviewerForm"
import { Progress } from 'antd';
import "./StudentProfile.css"

export const StudentProfile = () => {

    const student = students[0];
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    let rating = [];
    
    for (var i = 0; i < student.rating; i++){
        rating.push(<i className="fa fa-star"/>);
    }

    return (
        <div className="student-profile">
             
             <DashHeader title="Student Profile" icon={<Person />}
                rightComponent={
                    <>
                        <section className="search">
                            <Button onClick={showModal} primary type="primary" className="update">Update Profile</Button>
                        </section></>} />
            
            <div className="int-profile-container">
                <section className="left-profile">
                    <img src={student.pic} alt="profile"/>
                    <p>{student.name}</p>
                    <p>{student.degree}</p>

                    <p>{student.experience} years of experience as {student.designation}</p>
                    <p className="skill-chips">
                            {student.skills.map(skill => (<>
                                <Tag className="chip" closable color="success" label={skill} >{skill}</Tag>
                            </>
                            ))}                 
                    </p>

                </section>
                <section className="right-profile">
                    <h3 className="heading">About</h3>
                    <p className="about">{student.about}</p>
                    <h3 className="heading">Interview Topics</h3>
                    <p class="skill-chips">
                      {student.topics.map(topic => (<>
                          <Tag className="chip2" closable color="warning" label={topic} >{topic}</Tag>
                      </>
                      ))}
                    </p>
                    <h3 className="heading" style={{marginBottom:0}}>Contact Details:
                        
                    </h3>
                    <span style={{display:"flex",margin:"1vh 0"}}>
                        {student.contacts.map(contact => (<>
                            <p style={{margin:"5px 2vw 5px 0"}}><i className={contact.icon}></i> { contact.value}</p>
                        </>
                        ))}
                    </span>
                    <h3 className="heading">Student Rating:
                        <Progress color="success" style={{width:"70%",margin:"0vw 2vw"}} percent={student.rating*10} status="active" />
                    </h3>

                </section>  
            </div>
            <FormModal data={<InterviewerForm interviewer={student} />} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    )
}
