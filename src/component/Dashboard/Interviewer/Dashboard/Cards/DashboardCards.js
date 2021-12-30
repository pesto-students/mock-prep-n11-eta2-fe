
import React, {lazy,Suspense} from 'react'
import "./DashboardCards.css"
    
const DashboardCard = lazy(() => import("component/Common/Cards/DashboardCard/DashBoardCard"))

export default function DashboardCards({ data }) {

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                { data ? 
                <section className="admin-dashboard-cards">
                            <DashboardCard key={1} id="int-dash-card" icon={"fa fa-users"}  value={data.totalInterviews} description={"Interviews Taken"} />
                            <DashboardCard key={2} id="int-dash-card" icon={"fa fa-rupee"}  value={data.totalEarnings} description={"Total Earnings"} />
                            <DashboardCard key={3} id="int-dash-card" icon={"fa fa-smile"}  value={data.totalStudentsMentored} description={"Students Mentored"} />
                            <DashboardCard key={4} id="int-dash-card" icon={"fa fa-clock-o"} value={data.noOfDays} description={"Days with Mockprep"} />
                    </section>:
                <></>}
            </Suspense >
        </div>
    )
}
