import { DashboardIcon,idCardIcon, smileIcon} from "constant/antIcons"

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
    }
    
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
