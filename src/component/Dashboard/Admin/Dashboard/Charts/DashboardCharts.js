import React, { lazy } from 'react'
import { earningChartOptions,resourceChartOptions } from 'constant/data'
import "./DashboardChart.css"

const DashboardChart = lazy(() => import("component/Common/Charts/Bar/BarChart"))
const DashboardPie = lazy(() => import("component/Common/Charts/Pie/PieChart"))

export default function DashboardCharts({data})  {
    return (
        <div>
             <section className="admin-dashboard-charts">
                <section id="earningChart"> 
                    <h2 className="chartHeader">Earnings for Year 2021</h2>
                    {data.earnings? <DashboardChart options={earningChartOptions} data={data.earnings} />:<p></p>}
                </section>
                <section id="round">
                <section id="resourceChart">
                    <h2 className="chartHeader">Earning % based on packages</h2>
                    {data.incomeResources? <DashboardPie options={earningChartOptions} data={data.incomeResources} />:<p></p>}
                </section>
                <section id="resourceChart">
                    <h2 className="chartHeader">Customer Queries</h2>
                    <p>No Data...</p>
                </section>
                </section>
            </section>
        </div>
    )
}
