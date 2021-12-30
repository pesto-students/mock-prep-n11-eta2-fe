import React from 'react'
import "./LeaderBoard.css"
import { Tag } from 'antd'
import { trophyIcon } from 'constant/antIcons'
import { getStudents } from 'constant/apiUrl'
import { useState, useEffect } from "react"
import { useDispatch,useSelector } from 'react-redux'
import dataActionCreators from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'


export const LeaderBoard = (studentList,interviews) => {

  
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
            {interviews && interviews.actionItems > 0 ? <>
                <section className="total-earning">
                <h2 className="headline">Action Items </h2>
                {interviews.actionItems.map((action,index) => (
                    <section key={index} className="top">
                        <section>
                            <p>{action.title}</p>
                            <h4>{ action.description}</h4>
                            <p>Due: {action.due}</p>
                        </section>
                        <Tag id="tag" color="red">{action.status}</Tag>

                    </section>
                )) }
                   
            </section>
            </> : <></>}
           
        </div>
    )
}
