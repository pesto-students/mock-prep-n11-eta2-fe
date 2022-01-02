import React, {lazy} from 'react'
import "./DashboardCards.css"
    
const DashboardCard = lazy(() => import("component/Common/Cards/DashboardCard/DashBoardCard"))

export default function DashboardCards({analytics}) {


    return (
        <div>
             <section className="admin-dashboard-cards">
                <DashboardCard key={1} className="int-dash-card2" description={"Total Interviews"} value={analytics.totalInterviews} icon={"fa fa-users"} />
                <DashboardCard key={2} className="int-dash-card2" description={"Ongoing Topics"} value={analytics.topicsOngoing} icon={"fa fa-book-open"}/>
                <DashboardCard key={3} className="int-dash-card2" description={"Interviews Rating"} value={analytics.interviewRating} icon={"fa fa-star"}/>
                <DashboardCard key={4} className="int-dash-card2" description={"Ranking"} value={analytics.ranking} icon={"fa fa-trophy"}/>
            </section>
        </div>
    )
}
