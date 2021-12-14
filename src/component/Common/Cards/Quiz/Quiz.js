import React from 'react'
import { Link} from "react-router-dom"
import { Card,Button } from "antd"
import "../Topics/TopicsCard.css"

export default function QuizCard({ pic, title, count,route }) {
    
    const { Meta } = Card;
    return (
        <Card hoverable 
                id="topicCard"
                cover={<img alt="example" id="cardImage" src={pic}/>}>
                <Meta title={title} description={"No of Questions: "+count} />
                <Link to={route}><Button  id="topics-btn" type="primary">Start Quiz</Button></Link>
        </Card>
        
    )
}
