import React, {lazy} from 'react'
import "./DashboardCards.css"
    
const DashboardCard = lazy(() => import("component/Common/Cards/DashboardCard/DashBoardCard"))

export default function DashboardCards() {

    const data =[
        {
            "description": "Total Interviews",
            "value": 120,
            "icon": "fa fa-laptop",
            "_id": "61c381bd61769ed09217557a"
        },

        {
            "description": "Total Earnings",
            "value": 127493,
            "icon": "fa fa-rupee",
            "_id": "61c381bd61769ed09217557c"
        },
        {
            "description": "Total Students Mentored",
            "value": 21,
            "icon": "fa fa-user",
            "_id": "61c381bd61769ed09217557d"
        },
        {
            "description": "Number of days on mockprep",
            "value": 140,
            "icon": "fa fa-circle",
            "_id": "61c381bd61769ed09217557d"
        }
    ]

    return (
        <div>
             <section className="admin-dashboard-cards">
                {data.map((metric,index) => (
                    <DashboardCard key={index} id="int-dash-card"  id={metric.id} description={metric.description} value={metric.value} icon={<i className={metric.icon}></i>} />
                )) }
            </section>
        </div>
    )
}
