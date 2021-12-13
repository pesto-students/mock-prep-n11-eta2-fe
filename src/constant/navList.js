import { PersonAdd, LocalLibrary, Feedback, QuestionAnswer, SubjectOutlined, BarChartOutlined } from '@material-ui/icons';

import { DashboardIcon ,idCardIcon} from "constant/antIcons"

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
        icon: idCardIcon
    }
    // {
    //     id: 3,
    //     url:"/admin/studentList",
    //     linkName: "Student List",
    //     icon: <LocalLibrary/>
    // },
    // {
    //     id: 4,
    //     url:"/admin/resource-list",
    //     linkName: "Resources",
    //     icon: <Feedback/>
    // },
    // {
    //     id: 5,
    //     url:"/admin/quiz-list",
    //     linkName: "Quiz",
    //     icon: <QuestionAnswer/>
    // },
    // {
    //     id: 6,
    //     url:"/admin/topics-list",
    //     linkName: "Topics",
    //     icon: <SubjectOutlined/>
    // },
    // {
    //     id: 7,
    //     url:"/admin/topics-list",
    //     linkName: "Analytics",
    //     icon: <BarChartOutlined/>
    // },
    
]

export const interviewerFilter = [
    {id: 1, value: "Javascript" },
    {id:2,value:"HTML"},
    {id:3,value:"Bootstrap"},
    {id:4,value:"React"},
    {id:5,value:"Mongo"},
]

export const studentFilter = [
    {id: 1, value: "Javascript" },
    {id:2,value:"HTML"},
    {id:3,value:"Bootstrap"},
    {id:4,value:"React"},
    {id:5,value:"Mongo"},
]
