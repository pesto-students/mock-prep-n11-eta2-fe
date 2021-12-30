
import React, { useState,useEffect,lazy } from 'react'
import { DashboardIcon } from 'constant/antIcons'
import "./dashboard.css"
import { LeaderBoard } from './LeaderBoard/LeaderBoard'
import { useDispatch,useSelector } from 'react-redux'
import { getInterviews, getStudentById, getStudents } from 'constant/apiUrl'
import dataActionCreator from "Redux/Action Creators/dataActionCreators"
import dataActions from "Redux/Actions/dataAction"


const DashboardHeader = lazy(() => import("component/Dashboard/Common/Header/DashboardHeader"))
const DashboardCards = lazy(() => import("component/Dashboard/Student/dashboard/Cards/DashboardCards"))
const Interviews = lazy(() => import("component/Dashboard/Student/dashboard/Upcoming Interviews/Interviews"))
const TopicsStudying = lazy(() => import("component/Dashboard/Student/dashboard/TopicsStudying/Topics"))


export default function InterviewerDashboard() {
    
    const dispatch = useDispatch()
    let auth = useSelector(state => state.authReducer)
    let data = useSelector(state => state.dataReducer)
    let [student, setStudent] = useState([])
    let [students, setStudents] = useState([])
    let [interviews, setInterviews] = useState([])
   
    useEffect(() => {
        if (auth.user) { 
            dataActionCreator.getAdminData(dispatch, getStudentById + auth.user.id, dataActions.setStudent)
            dataActionCreator.getAdminData(dispatch, getInterviews, dataActions.setInterviews)
            dataActionCreator.getAdminData(dispatch, getStudents, dataActions.setStudentList)
        
        }
    }, [dispatch])

    useEffect(() => {
        if (data && data.student) { setStudent(data.student.data) }
        if (data && data.interviews) { setInterviews(data.interviews.data) }
        if (data && data.studentList) { setStudents(data.studentList.data) }

    }, [data])

    interviews = interviews.filter(i => i.status !== "completed")
    console.log(data)
    return (
        <div>
            <DashboardHeader title="Student Dashboard" icon={DashboardIcon} />
            {student && student.analytics && interviews && interviews.length>0?
            <>
                <DashboardCards analytics={student.analytics} />
                    <Interviews student={student} interviews={interviews} />
                    <LeaderBoard interviews={interviews} student={students} />
                    <TopicsStudying student={student}/>
            </>
            :<></>}
        </div>
    )
}
