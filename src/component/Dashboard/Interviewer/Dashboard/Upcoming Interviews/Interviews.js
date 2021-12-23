import React, { lazy} from 'react'
import { Button } from "antd"
import { Link } from 'react-router-dom'
import { CalenderIcon} from "Constant/antIcons"
import "./Interview.css"
import { PreviousInterviewChart } from '../Charts/PreviousMonth'


export default function Interviews() {
    

    let interviewList = [
        {
            id: 1,
            studentName: "Mohammed Saif",
            interviewerName: "Mark Taylor",
            date: "10/12/21",
            slot: "2pm - 3pm",
            url: "teams",
            topic:"Web Developemnet"
        },
        {
            id: 2,
            studentName: "Mohammed Salman",
            interviewerName: "Mark Taylor",
            date: "10/12/21",
            slot: "2pm - 3pm",
            url: "teams",
            topic:"Web Developemnet"
        },
        {
            id: 3,
            studentName: "Mohammed Suhaib",
            interviewerName: "Mark Taylor",
            date: "13/12/21",
            slot: "2pm - 3pm",
            url: "teams",
            topic:"HTML Developemnet"
        }
    ]

    return (
        <div>
            <section id="interview-details-dashboard">
                <section id="upcomingInterviews">
                    <h2 className='title'>Upcoming Interviews
                      <Link to="upcomingInterviews"> <Button type="primary">View All</Button></Link> 
                    </h2>
                    <section id="upcomingList">
                        {
                            interviewList.map((e, index) => (
                                <section key={index} id="interviewInfo">
                                   
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
                                    <a href={e.url}>Join Meets</a>
                                </span>
                            </section>
                            ))
                        }
                    </section>
                    
                </section>
                <section id="previousInterviews">   
                    <PreviousInterviewChart />
                </section>
            </section>
        </div>
    )
}
