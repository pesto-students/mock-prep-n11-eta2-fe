import React from 'react'
import { Card,Button } from "antd"
import "../Topics/TopicsCard.css"

export default function QuizCard({ image, title, category,route,id,remove,delIcon }) {
  
    const { Meta } = Card;
        return (
                <Card hoverable 
                        id="topicCard"
                        cover={<img alt="example" id="cardImage" src={image}/>}>
                        <Meta title={title} description={"Category: "+category} />
                        <a href={route} onClick={() => { window.location.reload("/") }}><Button id="topics-btn" type="primary">Start Quiz</Button></a>
                </Card>
        )
        
}
     