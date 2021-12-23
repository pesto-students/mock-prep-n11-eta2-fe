import React from 'react'
import { Card,Button } from "antd"
import "../Topics/TopicsCard.css"

export default function ResourceCard({ image, title, description,url,id,delIcon,remove,editIIcon,update }) {
    
    const { Meta } = Card;
    return (
        <Card hoverable 
                id="topicCard"
                cover={<img alt="example" id="cardImage" src={image} />}>
                    <p className="icon" onClick={() => remove(id)}> {delIcon}</p>
                    <p  className="icon" onClick={() => update(id)}> { editIIcon}</p>
                <Meta title={title} description={description} />
                <a rel="noreferrer" target="_blank" href={url}><Button  id="topics-btn" type="primary">Learn More..</Button></a>
        </Card>   
    )
}
