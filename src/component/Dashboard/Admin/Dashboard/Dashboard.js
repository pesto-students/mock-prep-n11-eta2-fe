import React, {lazy} from 'react'
import { DashboardIcon } from 'constant/antIcons'
import { adminNavList } from "constant/navList"

import "./Dashboard.css"
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const DashBoardCard = lazy(() => import('component/Dashboard/Admin/Dashboard/Cards/DashboardCards'))
const DashboardCharts = lazy(() => import("component/Dashboard/Admin/Dashboard/Charts/DashboardCharts"))
const Feedback = lazy(() => import("component/Dashboard/Admin/Dashboard/Feedback/Feedback"))
const InterviewTable = lazy(() => import("component/Dashboard/Admin/Dashboard/InterviewTable/InterviewTable"))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))

export default function Dashboard() {
    return (
        <div className="dashboard">
            <SideNav sideNavList={adminNavList} userName="Admin"></SideNav>
            <DashboardHeader title="Admin Dashboard" icon={DashboardIcon} />
            <DashBoardCard />
            <DashboardCharts />
            <Feedback />
            <InterviewTable/>
        </div>
    )
}