import React, {lazy} from 'react'
import "./DashboardCards.css"
    
const DashboardCard = lazy(() => import("component/Common/Cards/DashboardCard/DashBoardCard"))

export default function DashboardCards() {

    const data =[
        {
            "description": "Total Mock Interviews",
            "value": 10,
            "icon": "fa fa-laptop",
            "_id": "61c381bd61769ed09217557a"
        },

        {
            "description": "Topics Learning",
            "value": 3,
            "icon": "fa fa-book-open",
            "_id": "61c381bd61769ed09217557c"
        },
        {
            "description": "Interviewer Rating",
            "value": 7.8,
            "icon": "fa fa-star",
            "_id": "61c381bd61769ed09217557d"
        },
        {
            "description": "Mockprep Ranking (Current Month)",
            "value": "8th",
            "icon": "fa fa-trophy",
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
