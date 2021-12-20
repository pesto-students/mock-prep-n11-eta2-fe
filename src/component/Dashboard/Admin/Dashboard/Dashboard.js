import React, {lazy,useState,useEffect} from 'react'
import { DashboardIcon } from 'constant/antIcons'
import { adminNavList, fallback } from "constant/navList"

import "./Dashboard.css"
import { getAdminDashboard } from 'constant/apiUrl'
import dataActionCreators from 'Redux/Action Creators/dataActionCreators'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import dataActions from 'Redux/Actions/dataAction'

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const DashBoardCard = lazy(() => import('component/Dashboard/Admin/Dashboard/Cards/DashboardCards'))
const DashboardCharts = lazy(() => import("component/Dashboard/Admin/Dashboard/Charts/DashboardCharts"))
const Feedback = lazy(() => import("component/Dashboard/Admin/Dashboard/Feedback/Feedback"))
const InterviewTable = lazy(() => import("component/Dashboard/Admin/Dashboard/InterviewTable/InterviewTable"))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))

export default function Dashboard() {

    
    let [adminDashboard,setAdminDashboard] = useState([])
    let adminData = useSelector(state => state.dataReducer)

    const dispatch = useDispatch()
    useEffect(() => { 
        dataActionCreators.getAdminData(dispatch,getAdminDashboard,dataActions.setAdminData)
    },[])

    useEffect(() => { 
        if(adminData.adminDashboard && adminData.adminDashboard.length){
            setAdminDashboard(adminData.adminDashboard[0]);
        }
    },[adminData])

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
                : <section>{fallback}</section>
            }
        </div>
    )
}