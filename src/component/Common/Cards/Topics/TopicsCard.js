import React from 'react'
import { Link} from "react-router-dom"
import { Card, Button } from "antd"
import { useSelector } from 'react-redux'
import "./TopicsCard.css"

export default function TopicsCard({ id, image, title, description,dashboard, route, delIcon, remove, editIcon, update }) {
    

    let userRole = useSelector(state => state.authReducer.user.role)
   
    
    const { Meta } = Card;
    return (
        <Card hoverable id="topicCard" cover={<img alt="example" id="cardImage" src={image} />}>
            {userRole=== "admin" ? 
                <><p className="icon"  onClick={() => remove(id)}> {delIcon}</p><p className="icon" onClick={() => update(id)}> {editIcon}</p></>: <></>}
            <Meta title={title} description={description} />
            <Link to={`resourceList/${id}`}>
                {!dashboard ?
                    <Button id="topics-btn" type="primary"> Start Learning..</Button>
                    : <Button id="topics-btn" type="primary"> Continue Learning..</Button>
                }
            </Link>
        </Card>
        
    )
}
