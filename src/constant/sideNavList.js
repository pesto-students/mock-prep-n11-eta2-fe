import { AccountBox, AttachMoney, DashboardOutlined, Event,School } from '@material-ui/icons';

export const interviewerNavList =[
    {
        id: 1,
        url:"/interviewer/dashboard",
        linkName: "Dashboard",
        icon: <DashboardOutlined/>
    },
    {
        id: 2,
        url:"/interviewer/profile",
        linkName: "Profile",
        icon: <AccountBox />
    },
    {
        id: 3,
        url:"/interviewer/earnings",
        linkName: "Earnings",
        icon: <AttachMoney />
    },
    {
        id: 4,
        url:"/interviewer/calendar",
        linkName: "Calendar",
        icon: <Event />
    },
    {
        id: 5,
        url:"/interviewer/interviews",
        linkName: "Interviews",
        icon: <School />
    },
]

export const dashbordNames = {
    admin : "Admin",
    interviewer : "Interviewer"
}