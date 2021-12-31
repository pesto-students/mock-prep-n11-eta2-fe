import React from 'react'
import "./LeaderBoard.css"
import { Tag } from 'antd'
import { trophyIcon } from 'constant/antIcons'
import { getStudents } from 'constant/apiUrl'
import { useState, useEffect } from "react"
import { useDispatch,useSelector } from 'react-redux'
import dataActionCreators from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'


export const LeaderBoard = (studentList) => {

    let [interviews,setInterviews] = useState(studentList.interviews)
   console.log(interviews)
    return (
        <div id="leaderboard">
            <section className="cust-review">   
                    <h2 className="title">Student Leaderboard</h2>
                    {studentList.student.length>0 ?
                        <section>
                            {studentList.student.map((student, index) => (
                                <section key={index} className="review-container">
                                    <span style={{ display: "flex" }}>
                                        <img src={student.image} alt="profile" />
                                        <p>{student.name} <br/>
                                            {student.skills.map((s,index) => (
                                                <Tag id={index} color="success" style={{marginTop:"2px"}} >{s}</Tag> 
                                            ))}
                                        </p>
                                      
                                    </span>
                                    { student.analytics ?   <h5>  {trophyIcon} {student.analytics.ranking}</h5>:  <h5>  {trophyIcon} 0</h5>}
                                  
                                </section>
                            ))}
                        </section> :
                        <p>Loading</p>
                    }
            </section>
            <section className="action-items">   
                    <h2 className="title">Action Items</h2>
                    {interviews.length>0 ?
                        <section>
                        {
                            interviews.map(int => (
                                <section id="action">
                                    <span>
                                    <p>{int.actionItems[0].title}</p>
                                    <p>{int.actionItems[0].description}</p>
                                    </span>
                                  
                                    <span>
                                        <p>{int.actionItems[0].due}</p>
                                        <Tag color={"red"}>{int.actionItems[0].status}</Tag>
                                    </span>
                                  
                                </section>
                            ))
                        }
                        </section> :
                        <p>Loading</p>
                    }
            </section>
            
        </div>
    )
}
