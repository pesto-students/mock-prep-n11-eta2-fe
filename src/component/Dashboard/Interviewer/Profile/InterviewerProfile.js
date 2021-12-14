import React, { useState,lazy} from 'react'
import { Tag } from "antd"
import { UserIcon } from 'constant/antIcons';
import { interviewers } from 'constant/data';
import { useParams } from "react-router-dom";
import { adminNavList } from "constant/navList"
import "./InterviewerProfile.css"
import Forms  from 'component/Common/Form/Forms';

const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const DashboardHeader = lazy(() => import("component/Dashboard/Common/Header/DashboardHeader"))
const CommonButton = lazy(() => import("component/Common/Button/CommonButton"))
const Modals = lazy(() => import("component/Common/Modal/Modals"))

export const InterviewerProfile = () => {

    const { profileId } = useParams();
    
    let int  = interviewers.filter(e => e.id === Number(profileId))
    let interviewer = int[0]
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

    const submit = (value) => { 
  
        for (var key in value) {
            if (value[key] !== undefined) {
                interviewer[key] = value[key]
            }
        }

        interviewers.map(int => interviewer.id === int.id || int);
    }

    const data = <Forms populate={true} submitFunction={submit} formFields={interviewerForm} textArea={interviewer.about} buttonValue="Update" /> 


    let rating = [];
    
    for (var i = 0; i < interviewer.rating; i++){
        rating.push(<i className="fa fa-star"/>);
    }

    return (
        <>
        <SideNav sideNavList={adminNavList} userName="admin"></SideNav>
            <div className="interviewer-profile">
                <DashboardHeader title="Interviewer Profile" icon={UserIcon} rightComponent={<CommonButton buttonName="Update Details" onClick={showModal} isDisabled="false" style={{width:"100%",color:"white !important"}} />}  />
                <div className="int-profile-container">
                    <section className="left-profile">
                        <img src={interviewer.pic} alt="profile"/>
                        <p>{interviewer.name}</p>
                        <p>{interviewer.designation}</p>
                        <p>{interviewer.company}</p>
                        <p>{interviewer.experience} years of experience in industry</p>
                        <section className="skill-chips">
                            {interviewer.skills.map((skill, index) => (
                                <section key={index}>
                                    <Tag key={index} className="chip" closable color="success" label={skill} >{skill}</Tag>
                                </section>
                                ))}                 
                        </section>

                    </section>
                    <section className="right-profile">
                        <h3 className="heading">About</h3>
                        <p className="about">{interviewer.about}</p>
                        <h3 className="heading">Interview Topics</h3>
                        <section className="skill-chips">
                            {interviewer.topics.map((topic, index) => (
                            <section key={index}>
                            <Tag className="chip2" key={index} closable color="warning" label={topic} >{topic}</Tag>
                        </section>
                        ))}
                        </section>
                        <h3 className="heading" style={{margin:"3vh 0"}}>Total Interviews taken : <span style={{color:"orange"}}>{interviewer.interviewCount}</span></h3>
                        
                        <span style={{display:"flex"}}>
                        <h3 className="heading" style={{ marginRight:"1vw",marginTop:"4px" }}>Contact : </h3>
                        <span style={{display:"flex",margin:"1vh 0"}}>
                                {interviewer.contacts.map((contact, index) => (
                            <span key={index}>
                                <p key={index} style={{margin:"5px  2vw 5px 0"}}><i className={contact.icon}></i> { contact.value}</p>
                            </span>
                            ))}
                        </span>
                        </span>
                        
                        <h3 className="heading">Student Rating (5) :
                            
                            {rating.map((rate,index) => (
                                <i key={index}>{rate}</i>
                            ))}
                        </h3>

                    </section>
                </div>
            </div>
      
            <Modals animation={false} data={data} title="Update Interviewer" isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
         
        </>
    )
}