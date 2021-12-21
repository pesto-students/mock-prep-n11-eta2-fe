import React, { lazy,useState,useEffect } from 'react'
import { totalSaleOption} from "Constant/data"
import { getReviews } from 'Constant/apiUrl'
import dataActionCreators from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import { useDispatch, useSelector } from 'react-redux'
import "./Feedback.css"

const DashboardChart = lazy(() => import("component/Common/Charts/Bar/BarChart"))

export default function Feedback({ data }) {
    
    let [testimonials,setTestimonial] = useState([])
    let feedbackdata = useSelector(state => state.dataReducer.feedback)
    const dispatch = useDispatch();
    
    useEffect(() => { dataActionCreators.getAdminData(dispatch,getReviews,dataActions.setFeedback)}, [])
    useEffect(() => {   if (feedbackdata !== undefined) { setTestimonial(feedbackdata.data)}}, [feedbackdata])
    
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
                    <section className="top">
                        <p>Total Expenditure</p>
                        <h4>12,493</h4>
                        <p>5.43% growth</p>
                    </section>
                    <section className="top">
                        <p>Total Profits</p>
                        <h4>40,493</h4>
                        <p>15.43% growth</p>
                    </section>
                </section>
                <section className="cust-review">   
                    <h2 className="headline">Customer Reviews</h2>
                    {testimonials.length>0 ?
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
