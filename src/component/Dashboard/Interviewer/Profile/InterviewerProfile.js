import React, { lazy} from 'react'
import { Tag } from "antd"
import { UserIcon } from 'constant/antIcons';
import { interviewers } from 'constant/data';
import { useParams } from "react-router-dom";

import "./InterviewerProfile.css"
import DashboardHeader from 'component/Dashboard/Common/Header/DashboardHeader';
import { adminNavList } from "constant/navList"
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))

export const InterviewerProfile = () => {

    const { profileId } = useParams();
    
    let int  = interviewers.filter(e => e.id === Number(profileId))
    let interviewer = int[0]

    return (
        <>
        <SideNav sideNavList={adminNavList} userName="admin"></SideNav>
            <div className="interviewer-profile">
                <DashboardHeader title="Interviewer Profile" icon={UserIcon}  />

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
                            <Tag className="chip2" key={topic.id} closable color="warning" label={topic} >{topic}</Tag>
                        </>
                        ))}
                        </p>
                        <h3 className="heading" style={{margin:"3vh 0"}}>Total Interviews taken : <span style={{color:"orange"}}>{interviewer.interviewCount}</span></h3>
                        
                        <span style={{display:"flex"}}>
                        <h3 className="heading" style={{ marginRight:"1vw",marginTop:"4px" }}>Contact : </h3>
                        <span style={{display:"flex",margin:"1vh 0"}}>
                            {interviewer.contacts.map(contact => (<>
                                <p key={ contact.id} style={{margin:"5px  2vw 5px 0"}}><i className={contact.icon}></i> { contact.value}</p>
                            </>
                            ))}
                        </span>
                        </span>
                        
                        {/* <h3 className="heading">Student Rating (5) :
                            
                            {rating.map((rate,index) => (
                                <> <i key={index }>{rate}</i>
                                </>
                            ))}
                        </h3> */}

                    </section>
                </div> 
            </div>
        </>
    )
}