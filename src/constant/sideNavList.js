import { CalendarOutlined, ConsoleSqlOutlined, DashboardOutlined, DollarOutlined, ProfileOutlined } from "@ant-design/icons"


export const interviewerNavList =[
    {
        id: 1,
        url:"/interviewer/dashboard",
        linkName: "Dashboard",
        icon: <DashboardOutlined />
    },
    {
        id: 2,
        url:"/interviewer/profile",
        linkName: "Profile",
        icon: <ProfileOutlined />
    },
    {
        id: 3,
        url:"/interviewer/earnings",
        linkName: "Earnings",
        icon: <DollarOutlined />
    },
    {
        id: 4,
        url:"/interviewer/calendar",
        linkName: "Calendar",
        icon: <CalendarOutlined />
    },
    {
        id: 5,
        url:"/interviewer/interviews",
        linkName: "Interviews",
        icon: <ConsoleSqlOutlined />
    },
]


export const dashbordNames = {
    admin : "Admin",
    interviewer : "Interviewer"
}