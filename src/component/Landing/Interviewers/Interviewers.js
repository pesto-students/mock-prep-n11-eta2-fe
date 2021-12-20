import React, { lazy, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getInterviewers } from 'Constant/apiUrl'
import { getData } from 'api/Api'
import { dataActionCreator } from 'Redux/Action Creators/dataActionCreators'
import "./Interviewers.css"
import { getInterviewers } from 'constant/apiUrl'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import { useDispatch, useSelector } from 'react-redux'
import dataActions from 'Redux/Actions/dataAction'


const InterviewerCard = lazy(() => import("component/Common/Cards/Interviewer/InterviewerCard"))

export default function Interviewers() {

    let [interviewers,setInterviewers] = useState([])
    let interviewerData = useSelector(state => state.dataReducer.interviewerData);
    const dispatch = useDispatch()
    useEffect(() => { 
        dataActionCreator.getAdminData(dispatch,getInterviewers,dataActions.setInterviewer)
    },[])

    useEffect(() => {
        if(interviewerData) setInterviewers(interviewerData)
    },[interviewerData])

    return (
        <section className="interviewer-list">
                {interviewers.length>0 ? interviewers.map((person, index) => (<InterviewerCard key={index} id={person.id} name={person.name} pic={person.image} designation={person.designation} company={person.company} />)):<p>Loading..</p>}
        </section>
    )
}