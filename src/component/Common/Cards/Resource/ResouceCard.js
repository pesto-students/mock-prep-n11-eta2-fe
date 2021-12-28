import React from 'react'
import "../Topics/TopicsCard.css"
import "./ResourceCard.css"

export default function ResourceCard({ image, title, description,url }) {

    return (
        <div id="resourceCard">
            <section id="resourceIcon">
                <img id="resourceImage" alt="resourceImage" src={image}></img>
            </section>
            <section id="resourceContent">
                <h3>{title}</h3>
                <p>{description} <a rel="noreferrer" target="_blank" href={url}>Click to read</a></p>
            </section>
        </div>
    )
}
