import React, {lazy,useEffect} from 'react'
import { studentNavList } from "constant/navList"
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useRouteMatch} from "react-router-dom"
import { useSelector } from 'react-redux';
import "./Student.css"
import { StudentProfile } from 'component/Dashboard/Student/Profile/StudentProfile';
import { InterviewerProfile } from '../Interviewer/Profile/InterviewerProfile';
import QuizContent from 'component/Dashboard/Common/Quiz/QuizContent/QuizContent';

const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const Dashboard = lazy(() =>import("component/Dashboard/Student/dashboard/dashboard"))
const InterviewerList = lazy(() => import("component/Dashboard/Interviewer/List/InterviewerList"))
const TopicList = lazy(() => import("component/Dashboard/Common/Topics/List/TopicsList"))
const ResourceList = lazy(() => import("component/Dashboard/Common/Resource/ResouceList"))
const QuizList = lazy(() => import("component/Dashboard/Common/Quiz/Quiz"))
const InterviewsList = lazy(()=> import("component/Dashboard/Student/Upcoming Interviews/Interviews"))
const BookInterviewer = lazy(() => import("component/Dashboard/Student/Calendly/Calendly"))


export default function Student() {

    let { path } = useRouteMatch();
    let userId = useSelector(state => state.authReducer.user.id)

    useEffect(() => {
        studentNavList[1].url = "/student/studentProfile/"+userId
    }, [userId])

    return (
        <>
            <Switch>
            <div className="dashboard">
                <Route path={`${path}`}>
                        <section className="sideNav">
                            <SideNav sideNavList={studentNavList} userName={"Student"}></SideNav>
                        </section>
                        <section className="mainContainer">
                            <Route path={`${path}/dashboard`} component={Dashboard} />
                            <Route path={`${path}/studentProfile/:profileId?`} component={StudentProfile} />
                            <Route path={`${path}/interviewerList`} component={InterviewerList} />
                            <Route path={`${path}/interviewerProfile/:profileId`} component={InterviewerProfile} />
                            <Route path={`${path}/topicsList/`} component={TopicList} />
                            <Route path={`${path}/resourceList/:topicId?`} component={ResourceList} />
                            <Route path={`${path}/quizList/:topicId?`} component={QuizList} />
                            <Route path={`${path}/quizContent/:quizId?`} component={QuizContent} />
                            <Route path={`${path}/interviews`} component={InterviewsList} />
                            <Route  path={`${path}/bookInterviewer/:interviewerId?`} component={BookInterviewer} />
                    </section>
                </Route>
            </div>
            </Switch>            
         </>
    )
}