import { DashboardIcon, idCardIcon, smileIcon, DBIcon, resourceIcon, upcomingInter } from "constant/antIcons"
import { Spin } from "antd"



export const adminNavList = [
    {
        id: 1,
        url:"/admin/dashboard",
        linkName: "Dashboard",
        icon: DashboardIcon
    },  
    {
        id: 2,
        url:"/admin/interviewerList",
        linkName: "Interviewer List",
        icon: idCardIcon
    },
    {
        id: 3,
        url:"/admin/studentList",
        linkName: "Student List",
        icon: smileIcon
    },
    {
        id: 4,
        url:"/admin/topicsList",
        linkName: "Topics List",
        icon: DBIcon
    },
    {
        id: 5,
        url:"/admin/resourceList",
        linkName: "Resource List",
        icon: resourceIcon
    },
    {
        id: 6,
        url:"/admin/quizList",
        linkName: "Quiz List",
        icon: resourceIcon
    }
    
]

export const interviewerNavList = [
    {
        id: 1,
        url:"/interviewer/dashboard",
        linkName: "Dashboard",
        icon: DashboardIcon
    },
    {
        id: 2,
        url:"/interviewer/interviewerProfile",
        linkName: "My Profile",
        icon: idCardIcon
    },
    {
        id: 3,
        url:"/interviewer/upcomingInterviews",
        linkName: "Upcoming Interviews",
        icon: upcomingInter
    },
    {
        id: 4,
        url:"/interviewer/studentList",
        linkName: "Student List",
        icon: smileIcon
    },
    {
        id: 5,
        url:"/interviewer/topicsList",
        linkName: "Topics List",
        icon: DBIcon
    },
    {
        id: 6,
        url:"/interviewer/resourceList",
        linkName: "Resource List",
        icon: resourceIcon
    },
]

export const studentNavList = [
    {
        id: 1,
        url:"/student/dashboard",
        linkName: "Dashboard",
        icon: DashboardIcon
    },  
    {
        id: 2,
        url:"/student/studentProfile/",
        linkName: "My Profile",
        icon: smileIcon
    },
    {
        id: 3,
        url:"/student/interviewerList",
        linkName: "Book Interview",
        icon: idCardIcon
    },
    {
        id: 4,
        url:"/student/topicsList",
        linkName: "View Topics",
        icon: DBIcon
    },
    {
        id: 5,
        url:"/student/resourceList",
        linkName: "Study Resource",
        icon: resourceIcon
    },
    {
        id: 6,
        url:"/student/quizList",
        linkName: "Take Quiz",
        icon: resourceIcon
    }
]


export const studentFilter = [
    {id: 1, value: "Javascript" },
    {id:2,value:"HTML"},
    {id:3,value:"Bootstrap"},
    {id:4,value:"React"},
    {id:5,value:"Mongo"},
]

export const interviewerFilter = [
    {id: 1, value: "Javascript" },
    {id:2,value:"HTML"},
    {id:3,value:"Bootstrap"},
    {id:4,value:"React"},
    {id:5,value:"Mongo"},
]

export const topicsFilter = [
    {
        id: 1,
        value: "Git Basics"
    },
    {
        id: 2,
        value: "Html Basics"
    }
]

export const fallback = <div id="loader" style={{ margin: "40vh auto", width: "40vw", display: "flex" }}><span id="spin"><Spin size="large"></Spin>Loading...</span></div>
