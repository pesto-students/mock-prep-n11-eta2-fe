import React from 'react'
import { DashboardOutlined,Search } from '@material-ui/icons';
import Input from "@material-ui/core/Input"
import DashHeader from '../Common/Header/DashHeader';
import DashBoardCard from '../../Primary Components/Dashboard-Cards/Dash-Cards';
import DashboardChart from '../../Primary Components/Dashboard-Charts/Bar-Charts'
import DashboardPieChart  from '../../Primary Components/Dashboard-Charts/Doughnut-Chart'
import { earningChartData,earningChartOptions,adminDashboardMetrics,resourceChartOptions,resourceChartData,totalSaleOption,totalSaleData,CustomerReviews     } from '../../../constant/data';
import "./Dashboard.css"
import InterviewTable from '../../Primary Components/Table/Table';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <DashHeader title="Dashboard" icon={<DashboardOutlined />} rightComponent={<><Input placeholder='Search..' /><Search /></>} />
            
            <section className="admin-dashboard-cards">
                {adminDashboardMetrics.map((metric,index) => (
                    <DashBoardCard key={index} id={metric.id} description={metric.description} value={metric.value} icon={ metric.icon} />
                )) }
            </section>

            <section className="admin-dashboard-charts">
                <section className="earning-chart">
                    <DashboardChart options={earningChartOptions} data={earningChartData} />
                </section>
                <section className="resourceChart">
                    <DashboardPieChart options={resourceChartOptions} data={resourceChartData} />
                </section>
            </section>

            <section className="customer-feedback">
                <section className="total-earning">
                    <section className="top">
                        <p>Total Earning</p>
                        <h4>₹287,493</h4>
                        <p>1.4% Since Last Month</p>
                    </section>
                    <section className="bottom">
                        <p>Total Sales</p>
                        <h4>₹87,493</h4>
                        <p>5.43% Since Last Month</p>
                    </section>
                    <DashboardChart className="totalEarningChart" options={totalSaleOption} data={totalSaleData} />
                </section>
                <section className="cust-review">
                    {CustomerReviews.map(review => (
                        <section key={review.id} className="review-container">
                            <span style={{display:"flex"}}>
                                <img src={review.profile} alt="profile" />
                                <p>{review.name}<br/>{ review.comment}</p>
                            </span>
                            <p>{ review.rating}/5</p>
                        </section>                           
                    ))}                        
                </section>
            </section>

            <section className="interview-details">
                        <InterviewTable/>
            </section>
            
        </div>
    )
}
