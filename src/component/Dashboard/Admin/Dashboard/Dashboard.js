import React, {lazy} from 'react'
import "./Dashboard.css"
import { DashboardIcon } from 'constant/antIcons'

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const DashBoardCard = lazy(() => import('component/Dashboard/Admin/Dashboard/Cards/DashboardCards'))
const DashboardCharts = lazy(() => import("component/Dashboard/Admin/Dashboard/Charts/DashboardCharts"))
const Feedback = lazy(() => import("component/Dashboard/Admin/Dashboard/Feedback/Feedback"))
const InterviewTable = lazy(() => import("component/Dashboard/Admin/Dashboard/InterviewTable/InterviewTable"))

export default function Dashboard() {
    return (
        <div className="dashboard">
            <DashboardHeader title="Admin Dashboard" icon={DashboardIcon} />
            <DashBoardCard />
            <DashboardCharts />
            <Feedback />
            <InterviewTable/>
        </div>
    )
}