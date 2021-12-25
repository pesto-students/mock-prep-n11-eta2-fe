
import React, { lazy } from 'react'
import { DashboardIcon } from 'constant/antIcons'
import "./dashboard.css"
import { LeaderBoard } from './LeaderBoard/LeaderBoard'

const DashboardHeader = lazy(() => import("component/Dashboard/Common/Header/DashboardHeader"))
const DashboardCards = lazy(() => import("component/Dashboard/Student/dashboard/Cards/DashboardCards"))
const Interviews = lazy(() => import("component/Dashboard/Student/dashboard/Upcoming Interviews/Interviews"))
const TopicsStudying = lazy(() => import("component/Dashboard/Student/dashboard/TopicsStudying/Topics"))

export default function InterviewerDashboard ()  {
    return (
        <div>
            <DashboardHeader title="Student Dashboard" icon={DashboardIcon} />
            <DashboardCards />
            <Interviews />
            <LeaderBoard />
            <TopicsStudying />
        </div>
    )
}
