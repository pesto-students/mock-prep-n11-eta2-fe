import React, {lazy} from 'react'
import "./DashboardCards.css"
    
const DashboardCard = lazy(() => import("component/Common/Cards/DashboardCard/DashBoardCard"))

export default function DashboardCards({ data }) {


    return (
        <div>
             <section className="admin-dashboard-cards">
                {data.map((metric,index) => (
                    <DashboardCard key={index} id={metric.id} description={metric.description} value={metric.value} icon={<i className={metric.icon}></i>} />
                )) }
            </section>
        </div>
    )
}
