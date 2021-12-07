import React from 'react'
import SideNav from '../Common/SideNav/SideNav'
import { DashboardOutlined, PersonAdd, LocalLibrary, Feedback, QuestionAnswer, SubjectOutlined, BarChartOutlined } from '@material-ui/icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
import InterviewerList from '../Interviewer/List/InterviewerList';
import { InterviewerProfile } from '../Interviewer/Profile/InterviewerProfile';
import StudentList from '../Student/List/StudentList';
import { StudentProfile } from '../Student/Profile/StudentProfile';
import Resource from '../Common/Resource/Resource';
import Quiz from "../Common/Quiz/Quiz"


export default function AdminDashboard() {
    
    let adminNavList = [
        {
            id: 1,
            url:"/admin/dashboard",
            linkName: "Dashboard",
            icon: <DashboardOutlined/>
        },
        {
            id: 2,
            url:"/admin/interviewerList",
            linkName: "Interviewer List",
            icon: <PersonAdd/>
        },
        {
            id: 3,
            url:"/admin/studentList",
            linkName: "Student List",
            icon: <LocalLibrary/>
        },
        {
            id: 4,
            url:"/admin/resource-list",
            linkName: "Resources",
            icon: <Feedback/>
        },
        {
            id: 5,
            url:"/admin/quiz-list",
            linkName: "Quiz",
            icon: <QuestionAnswer/>
        },
        {
            id: 6,
            url:"/admin/topics-list",
            linkName: "Topics",
            icon: <SubjectOutlined/>
        },
        {
            id: 7,
            url:"/admin/topics-list",
            linkName: "Analytics",
            icon: <BarChartOutlined/>
        },
        
    ]

    return(
        <div className="adminDashboard">
                 <div className="main-component">
                <Router>
                    <SideNav sideNavList={adminNavList} userName="admin"></SideNav>
                <Switch>
                    <Route exact path="/admin/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/admin/interviewerList">
                        <InterviewerList />
                    </Route>
                    <Route exact path="/admin/interviewerProfile">
                        <InterviewerProfile />
                    </Route>
                    <Route exact path="/admin/StudentList">
                        <StudentList />
                    </Route>
                    <Route exact path="/admin/StudentProfile">
                        <StudentProfile />
                    </Route>
                    <Route exact path="/admin/resource-list">
                        <Resource />
                    </Route>
                    <Route exact path="/admin/quiz-list">
                        <Quiz />
                    </Route>
                </Switch>
                </Router>
            </div>
        </div>
    )
} 
