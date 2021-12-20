import SideNav from 'component/Dashboard/Common/SideNav/SideNav'
import { dashbordNames, interviewerNavList } from '../../../../Constant/sideNavList'



export default function InterviewerDashboard () {
    return(
    <div className="interviewerDashboard">
        <div className="main-component">
            <SideNav sideNavList={interviewerNavList} userName={dashbordNames.interviewer} />
        </div>
    </div>)
}