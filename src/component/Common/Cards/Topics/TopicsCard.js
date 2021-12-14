import React from 'react'
import { Link} from "react-router-dom"
import { Card,Button } from "antd"
import "./TopicsCard.css"

export default function TopicsCard({ pic, title, description,route }) {
    
    const { Meta } = Card;
    return (
        <Card hoverable 
                id="topicCard"
                cover={<img alt="example" id="cardImage" src={pic}/>}>
                <Meta title={title} description={description} />
            <Link to={route}><Button  id="topics-btn" type="primary">Start Learning..</Button></Link>
        </Card>
        
    )
}
