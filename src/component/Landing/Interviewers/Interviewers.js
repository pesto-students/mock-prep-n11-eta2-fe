import React, {Suspense, lazy,useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getInterviewers } from 'constant/apiUrl'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import "./Interviewers.css"

const InterviewerCard = lazy(() => import("component/Common/Cards/Interviewer/InterviewerCard"))

export default function Interviewers() {

    let [interviewers, setInterviewers] = useState([]);
    let data = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()
    
    useEffect(() => { dataActionCreator.getAdminData(dispatch, getInterviewers, dataActions.setInterviewer) }, [dispatch])
    useEffect(() => { if (data.interviewerData !== undefined) {setInterviewers(data.interviewerData.data.slice(0, 5));}}, [data])
      
    return (
        <>  <h2 className="title">Meet our Interviewers</h2>
            <Suspense fallback={<div>Loading</div>}>
            <section className="interviewer-list">
                {interviewers.length>0 ? interviewers.map((person, index) => (<InterviewerCard key={index} id={person.id} name={person.name} pic={person.image} designation={person.designation} company={person.company} />)):<p>Loading..</p>}
                </section>
            </Suspense>
        </>
    )
}