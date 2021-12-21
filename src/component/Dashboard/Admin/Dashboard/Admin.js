import React, {lazy} from 'react'
import { adminNavList } from "Constant/navList"
import { BrowserRouter as Switch,Router, Route } from "react-router-dom";
import { useRouteMatch} from "react-router-dom"
import { useSelector } from 'react-redux'
import "./Dashboard.css"
import { InterviewerProfile } from 'component/Dashboard/Interviewer/Profile/InterviewerProfile';
import { StudentProfile } from 'component/Dashboard/Student/Profile/StudentProfile';

const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const Dashboard = lazy(() => import("component/Dashboard/Admin/Dashboard/Dashboard"))
const InterviewerList = lazy(()=> import("component/Dashboard/Interviewer/List/InterviewerList"))
const StudentList = lazy(() => import("component/Dashboard/Student/List/StudentList"))

export default function Admin() {

    let { path, url } = useRouteMatch();
    const loginState = useSelector(state => state.authReducer);
    
    return (
        <>
            <Switch>
            <div className="dashboard">
             <Route path={`${path}`}>
                <section className="sideNav">
                    <SideNav sideNavList={adminNavList} userName="Admin"></SideNav>
                </section>
            </Route>
            <section className="mainContainer">
                <Route exact path={`${path}/dashboard`} component={Dashboard}  />
                <Route exact path={`${path}/interviewerList`} component={InterviewerList} />
                <Route exact path={`${path}/interviewerProfile/:profileId?`} component={InterviewerProfile} />
                <Route exact path={`${path}/studentList`} component={StudentList} />
                <Route exact path={`${path}/studentProfile/:profileId?`} component={StudentProfile} />
            </section>
            </div>
            </Switch> 
         </>
    )
}