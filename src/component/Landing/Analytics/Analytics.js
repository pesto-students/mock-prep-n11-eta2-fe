import React, { lazy,useState,useEffect } from 'react'
import { BarChartOptions,PieChartOptions } from 'Constant/data'
import { UserAddOutlined } from "@ant-design/icons"
import { getDashboards } from 'Constant/apiUrl'
import { useDispatch, useSelector } from 'react-redux'
import dataActions from 'Redux/Actions/dataAction'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import "./Analytics.css"
import DoughNutChart from 'component/Common/Charts/Doughnut/Doughnut'

const PieChart = lazy(() => import("component/Common/Charts/Pie/PieChart"))
const DashBoardChart = lazy(() => import("component/Common/Charts/Bar/BarChart"))
const DashBoardCard = lazy(() => import("component/Common/Cards/DashboardCard/DashBoardCard"))

export default function Analytics() {
    
    let dashboardMetrics, onboardingMetrics, trendingData;
    let [dashboard, setDashboard] = useState([]);
    
    const dispatch = useDispatch()
    let data = useSelector(state => state.dataReducer)
    
    useEffect(() => { dataActionCreator.getAdminData(dispatch, getDashboards, dataActions.setLandingAnalytics) }, [dispatch])
    useEffect(() => { if (data.analyticsLandingData !== undefined) { setDashboard(data.analyticsLandingData.data[0]) }}, [data])

    if (dashboard != null) { dashboardMetrics = dashboard.cards; onboardingMetrics = dashboard.usersOnboarded;trendingData = dashboard.trendingTopics}
  
        return (
        <>
                <h2 className="title">Where we Stand</h2>
          
                <section className="landing-dashboard">
                    {dashboardMetrics ? 
                    <section className="landing-cards">
                            {dashboardMetrics.map((dashboardCard,index) => (<DashBoardCard key={index} className="dashcard" {...dashboardCard} />))}
                    </section>:<p>loading..</p>}
                    <section className="landing-charts">
                        {onboardingMetrics ?<section className="landing-bar"><h5 className="graphTitle">Interviewers vs Students Onboarding</h5><DashBoardChart data={onboardingMetrics} options={BarChartOptions} /> </section> : <p>Loading..</p>}
                         {trendingData ?<section className="landing-doughnut"><h5 className="graphTitle">Trending Topics</h5><DoughNutChart data={trendingData} options={PieChartOptions } /></section>:<p>Loading..</p>}
                    </section>
                </section>
        </>
    )
}