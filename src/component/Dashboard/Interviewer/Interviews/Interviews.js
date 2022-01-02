
import React, { lazy } from 'react'
import { upcomingInter ,CalenderIcon} from 'constant/antIcons'

import "./Interviews.css"
import { Tabs,Tag ,Input} from "antd"

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))

export default function InterviewDetails() {

    const { Search } = Input;
    let interviewList = [
        {
            id: 1,
            studentName: "Mohammed Saif",
            interviewerName: "Mark Taylor",
            date: "10/12/21",
            slot: "2pm - 3pm",
            url: "teams",
            topic: "Web Developemnet",
            status:"upcoming"
        },
        {
            id: 2,
            studentName: "Mohammed Salman",
            interviewerName: "Mark Taylor",
            date: "10/12/21",
            slot: "2pm - 3pm",
            url: "teams",
            topic: "Web Developemnet",
            status:"upcoming"
        },
        {
            id: 3,
            studentName: "Mohammed Suhaib",
            interviewerName: "Mark Taylor",
            date: "13/12/21",
            slot: "2pm - 3pm",
            url: "teams",
            topic: "HTML Developemnet",
            status:"upcoming"
        },
        {
            id: 4,
            studentName: "Mohammed Suhaib",
            interviewerName: "Mark Taylor",
            date: "13/12/21",
            slot: "2pm - 3pm",
            url: "teams",
            topic: "HTML Developemnet",
            status:"completed"
        },
        {
            id: 5,
            studentName: "Mohammed Suhaib",
            interviewerName: "Mark Taylor",
            date: "13/12/21",
            slot: "2pm - 3pm",
            url: "teams",
            topic: "HTML Developemnet",
            status: "cancelled",
            canReason: "Not Available"
        }
    ]
    let upcoming = interviewList.filter(e => e.status === "upcoming")
    let completed = interviewList.filter(e => e.status === "completed")
    let cancelled = interviewList.filter(e => e.status === "cancelled")

    const onSearch = (value) => {
        // let filtered = interviewers.filter(val => val.name.includes(value) ||  val.designation.includes(value) ||  val.company.includes(value) ||  val.skills.includes(value)   );
        // setInterviewerList(filtered)
        // console.log(interviewers)
    }; 


    const search = <><section className="search"><Search placeholder="Search Interviews" onSearch={onSearch} style={{ width: 200,marginBottom:10 }} /></section></>
    
    const { TabPane } = Tabs;
    return (
        <div>
            <DashboardHeader title="Interview Details" icon={upcomingInter} />
            
            <section className="interviewers">
                        {search }
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="Upcoming Interviews" key="1">
                          
                                <section id="int">
                                    {
                                        upcoming.map((e, index) => (
                                            <section key={index} id="interviewIn">
                                            
                                            <span id="date">
                                            <i className="calender">{CalenderIcon}</i>
                                                <p>{e.date}</p>
                                            </span>
                                                <p>{e.slot} </p>
                                                <p>{e.studentName}</p>
                                            <span>
                                                <p>{e.topic}</p>
                                                </span>
                                            <span>
                                                    <Tag color="red">{e.status}</Tag> 
                                            </span>
                                            <span>
                                                <a href={e.url}>Join Meet</a>
                                            </span>
                                        </section>
                                        ))
                                    }
                                </section>
                             
                            </TabPane>
                            <TabPane tab="Completed Interviews" key="2">
                          
                                <section id="upcoming">
                                    {
                                        completed.map((e, index) => (
                                            <section key={index} id="interviewIn">
                                            
                                            <span id="date">
                                            <i className="calender">{CalenderIcon}</i>
                                                <p>{e.date}</p>
                                            </span>
                                                <p>{e.slot} </p>
                                                <p>{e.studentName}</p>
                                            <span>
                                                <p>{e.topic}</p>
                                                </span>
                                            <span>
                                                    <Tag color="success">{e.status}</Tag> 
                                            </span>
                                        </section>
                                        ))
                                    }
                                </section>
                           
                            </TabPane>
                            <TabPane tab="Cancelled Interviews" key="3">
                              
                                <section id="upcoming">
                                    {
                                        cancelled.map((e, index) => (
                                            <section key={index} id="interviewIn">
                                            
                                            <span id="date">
                                            <i className="calender">{CalenderIcon}</i>
                                                <p>{e.date}</p>
                                            </span>
                                                <p>{e.slot} </p>
                                                <p>{e.studentName}</p>
                                            <span>
                                                <p>{e.topic}</p>
                                                </span>
                                            <span>
                                                    <Tag color="red">{e.status}</Tag> 
                                            </span>
                                            <span>
                                                <p href={e.url}>{e.canReason}</p>
                                            </span>
                                        </section>
                                        ))
                                    }
                                </section>
                             
                            </TabPane>
                            
                        </Tabs>
            </section>
        </div>
    )
}
