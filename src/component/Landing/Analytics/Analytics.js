import React, { lazy,useState,useEffect } from 'react'
import "./Analytics.css"
import { BarChartOptions,PieChartOptions } from 'Constant/data'
import { UserAddOutlined } from "@ant-design/icons"
import { getDashboards} from 'Constant/apiUrl'
import dataActions from 'Redux/Actions/dataAction'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import { useDispatch, useSelector } from 'react-redux'

const PieChart = lazy(() => import("component/Common/Charts/Pie/PieChart"))
const DashBoardChart = lazy(() => import("component/Common/Charts/Bar/BarChart"))
const DashBoardCard = lazy(() => import("component/Common/Cards/DashboardCard/DashBoardCard"))

export default function Analytics() {
    
    let [dashboard, setDashboard] = useState([])
    const dispatch  = useDispatch();
    let data = useSelector(state => state.dataReducer);
    useEffect(() => { 
        dataActionCreator.getAdminData(dispatch,getDashboards,dataActions.setLandingAnalytics)
    },[])

    useEffect(() => { 
        if(data.analyticsLandingData && data.analyticsLandingData){
            setDashboard(data.analyticsLandingData[0]);
        }
    },[data])
    
    let dashboardMetrics;
    let onboardingMetrics;
    let trendingData;
    if (dashboard != null) { 
        dashboardMetrics = dashboard.cards;
        onboardingMetrics = dashboard.usersOnboarded;
        trendingData = dashboard.trendingTopics
    }
  
    return (
        <div>
             <h1 className="headline">Where we Stand</h1>
            <section className="landing-dashboard">
                    {dashboardMetrics ? 
                            <section className="landing-cards">
                            {dashboardMetrics.map(metric => (
                                <DashBoardCard className="dashcard" key={metric._id} id={metric.id} description={metric.description} icon={<UserAddOutlined/>} value={metric.value} />
                            ))}
                            </section> :
                            <p>loading..</p>
                        }
                      
                <section className="landing-charts">
                                {onboardingMetrics ?
                                    <section className="landing-bar">
                                                <h2>Interviewers vs Students Onboarded Month Wise</h2>
                                                <DashBoardChart data={onboardingMetrics} options={BarChartOptions} />
                                    </section> :
                                    <p>Loading..</p>
                                }
                                
                                {trendingData ?
                                <section className="landing-doughnut">
                                    <h2>Trending Topics</h2>
                                    <PieChart data={trendingData} options={PieChartOptions } />
                                </section>:
                               <p>Loading..</p>
                            }
                        </section>
                </section>
        </div>
    )
}