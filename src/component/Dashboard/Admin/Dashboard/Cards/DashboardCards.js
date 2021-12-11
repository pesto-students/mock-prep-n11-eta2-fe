import React, {lazy} from 'react'
import { adminDashboardMetrics } from 'constant/data'
import "./DashboardCards.css"
    
const DashboardCard = lazy(() => import("component/Common/Cards/DashboardCard/DashBoardCard"))

export default function DashboardCards() {
    return (
        <div>
             <section className="admin-dashboard-cards">
                {adminDashboardMetrics.map((metric,index) => (
                    <DashboardCard key={index} id={metric.id} description={metric.description} value={metric.value} icon={ metric.icon} />
                )) }
            </section>
        </div>
    )
}
