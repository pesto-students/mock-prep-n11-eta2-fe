import React from 'react'
import { Link} from "react-router-dom"
import { Card,Button } from "antd"
import "./TopicsCard.css"

export default function TopicsCard({ id,image, title, description,route,delIcon,remove,editIcon ,update}) {
    
    const { Meta } = Card;
    return (
        <Card hoverable id="topicCard" cover={<img alt="example" id="cardImage" src={image} />}>
            <a className="icon" href="#" onClick={() => remove(id)}> {delIcon}</a>
            <a className="icon" href="#" onClick={() => update(id)}> {editIcon}</a>
            <Meta title={title} description={description} />
            <Link to={route}><Button id="topics-btn" type="primary">Start Learning..</Button></Link>
        </Card>
        
    )
}
