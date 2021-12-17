import React, { lazy,useEffect,useState } from 'react'
import "./Interviewers.css"
import { getData} from 'api/Fetch'
import { getInterviewers } from 'constant/apiUrl'

const InterviewerCard = lazy(() => import("component/Common/Cards/Interviewer/InterviewerCard"))

export default function Interviewers() {

    let [interviewers,setInterviewers] = useState([])

    useEffect(() => { 
        const getInterviewer = async () => { 
            const interviewer = await getData(getInterviewers);
            if(interviewer) setInterviewers(interviewer)
        }
        getInterviewer()
    },[])
 
    return (
        <div>
            <h1 className="headline" style={{ marginTop: "10vh" }}>Meet Our Instructors</h1>
            {interviewers ?
                <section className="interviewer-list">
                    {interviewers.map((person, index) => (
                        <InterviewerCard key={index} id={person.id} name={person.name} pic={person.image} designation={person.designation} company={person.company} />
                    ))}
                </section>
                :
            <p>Loading...</p>
            }
        </div>
    )
}