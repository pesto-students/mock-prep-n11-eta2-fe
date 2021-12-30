import React, { useState,useEffect} from 'react'
import { Button } from "antd"
import { Link } from 'react-router-dom'
import { CalenderIcon} from "constant/antIcons"
import { useSelector,useDispatch } from 'react-redux'
import dataActionCreators from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import { getInterviews } from 'constant/apiUrl'
import "./Interview.css"


export default function Interviews() {

    let [interviews,setInterviews] = useState([])

    let data = useSelector(state => state.dataReducer)
    let auth = useSelector(state => state.authReducer)
    const dispatch = useDispatch()

    useEffect(() => { dataActionCreators.getAdminData(dispatch,getInterviews, dataActions.setInterviews) }, [dispatch])
    useEffect(() => {

        if (data.interviews && auth.user) { 
            setInterviews(data.interviews.data.filter(e => e.interviewer.id === auth.user.id))
        }
    }, [data,auth])

    interviews = interviews.filter(e=> e.status !== "completed")
  
    return (
        <div>
            <section id="interview-details-dashboard1">
                <section id="upcomingInterviews1">
                    <h2 className='title'>Upcoming Interviews
                      <Link to="upcomingInterviews"> <Button type="primary">View All</Button></Link> 
                    </h2>
                    { interviews.length>0 ?
                    <section id="upcomingList1">                        
                        {interviews.map((e, index) => (
                            <section key={index} id="interviewInfo1">
                                   
                                       <span id="date">
                                       <i className="calender">{CalenderIcon}</i>
                                           <p>{e.date}</p>
                                       </span>
                                           <p>{e.time} </p>
                                           <p>{e.student.name}</p>
                                     
                                       <span>
                                           <p>{e.topic}</p>
                                       </span>
                                       <span>
                                               <a style={{color:"blue"}} href={e.meetingUrl}>Join Meets</a>
                                       </span>
                            </section> 
                         ))
                        }
                    </section>:<></>}  
                </section>
                <section id="studentQuery">
                        <h2 className="title">Student Queries    <Link to="upcomingInterviews"> <Button type="primary">View All</Button></Link>     </h2>
                        <section className='stQueryDashboard'>
                            <section className='stQuery'>
                                <p>Request for Preparation links</p>
                                <p>Mohammed Saif</p>
                                <a href="/">Respond</a>
                            </section>
                        </section>
                </section>
            </section>
        </div>
    )
}
