import React, {lazy} from 'react'
import { adminNavList } from "constant/navList"
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useRouteMatch} from "react-router-dom"
import { InterviewerProfile } from 'component/Dashboard/Interviewer/Profile/InterviewerProfile';
import { StudentProfile } from 'component/Dashboard/Student/Profile/StudentProfile';
import "./Dashboard.css"

const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const Dashboard = lazy(() => import("component/Dashboard/Admin/Dashboard/Dashboard"))
const InterviewerList = lazy(()=> import("component/Dashboard/Interviewer/List/InterviewerList"))
const StudentList = lazy(() => import("component/Dashboard/Student/List/StudentList"))
const TopicsList = lazy(() => import("component/Dashboard/Common/Topics/List/TopicsList"))
const ResourceList = lazy(() => import("component/Dashboard/Common/Resource/ResouceList"))
const QuizList = lazy(() => import("component/Dashboard/Common/Quiz/Quiz"))

export default function Admin() {

    let { path } = useRouteMatch();

    return (
        <>
            <Switch>
            <div className="dashboard">
                <Route path={`${path}`}>
                        <section className="sideNav">
                                    <SideNav sideNavList={adminNavList} userName={"Admin"}></SideNav>
                        </section>
                        <section className="mainContainer">
                        <Route  path={`${path}/dashboard`} component={Dashboard} />
                        <Route  path={`${path}/interviewerList`} component={InterviewerList} />
                        <Route  path={`${path}/interviewerProfile/:profileId?`} component={InterviewerProfile} />
                        <Route  path={`${path}/studentList`} component={StudentList} />
                        <Route  path={`${path}/studentProfile/:profileId?`} component={StudentProfile} />
                        <Route  path={`${path}/topicsList`} component={TopicsList} />
                        <Route  path={`${path}/resourceList/:topicId?`} component={ResourceList} />
                        <Route  path={`${path}/quizList/:topicId?`} component={QuizList} />
                        </section>
                </Route>
            </div>
            </Switch>            
         </>
    )
}