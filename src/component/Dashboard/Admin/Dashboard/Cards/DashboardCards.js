import React, {lazy} from 'react'
import "./DashboardCards.css"
    
const DashboardCard = lazy(() => import("component/Common/Cards/DashboardCard/DashBoardCard"))

export default function DashboardCards({ data }) {

    return (
        <div>
             <section className="admin-dashboard-cards">
                {data.map((metric,index) => (
                    <DashboardCard {...metric} key={index} icon={metric.icon} />
                )) }
            </section>
        </div>
    )
}
