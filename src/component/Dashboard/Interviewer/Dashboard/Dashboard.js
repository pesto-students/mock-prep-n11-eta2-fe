
import React, { lazy } from 'react'
import { DashboardIcon } from 'constant/antIcons'
import "./Dashboard.css"

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const Interviews = lazy(() => import('component/Dashboard/Student/dashboard/Upcoming Interviews/Interviews'))
const DashboardCards = lazy(() => import('component/Dashboard/Interviewer/Dashboard/Cards/DashboardCards'))
const Earnings = lazy(() => import("component/Dashboard/Interviewer/Dashboard/Earning/Earnings"))
const Feedback = lazy(() => import("component/Dashboard/Interviewer/Dashboard/Feedback/Feedback"))

export default function InterviewerDashboard ()  {
    return (
        <div>
            <DashboardHeader title="Interviewer Dashboard" icon={DashboardIcon} />
            <DashboardCards/>
            <Interviews />
            <Earnings />
            <Feedback  />
        </div>
    )
}
