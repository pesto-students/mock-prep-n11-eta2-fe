import React from 'react'
import { Link} from "react-router-dom"
import { Card,Button } from "antd"
import "../Topics/TopicsCard.css"

export default function QuizCard({ image, title, category,route }) {
    
    const { Meta } = Card;
    console.log(title)
    return (
        <Card hoverable 
                id="topicCard"
                cover={<img alt="example" id="cardImage" src={image}/>}>
                <Meta title={title} description={"Category: "+category} />
            <Link to={route} ><Button  id="topics-btn" type="primary">Start Quiz</Button></Link>
        </Card>
        
    )
}
