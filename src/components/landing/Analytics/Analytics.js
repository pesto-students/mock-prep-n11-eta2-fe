import React, { lazy } from 'react'
import "./Analytics.css"
import { dashboardMetrics,onboardingMetrics,BarChartOptions,PieChartOptions,trendingData } from '../../../constant/data'
import { UserAddOutlined  } from "@ant-design/icons"

const PieChart = lazy(() => import("../../Primary Components/Dashboard-Charts/Pie-Chart"))
const DashBoardChart = lazy(() => import("../../Primary Components/Dashboard-Charts/Bar-Charts"))
const DashBoardCard = lazy(() => import("../../Primary Components/Dashboard-Cards/Dash-Cards"))

export default function Analytics ()  {
    return (
        <div>
             <h1 className="headline">Where we Stand</h1>
                    <section className="landing-dashboard">
                        <section className="landing-cards">
                            {dashboardMetrics.map(metric => (
                                <DashBoardCard class="dashcard" key={metric.id} id={metric.id} description={metric.description} icon={<UserAddOutlined/>} value={metric.value} />
                            ))}
                        </section>
                        <section className="landing-charts">
                        <section className="landing-bar">
                                    <h2>Interviewers vs Students Onboarded Month Wise</h2>
                                    <DashBoardChart data={onboardingMetrics} options={BarChartOptions} />
                                </section>
                                    <section className="landing-doughnut">
                                    <h2>Trending Topics</h2>
                                    <PieChart data={trendingData} options={PieChartOptions } />
                                </section>
                        </section>
                </section>
        </div>
    )
}
