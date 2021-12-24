import React, { lazy} from 'react'
import { Button,Progress } from "antd"
import { Link } from 'react-router-dom'
import { CalenderIcon} from "Constant/antIcons"
import "./Interview.css"
import { PreviousInterviewChart } from '../../../Interviewer/Dashboard/Charts/PreviousMonth'


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

    let tasks = [
        {
            task: "Web Developer Preparation",
            interviewCount: 6,
            quizScore: 8,
            interviewScore: 7,
        },
        {
            task: "JavaScript Developer",
            interviewCount: 2,
            quizScore: 8.5,
            interviewScore: 9,
        },

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
                                    <p>{e.interviewerName}</p>
                              
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
                    <h2 className='title'>Progress</h2>
                    <section id="student-info">
                        {tasks.map((task, index) => (
                            <section key={index} id="task">
                                <Progress type="circle" id="progressCircle" strokeColor="lightgreen" percent={((task.quizScore + task.interviewScore) / 2) * 10} />
                            <span>
                             <h4>{task.task}</h4>
                             <p>Quiz Score: {task.quizScore}</p>
                             <p>Mock Interview Score: {task.interviewScore}</p>
                             </span>
                         </section>
                        ))
                        }
                       
                    </section>
                </section>
            </section>
        </div>
    )
}
