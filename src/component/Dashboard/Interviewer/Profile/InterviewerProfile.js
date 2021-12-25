import React, { useState,lazy,useEffect} from 'react'
import { Tag } from "antd"
import { UserIcon } from 'constant/antIcons';
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { updateData } from 'api/Api';
import { getInterviewers, updateInterviewer } from 'constant/apiUrl';
import { fallback } from 'constant/navList'; 
import Forms  from 'component/Common/Form/Forms';
import dataActions from 'Redux/Actions/dataAction';
import dataActionCreators from 'Redux/Action Creators/dataActionCreators';
import "./InterviewerProfile.css"

const DashboardHeader = lazy(() => import("component/Dashboard/Common/Header/DashboardHeader"))
const CommonButton = lazy(() => import("component/Common/Button/CommonButton"))

export const InterviewerProfile = () => {

    const { profileId } = useParams();

    let [interviewer, setInterviewer] = useState({})
    let [update, setUpdate] = useState(false)
   
    const dispatch = useDispatch()
    let interData = useSelector(state => state.dataReducer)
    let auth = useSelector(state => state.authReducer)

    useEffect(() => { dataActionCreators.getAdminData(dispatch,getInterviewers,dataActions.setInterviewer)},[dispatch])
    useEffect(() => {  if (interData.interviewerData !== undefined) setInterviewer(interData.interviewerData.data.find(e => e._id===profileId)) },[profileId,   interData])

    const interviewerForm = JSON.parse(JSON.stringify(interviewer));
    delete interviewerForm._id
    delete interviewerForm.userId
    delete interviewerForm.about;
    delete interviewerForm.contacts;
    delete interviewerForm.__v;
    delete interviewerForm.interviewCount;
    delete interviewerForm.rating

    if (auth.user.role !== "admin") { 
        delete interviewerForm.onboarded
    }

    const showModal = () => {
        setUpdate(true);
    };


    const submit = (value) => { 
        console.log(value)

        if (value.skills) { 
            value.skills = value.skills.split(",")
        }

        if (value.topics) { 
            value.topics = value.topics.split(",")
        }

        for (var key in value) {
            if (value[key] !== undefined) {
                interviewer[key] = value[key]
            }
        }
        updateData(updateInterviewer + interviewer._id, interviewer)
        setUpdate(false)
    }

    const data = <Forms populate={true} submitFunction={submit} formFields={interviewerForm} textArea={interviewer.about} buttonValue="Update Details" /> 
    const component1 = <CommonButton buttonName="View Profile" onClick={() => {setUpdate(false)}} isDisabled="false" style={{ width: "100%", color: "white !important" }} />
    const component2 = <CommonButton buttonName="Update Details" onClick={showModal} isDisabled="false" style={{ width: "100%", color: "white !important" }} />
      

    let rating = [];
    
    for (var i = 0; i < interviewer.rating; i++){
        rating.push(<i className="fa fa-star"/>);
    }

    return (
        <>
            <div className="interviewer-profile">
                <DashboardHeader title="Interviewer Profile" icon={UserIcon} rightComponent={auth.user.role !== "student" ?<> {update ? component1: component2} </>: <></>} />
                  
                {Object.keys(interviewer).length !== 0 ?
                    <>
                        {!update ?
                            <div className="int-profile-container">
                            <section className="left-profile">
                                <img src={interviewer.image} alt="profile" />
                                <p>{interviewer.name}</p>
                                <p style={{textTransform:"lowercase"}}>{interviewer.email}</p>
                                <p>{interviewer.designation}, {interviewer.company}</p>
                                <p>{interviewer.experience} years of experience in industry</p>
                                <section className="skill-chips">
                                    {interviewer.skills.map((skill, index) => (
                                        <section key={index}>
                                            <Tag key={index} className="chip"  color="success" label={skill} >{skill}</Tag>
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
                                            <Tag className="chip2" key={index} color="warning" label={topic} >{topic}</Tag>
                                        </section>
                                    ))}
                                </section>
                                <h3 className="heading" style={{ margin: "3vh 0" }}>Total Interviews taken : <span style={{ color: "orange" }}>{interviewer.interviewCount}</span></h3>
                            
                              
                                <h3 className="heading" style={{ marginRight: "1vw", marginTop: "4px",marginBottom:"2vh" }}>Contact : {interviewer.contact }</h3>                      
                            
                                <h3 className="heading">Student Rating (5) :
                                
                                    {rating.map((rate, index) => (
                                        <i key={index}>{rate}</i>
                                    ))}
                                </h3>

                            </section>
                            </div> :
                            <div className="int-profile-form">
                                {data}
                            </div>
                        }
                    </>
                    : <section>{fallback}</section>
                }
            </div>
        </>
    )
}