import React from 'react'
import { Link} from "react-router-dom"
import { Card,Button } from "antd"
import "./TopicsCard.css"

export default function TopicsCard({ id,image, title, description,route,delIcon,remove }) {
    
    const { Meta } = Card;
    return (
        <Card hoverable id="topicCard" cover={<img alt="example" id="cardImage" src={image} />}>
            <a id="icon" onClick={() =>     remove(id)}> { delIcon}</a>
            <Meta title={title} description={description} />
            <Link to={route}><Button id="topics-btn" type="primary">Start Learning..</Button></Link>
        </Card>
        
    )
}
