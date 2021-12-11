import React, { lazy } from 'react'
import { totalSaleOption,totalSaleData,CustomerReviews} from "constant/data"
import "./Feedback.css"

const DashboardChart = lazy(() => import("component/Common/Charts/Bar/BarChart"))
export default function Feedback (){
    return (
        <div>
             <section className="customer-feedback">
                <section className="total-earning">
                    <h2 className="headline">Total Earnings </h2>
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
                    <h2 className="headline">Customer Reviews</h2>
                    {CustomerReviews.map((review,index) => (
                        <section key={index} className="review-container">
                            <span style={{display:"flex"}}>
                                <img src={review.profile} alt="profile" />
                                <p>{review.name}<br/>{ review.comment}</p>
                            </span>
                            <p>{ review.rating}/5</p>
                        </section>                           
                    ))}                        
                </section>
            </section>
        </div>
    )
}
