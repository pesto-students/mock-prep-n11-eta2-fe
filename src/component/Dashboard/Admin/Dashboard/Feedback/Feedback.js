import React, { lazy,useState,useEffect } from 'react'
import { totalSaleOption} from "Constant/data"
import "./Feedback.css"

import { getReviews } from 'Constant/apiUrl'
import dataActionCreators from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import { useDispatch, useSelector } from 'react-redux'


const DashboardChart = lazy(() => import("component/Common/Charts/Bar/BarChart"))
export default function Feedback({ data }) {
    
    let [testimonials,setTestimonial] = useState([])
    const dispatch = useDispatch();
    let feedbackdata = useSelector(state => state.dataReducer.feedback)
    useEffect(() => { 
        dataActionCreators.getAdminData(dispatch,getReviews,dataActions.setFeedback)
    },[])
    useEffect(() => {    
            if(feedbackdata) setTestimonial(feedbackdata)
    }, [feedbackdata])
    
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
                    <DashboardChart className="totalEarningChart" options={totalSaleOption} data={data.totalSales} />
                </section>
                <section className="cust-review">   
                    <h2 className="headline">Customer Reviews</h2>
                    {testimonials ?
                        <section>
                            {testimonials.map((review, index) => (
                                <section key={index} className="review-container">
                                    <span style={{ display: "flex" }}>
                                        <img src={review.image} alt="profile" />
                                        <p>{review.name}<br />{review.review}</p>
                                    </span>
                                    <p>{review.rating}/5</p>
                                </section>
                            ))}
                        </section> :
                        <p>Loading</p>
                    }
                </section>
            </section>
        </div>
    )
}
