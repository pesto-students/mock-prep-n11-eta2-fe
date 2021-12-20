import React, { lazy, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getInterviewers } from 'Constant/apiUrl'
import { getData } from 'api/Api'
import { dataActionCreator } from 'Redux/Action Creators/dataActionCreators'
import "./Interviewers.css"

const InterviewerCard = lazy(() => import("component/Common/Cards/Interviewer/InterviewerCard"))

export default function Interviewers() {

    const dispatch = useDispatch();
 
    useEffect(() => { 
        const getDataFunction = async () => { 
            const interviewer = await getData(getInterviewers);
            dataActionCreator.setInterviewer(dispatch, interviewer)
        }
        getDataFunction()
    }, [dispatch])

    let interviewers = useSelector(state => state.dataReducer);
    console.log(interviewers)
  
    return (
        <section className="interviewer-list">
                {interviewers.length>0 ? interviewers.map((person, index) => (<InterviewerCard key={index} id={person.id} name={person.name} pic={person.image} designation={person.designation} company={person.company} />)):<p>Loading..</p>}
        </section>
    )
}