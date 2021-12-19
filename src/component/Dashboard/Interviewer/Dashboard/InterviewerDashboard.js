import SideNav from 'component/Dashboard/Common/SideNav/SideNav'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
 import { dashbordNames, interviewerNavList } from '../../../../constant/sideNavList'
import { InterviewerProfile } from '../Profile/InterviewerProfile'
import CalendlyApp from './Dashboard Components/Calendly/Calendly'
import Earnings from './Dashboard Components/Earnings'


export default function InterviewerDashboard () {
    return(
    <div className="interviewerDashboard">
        <div className="main-component">
            <SideNav sideNavList={interviewerNavList} userName={dashbordNames.interviewer} />
        </div>
    </div>)
}