import React, { lazy } from 'react'
import { interviewers } from "constant/data"
import "./Interviewers.css"

const InterviewerCard = lazy(() => import("component/Common/Cards/Interviewer/InterviewerCard"))

export default function Interviewers() {
    return (
        <div>
            <h1 className="headline" style={{marginTop:"10vh"}}>Meet Our Instructors</h1>
            <section className="interviewer-list">
                {interviewers.map(person => (
                    <InterviewerCard key={person.id} id={person.id} name={person.name} pic={person.pic} designation={person.designation} company={person.company} />
                ))}
            </section>
        </div>
    )
}