import React, {lazy,useEffect} from 'react'
import { interviewerNavList } from "constant/navList"
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useRouteMatch} from "react-router-dom"
import { StudentProfile } from '../Student/Profile/StudentProfile';
import { InterviewerProfile } from './Profile/InterviewerProfile';
import { useSelector } from 'react-redux';
import "./Interviewer.css"

const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const Dashboad = lazy(() => import("component/Dashboard/Interviewer/Dashboard/Dashboard"))
const Interviews = lazy(() => import("component/Dashboard/Interviewer/Interviews/Interviews"))
const StudentList = lazy(() => import("component/Dashboard/Student/List/StudentList"))
const TopicsList = lazy(() => import("component/Dashboard/Common/Topics/List/TopicsList"))
const ResourceList = lazy(() => import("component/Dashboard/Common/Resource/ResouceList"))

export default function Interviewer() {

    let { path } = useRouteMatch();
    let userId = useSelector(state => state.authReducer.user.id)

    useEffect(() => {
        interviewerNavList[1].url = "/interviewer/interviewerProfile/"+userId
    }, [userId])

    return (
        <>
            <Switch>
            <div className="dashboard">
                <Route path={`${path}`}>
                        <section className="sideNav">
                                    <SideNav sideNavList={interviewerNavList} userName={"Interviewer"}></SideNav>
                        </section>
                        <section className="mainContainer">
                            <Route  path={`${path}/dashboard`} component={Dashboad} />
                            <Route  path={`${path}/upcomingInterviews`} component={Interviews} />
                            <Route  path={`${path}/studentList`} component={StudentList} />
                            <Route  path={`${path}/studentProfile/:profileId?`} component={StudentProfile} />
                            <Route  path={`${path}/interviewerProfile/:profileId?`} component={InterviewerProfile} />
                            <Route  path={`${path}/topicsList/`} component={TopicsList} />
                            <Route  path={`${path}/resourceList`} component={ResourceList} />
                        </section>
                </Route>
            </div>
            </Switch>           
         </>
    )
}