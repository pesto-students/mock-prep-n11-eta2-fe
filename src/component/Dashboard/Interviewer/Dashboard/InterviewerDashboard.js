import { BrowserRouter as Router, Switch } from 'react-router-dom'
// import { dashbordNames, interviewerNavList } from 'constant/sideNavList'


export default function InterviewerDashboard () {
    return(
    <div className="interviewerDashboard">
        <div className="main-component">
            <Router>
                {/* <SideNav sideNavList={interviewerNavList} userName={dashbordNames.interviewer} /> */}
                <Switch>
                    {/* <Route exact path="/interviewer/dashboard">
                        <Dashboard />
                    </Route> */}
                    {/* <Route exact path="/interviewer/profile">
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
                    </Route> */}
                </Switch>
            </Router>
        </div>
    </div>)
}