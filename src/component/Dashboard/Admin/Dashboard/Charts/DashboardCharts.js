import React, { lazy,Suspense } from 'react'
import { earningChartOptions } from 'constant/data'
import { Tag } from "antd"
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import "./DashboardChart.css"
import { messageIcon, upcomingInter } from 'constant/antIcons'


const DashboardChart = lazy(() => import("component/Common/Charts/Bar/BarChart"))
const DashboardPie = lazy(() => import("component/Common/Charts/Pie/PieChart"))

export default function DashboardCharts({ data,query }) {
    

    const auth = useSelector(state => state.dataReducer)

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

                        <Suspense fallback={<div>Loading</div>}>
                            {query && query.length > 0 ?
                            <>{query.map((q, index) => 
                                (
                                <section key={index}>
                                    <p id="queryContainer" >
                                        {q.title}-<br />
                                        {q.name}
                                        <Link to="/admin/queries">{messageIcon}</Link></p>
                                </section>
                                )
                                )}
                            </>:<p>No Data</p>
                            }
                        </Suspense>
                       
                        <Link to="query/">View all</Link>
                </section>
                </section>
            </section>
        </div>
    )
}
