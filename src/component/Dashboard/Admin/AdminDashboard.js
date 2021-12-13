import React, { lazy} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { adminNavList} from "constant/navList"
import "./AdminDashboard.css"

const Dashboard = lazy(() => import("component/Dashboard/Admin/Dashboard/Dashboard"))
const InterviewerList = lazy(() => import("component/Dashboard/Interviewer/List/InterviewerList"))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))

export default function AdminDashboard() {

    return(
        <div className="adminDashboard">
                 <div className="main-component">
                <Router>
                    <SideNav sideNavList={adminNavList} userName="Admin" />
                    <Switch>
                        <Route exact path="/admin" component={Dashboard} />
                        <Route exact path="/admin/interviewerList" component={InterviewerList} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
} 