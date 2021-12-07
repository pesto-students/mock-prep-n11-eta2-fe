import React from 'react'
import MPHeader from '../Primary Components/Header/Header'
import Footer from '../Primary Components/Footer/Footer'
import { InterviewerForm } from '../Primary Components/Forrm/Interviewer/InterviewerForm'
import './Contact.css' 

export default function Contact() {
    
    const queryForm = {
        name: "David Smith",
        email: "davidsmith@gmail.com",
        phone: "8553548534",
        title: "Query Regarding Interview",
    }

    return (
        <>
            <MPHeader />    
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Have a Question or just want to say hi ? We would love to hear from you</p>
                <section className="queryForm">
                    <InterviewerForm about="" ButtonValue="Submit" interviewer={ queryForm}/>
                </section>
                <h2>info@mockprep.com or 8553548534</h2> 
            </section>

            <Footer/>  
        </>
    )
}
