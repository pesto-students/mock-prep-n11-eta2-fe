import React from 'react'
import { Link} from "react-router-dom"
import { Card,Button } from "antd"
import "../Topics/TopicsCard.css"

export default function QuizCard({ image, title, category,route,id,remove,delIcon }) {
    console.log(id)
    const { Meta } = Card;
    console.log(title)
    return (
        <Card hoverable 
                id="topicCard"
                cover={<img alt="example" id="cardImage" src={image}/>}>
                <Meta title={title} description={"Category: "+category} />
                {/* <a id="icon" onClick={() => remove(id)}> { delIcon}</a> */}
                <a href={route} onClick={() => { window.location.reload("/") }}><Button id="topics-btn" type="primary">Start Quiz</Button></a>
        </Card>
        
    )
}
