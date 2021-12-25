import React, { lazy } from 'react'
import { earningChartOptions,resourceChartOptions } from 'constant/data'
import "./DashboardChart.css"

const DashboardChart = lazy(() => import("component/Common/Charts/Bar/BarChart"))
const DashboardPie = lazy(() => import("component/Common/Charts/Pie/PieChart"))

export default function DashboardCharts({data})  {
    return (
        <div>
             <section className="admin-dashboard-charts">
                <section className="earning-chart"> 
                    <h2 className="headline">Earnings for Year 2021</h2>
                    {data.earnings? <DashboardChart options={earningChartOptions} data={data.earnings} />:<p></p>}
                </section>
                <section className="resourceChart">
                    <h2 className="headline">Earning % based on packages</h2>
                    {data.incomeResources? <DashboardPie options={resourceChartOptions} data={data.incomeResources} />:<p></p>}
                </section>
            </section>
        </div>
    )
}
