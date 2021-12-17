import React, { useState,useEffect,lazy} from 'react'
import { Tag } from "antd"
import { smileIcon } from 'constant/antIcons';
import { useParams } from "react-router-dom";
import { adminNavList, fallback } from "constant/navList"
import Forms from 'component/Common/Form/Forms';
import "./StudentProfile.css"
import { getData } from 'api/Fetch';
import { getStudentById, updateStudent } from 'constant/apiUrl';
import { updateData } from 'api/Update';

const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const DashboardHeader = lazy(() => import("component/Dashboard/Common/Header/DashboardHeader"))
const CommonButton = lazy(() => import("component/Common/Button/CommonButton"))
const Modals = lazy(() => import("component/Common/Modal/Modals"))


export default function StudentProfile  () {
    
    const { profileId } = useParams();
    
    let [interviewer, setInterviewer] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => { 
        const getInterviewer = async () => { 
            const int = await getData(getStudentById+profileId);
            if (int) setInterviewer(int)
        }
        getInterviewer()
    },[profileId])

    const interviewerForm = JSON.parse(JSON.stringify(interviewer));
    delete interviewerForm._id
    delete interviewerForm.userId
    delete interviewerForm.about;
    delete interviewerForm.contacts;
    delete interviewerForm.__v;
    
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

      
        updateData(updateStudent+interviewer._id,interviewer)
    }

    let rating = [];
    
    for (var i = 0; i < interviewer.rating; i++){
        rating.push(<i className="fa fa-star"/>);
    }

    return (
        <>
            <SideNav sideNavList={adminNavList} userName="Admin"></SideNav>
            
            <div className="interviewer-profile">
                <DashboardHeader title="Student Profile" icon={smileIcon} rightComponent={<CommonButton buttonName="Update Details" onClick={showModal} isDisabled="false" style={{width:"100%",color:"white !important"}} />}  />
                {Object.keys(interviewer).length !== 0 ?
                    <div className="int-profile-container">
                        <section className="left-profile">
                            <img src={interviewer.image} alt="profile" />
                            <p>{interviewer.name}</p>
                            <p>{interviewer.email}</p>
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
                                {interviewer.topics.map((topic, index) => (<section key={index}>
                                    <Tag className="chip2" closable color="warning" label={topic} >{topic}</Tag>
                                </section>
                                ))}
                            </section>
                            <h3 className="heading" style={{ margin: "3vh 0" }}>Total Interviews taken : <span style={{ color: "orange" }}>{interviewer.interviewCount}</span></h3>
                        
                            <span style={{ display: "flex" }}>
                                <h3 className="heading" style={{ marginRight: "1vw", marginTop: "4px" }}>Contact : {interviewer.contact}</h3>

                            </span>
                        
                            <h3 className="heading">Student Rating (10) : 
                                { interviewer.rating}
                            </h3>

                        </section>
                    </div> :
                    <section>{fallback}</section>
                }
            </div>
            <Modals animation={false} data={ <Forms populate={true} submitFunction={submit} formFields={interviewerForm} textArea={interviewer.about} buttonValue="Update" /> } title="Update Interviewer" isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
   
        </>
    )
}