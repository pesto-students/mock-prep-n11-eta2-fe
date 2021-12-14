import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { dashbordNames, interviewerNavList } from '../../../../constant/sideNavList'
import Dashboard from '../../Admin/Dashboard'
import SideNav from '../../Common/SideNav/SideNav'
import { InterviewerProfile } from '../Profile/InterviewerProfile'
import CalendlyApp from './Dashboard Components/Calendly/Calendly'
import Earnings from './Dashboard Components/Earnings'


export default function InterviewerDashboard () {
    return(
    <div className="interviewerDashboard">
        <div className="main-component">
            <Router>
                <SideNav sideNavList={interviewerNavList} userName={dashbordNames.interviewer} />
                <Switch>
                    <Route exact path="/interviewer/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/interviewer/profile">
                        <InterviewerProfile />
                    </Route>
                    <Route exact path="/interviewer/earnings">
                        <Earnings />
                    </Route>
                    <Route exact path="/interviewer/calendar">
                        <CalendlyApp />
                    </Route>
                    <Route exact path="/interviewer/interviews">
                        <div>This is Interviews Page</div>
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>)
}