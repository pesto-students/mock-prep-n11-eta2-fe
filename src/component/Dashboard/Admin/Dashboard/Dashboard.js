import React, {lazy,useState,useEffect} from 'react'
import { DashboardIcon } from 'constant/antIcons'
import { adminNavList, fallback } from "constant/navList"

import "./Dashboard.css"
import { getData } from 'api/Fetch'
import { getAdminDashboard } from 'constant/apiUrl'
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const DashBoardCard = lazy(() => import('component/Dashboard/Admin/Dashboard/Cards/DashboardCards'))
const DashboardCharts = lazy(() => import("component/Dashboard/Admin/Dashboard/Charts/DashboardCharts"))
const Feedback = lazy(() => import("component/Dashboard/Admin/Dashboard/Feedback/Feedback"))
const InterviewTable = lazy(() => import("component/Dashboard/Admin/Dashboard/InterviewTable/InterviewTable"))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))

export default function Dashboard() {

    
    let [adminDashboard,setAdminDashboard] = useState([])

    useEffect(() => { 
        const getAdminDash = async () => { 
            const adminDash = await getData(getAdminDashboard);
            if (adminDash) setAdminDashboard(adminDash[0])
           
        }
        getAdminDash()
    },[])

    return (
        <div className="dashboard">
            <SideNav sideNavList={adminNavList} userName="Admin"></SideNav>
            <DashboardHeader title="Admin Dashboard" icon={DashboardIcon} />
            {adminDashboard.length !== 0 ?<>
                <DashBoardCard data={adminDashboard.cards} />
                <DashboardCharts data={adminDashboard} />
                <Feedback data={adminDashboard} /> 
                <InterviewTable data={adminDashboard.tableDataSource} />
                </>
            : <section>{fallback}</section>}
        </div>
    )
}