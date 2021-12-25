import React, { lazy } from 'react'
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import "./Introduction.css"

const Header = lazy(() => import("component/Common/Header/Header"))

export default function Introduction  ()  {
    return (
        <>
        <div id="introduction">
            <Header />
            <section id="banner-text">
                <h2>Prepare your interview with a <span id="highlight">"Google Interviewer"</span></h2>
                <p>Mockprep is a interview preparation platform,allowing users to engage with experts to guide and mentor 
                    to prepare best way possible.
                </p>
                <section id="join-button">
                <Link to="/join"><Button className="btn join-btn btn-warning">Join</Button></Link>
                <Link to="/signIn"><Button className="btn join-btn btn-primary mx-4">Sign In</Button></Link>
                </section>    
            </section>           
        </div> 
        </>
    )
}


