import React, { lazy} from 'react'
import { interviewOptions } from 'Constant/data'
import "./Chart.css"
const DashboardChart = lazy(() => import("component/Common/Charts/Pie/PieChart"))

export const PreviousInterviewChart = () => {


    const incomeResources= {
        labels: [
            "Interviews Completed",
            "Pending",
            "Cancelled"
        ],
        datasets: [
            {
                label: "Income breakdown package wise",
                data: [
                    60,
                    22,
                    18
                ],
                borderColor: "lightgrey",
                backgroundColor: [
                    "teal",
                    "skyblue",
                    "orange"
                ],
                
            }
        ]
    }

    return (
        <div>
             <section id="previous-interview-chart"> 
                    <h2 className="title">Previous Interview Stats</h2>
                    <DashboardChart id="interviewStats" options={interviewOptions} data={incomeResources} />
            </section>
        </div>
    )
}
