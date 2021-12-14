import React from 'react'
import { Card,Button } from "antd"
import "../Topics/TopicsCard.css"

export default function ResourceCard({ pic, title, description,url }) {
    
    const { Meta } = Card;
    return (
        <Card hoverable 
                id="topicCard"
                cover={<img alt="example" id="cardImage" src={pic}/>}>
                <Meta title={title} description={description} />
                <a rel="noreferrer" target="_blank" href={url}><Button  id="topics-btn" type="primary">Learn More..</Button></a>
        </Card>   
    )
}
