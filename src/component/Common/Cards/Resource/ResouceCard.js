import React from 'react'
import { Card,Button } from "antd"
import "../Topics/TopicsCard.css"
import "./ResourceCard.css"

export default function ResourceCard({ image, title, description,url,id,delIcon,remove,editIIcon,update }) {
    
    const { Meta } = Card;
    return (
        
        <div id="resourceCard">
            <section id="resourceIcon">
                <img src={image}></img>
            </section>
            <section id="resourceContent">
                <h3>{title}</h3>
                <p>{description} <a target="_blank" href={url}>Click to read</a></p>
            </section>
        </div>
    )
}
