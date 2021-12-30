
import React, { lazy,useState,useEffect } from 'react'
import { DashboardIcon } from 'constant/antIcons'
import { useDispatch, useSelector } from 'react-redux'
import "./Dashboard.css"
import { getInterviewerById, getInterviews } from 'constant/apiUrl'
import dataActions from 'Redux/Actions/dataAction'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const Interviews = lazy(() => import('component/Dashboard/Interviewer/Dashboard/Interviews/Interviews'))
const DashboardCards = lazy(() => import('component/Dashboard/Interviewer/Dashboard/Cards/DashboardCards'))
const Earnings = lazy(() => import("component/Dashboard/Interviewer/Dashboard/Earning/Earnings"))
const Feedback = lazy(() => import("component/Dashboard/Interviewer/Dashboard/Feedback/Feedback"))



export default function InterviewerDashboard() {
    

    const dispatch = useDispatch()
    let auth = useSelector(state => state.authReducer)
    let data = useSelector(state => state.dataReducer)
    let [interviewer, setInterviewer] = useState([])
    let [interviews,setInterviews] = useState([])
    
    useEffect(() => {
        if (auth.user) { 
            dataActionCreator.getAdminData(dispatch, getInterviewerById + auth.user.id, dataActions.setInterviewer)
            dataActionCreator.getAdminData(dispatch, getInterviews, dataActions.setInterviews)
            setInterviews(interviews.filter(e => e.interviewer.id === interviewer._id))
            
        }
    }, [dispatch,auth,interviews,interviewer])

    useEffect(() => {
        if (data && data.interviewer) { setInterviewer(data.interviewer.data) }
        if (data && data.interviews) { setInterviews(data.interviews.data)}
    }, [dispatch,data])

    console.log(interviews)
  
    return (
        <div className="interviewerDashboard">
                <DashboardHeader title="Interviewer Dashboard" icon={DashboardIcon} />
                <DashboardCards data={interviewer.analytics}/>
                <Interviews interviews={interviews } />
                <Earnings analytics={interviewer.analytics} />
                <Feedback stats={interviewer} />
            </div> 
    )
}
