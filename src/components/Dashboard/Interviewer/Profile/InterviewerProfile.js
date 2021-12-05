import React, { useState} from 'react'
import DashHeader from '../../Common/Header/DashHeader'
import { Person } from "@material-ui/icons"  
import { Button } from 'antd';
import "./InterviewerProfile.css"
import { interviewers } from '../../../../constant/data';
import { Tag } from "antd"
import FormModal from '../../../Primary Components/Modal/Form/FormModal';

export const InterviewerProfile = () => {

    const interviewer = interviewers[0];
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
    
    for (var i = 0; i < interviewer.rating; i++){
        rating.push(<i className="fa fa-star"/>);
    }

    return (
        <div className="interviewer-profile">
             
             <DashHeader title="Interviewer Profile" icon={<Person />}
                rightComponent={
                    <>
                        <section className="search">
                            <Button onClick={showModal} primary type="primary" className="update">Update Profile</Button>
                        </section></>} />
            
            <div className="int-profile-container">
                <section className="left-profile">
                    <img src={interviewer.pic} alt="profile"/>
                    <p>{interviewer.name}</p>
                    <p>{interviewer.designation}</p>
                    <p>{interviewer.company}</p>
                    <p>{interviewer.experience} years of experience in industry</p>
                    <p class="skill-chips">
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
                    <h3 className="heading">Student Rating:
                        
                        {rating.map(rate => (
                            <>
                                {rate}
                            </>
                        ))}
                    </h3>

                </section>
            </div>
            <FormModal isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
           
        </div>
    )
}
