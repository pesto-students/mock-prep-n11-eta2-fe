import React from 'react'
import "../landing/landing.css"
import {
    interviewers,
    sellingPointers,
    testimonials
} from "../../constant/interviewer"
import MPButton from '../Primary Components/Button/MP_Button'
import InterviewerCard from '../Interviewer Card/Interviewer Card'
import Packages from '../Packages/Packages'

export const Landing = () => {
    return (
        <div className="landing-page">
            

            <h1 className="headline">Prepare for your upcoming interview <br /> with a "Google" Interviewer</h1>
            <p className="light-pointers">Take mock interviews & 1-on-1 mentoring sessions with real-life interviewers from the world’s best companies</p>
                 <MPButton buttonType='primary' buttonName="Explore Packages" onClick={() => alert("Test")} isDisabled = "false" size = "large" width = {"10%"} />
            <p className="light-pointers">A package for every interview preparation problem that you’ll ever face</p>
            <h3 className="headline">Meet our Interviewers</h3>

            <section className="interviewer-list">
                {interviewers.map(person => (
                    <InterviewerCard id={person.id} name={person.name} pic={person.pic} designation={person.designation} company={person.company} />
                ))}
            </section>

            <h2 className="headline">Why MockPrep ?</h2>
            <section className="sell-pointer">
                {sellingPointers.map(pointer => (
                    <section className="pointer" key={pointer.id}>
                        <p className="point"> <i className={pointer.icon}></i>{pointer.text}</p>
                    </section>
                ))}
            </section>

            <Packages />
            <h2 className="headline">Testimonials </h2>
            <section className="testimonials">
                {testimonials.map(test => (
                    <section className="testimonial" key={test.id}>
                        <img src={test.pic} alt="profile" className="test-profile"></img>
                        <section className="review">
                            <p>"{test.review}"</p>
                            <p className="test-person">{test.name}</p>
                            <p className="test-person">{test.company}</p>
                        </section>
                    </section>
                ))}
            </section>
            
        </div>
    )
}
