import React, { lazy } from 'react'
import { earningChartData,earningChartOptions,resourceChartData,resourceChartOptions } from 'constant/data'
import "./DashboardChart.css"

const DashboardChart = lazy(() => import("component/Common/Charts/Bar/BarChart"))
const DashboardPie = lazy(() => import("component/Common/Charts/Pie/PieChart"))

export default function DashboardCharts ()  {
    return (
        <div>
             <section className="admin-dashboard-charts">
                <section className="earning-chart"> 
                    <h2 className="headline">Earnings for Year 2021</h2>
                    <DashboardChart options={earningChartOptions} data={earningChartData} />
                </section>
                <section className="resourceChart">
                    <h2 className="headline">Earning % based on topics</h2>
                    <DashboardPie options={resourceChartOptions} data={resourceChartData} />
                </section>
            </section>
        </div>
    )
}
