import React, {lazy,useState,useEffect} from 'react'
import { DashboardIcon } from 'constant/antIcons'
import { getAdminDashboard } from 'constant/apiUrl'
import dataActionCreators from 'Redux/Action Creators/dataActionCreators'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fallback } from 'constant/navList'
import dataActions from 'Redux/Actions/dataAction'
import "./Dashboard.css"


const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const DashBoardCard = lazy(() => import('component/Dashboard/Admin/Dashboard/Cards/DashboardCards'))
const DashboardCharts = lazy(() => import("component/Dashboard/Admin/Dashboard/Charts/DashboardCharts"))
const Feedback = lazy(() => import("component/Dashboard/Admin/Dashboard/Feedback/Feedback"))
const InterviewTable = lazy(() => import("component/Dashboard/Admin/Dashboard/InterviewTable/InterviewTable"))


export default function Dashboard() {

    let [adminDashboard,setAdminDashboard] = useState([])
    let data = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()

    useEffect(() => { dataActionCreators.getAdminData(dispatch, getAdminDashboard, dataActions.setAdminData) }, [dispatch])
    useEffect(() => { if (Object.keys(data.adminDashboard).length > 0) { setAdminDashboard(data.adminDashboard.data[0])}}, [data])
  
    return (
        <div>
             <DashboardHeader title="Admin Dashboard" icon={DashboardIcon} />
            {adminDashboard.length !== 0 ? <>
                   <DashBoardCard data={adminDashboard.cards} /> 
                    <DashboardCharts data={adminDashboard} />
                    {/* <Feedback data={adminDashboard} />   */}
                {/* <InterviewTable data={adminDashboard.tableDataSource} /> */}
            </> :
            <section>{fallback}</section>
            }
        </div>
    )
}