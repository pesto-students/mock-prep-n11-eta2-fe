import { PersonAdd, LocalLibrary, Feedback, QuestionAnswer, SubjectOutlined, BarChartOutlined } from '@material-ui/icons';

import { DashboardIcon } from "constant/antIcons"

export const adminNavList = [
    {
        id: 1,
        url:"/admin",
        linkName: "Dashboard",
        icon: DashboardIcon
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