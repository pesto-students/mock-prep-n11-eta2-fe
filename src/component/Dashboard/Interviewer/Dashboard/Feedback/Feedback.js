import React, {  useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {  getStudents } from "constant/apiUrl"
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import "./Feedback.css"



export default function Feedback({stats}) {
    
    

    const dispatch = useDispatch()
   
    let data = useSelector(state => state.dataReducer)
    
    useEffect(() => {
        dataActionCreator.getAdminData(dispatch, getStudents, dataActions.setStudentList)
        
    }, [dispatch])
 
    return (
        <>
             {stats.analytics && stats.feedback && data.studentList ? 
                <>
                   <div>
                        {<section className="customer-feedback">
                            <section className="total-earning">
                                <h2 className="headline">Quick Stats (2021)</h2>
                                <section className="top">
                                    <p>Total Revenue</p>
                                    <h4>{stats.analytics.totalEarnings}</h4>
                                    <p>1.4% Growth</p>
                                </section>
                                <section className="top">
                                    <p>Total Interviews taken</p>
                                    <h4>{stats.analytics.totalInterviews}</h4>
                                    <p>Averaging 15 interviews a month</p>
                                </section>
                                <section className="top">
                                    <p>Average Rating</p>
                                    <h4>{stats.rating}</h4>
                                    <p>Out of 67 reviews</p>    
                                </section>
                            </section>
                            <section className="cust-review">
                                <h2 className="headline">Student Feedback</h2>
                                {stats.feedback.length > 0 && data.studentList ?
                                    <section>
                                        {stats.feedback.map((review, index) => (
                                            <section key={index} className="review-container">
                                                <span style={{ display: "flex" }}>
                                                    {/* <img src={review.image} alt="profile" /> */}
                                                    <p>{review.name}<br />{review.review}</p>
                                                </span>
                                                <p>{review.rating}/5</p>
                                            </section>
                                        ))}
                                    </section> :
                                    <p>Loading</p>
                                }
                            </section>
                        </section>}
                    </div> 
                </> :
                <></>
            }
        </>
    )
}
