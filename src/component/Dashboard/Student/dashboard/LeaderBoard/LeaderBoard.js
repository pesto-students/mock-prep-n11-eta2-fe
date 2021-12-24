import React from 'react'
import "./LeaderBoard.css"
import { Tag } from 'antd'
import { trophyIcon } from 'Constant/antIcons'

export const LeaderBoard = () => {


    let leaderboard = [
        {
            image: "https://randomuser.me/api/portraits/men/0.jpg",
            name: "Mohammed Saif",
            skills: ["JavaSCript", "BootStrap", "UI"],
            ranking: 1,
        },
        {
            image: "https://randomuser.me/api/portraits/women/67.jpg",
            name: "Silki Hansen",
            skills: ["JavaSCript", "UI"],
            ranking: 2,
        },

    ]

    let actionItems = [{
        title: "Read about Ux Mindset",
        description: "",
        deadline: "21/04/12",
        status: "pending"
    }]

    return (
        <div id="leaderboard">
              <section className="cust-review">   
                    <h2 className="title">Student Leaderboard</h2>
                    {leaderboard.length>0 ?
                        <section>
                            {leaderboard.map((review, index) => (
                                <section key={index} className="review-container">
                                    <span style={{ display: "flex" }}>
                                        <img src={review.image} alt="profile" />
                                        <p>{review.name} <br/>
                                            {review.skills.map((s,index) => (
                                                <Tag id={index} color="success" style={{marginTop:"2px"}} >{s}</Tag> 
                                            ))}
                                        </p>
                                      
                                    </span>
                                  
                                    <h1>  {trophyIcon} {review.ranking}</h1>
                                </section>
                            ))}
                        </section> :
                        <p>Loading</p>
                    }
            </section>
            <section className="total-earning">
                <h2 className="headline">Action Items </h2>
                {actionItems.map((action,index) => (
                    <section key={index} className="top">
                        <section>
                            <p>{action.title}</p>
                            <h4>{ action.description}</h4>
                            <p>Due: {action.deadline}</p>
                        </section>
                        <Tag id="tag" color="red">{action.status}</Tag>

                    </section>
                )) }
                   
                </section>
        </div>
    )
}
