import React, { lazy,useState,useEffect } from 'react'
import { totalSaleOption} from "Constant/data"
import "./Feedback.css"
import { getData } from 'api/Fetch'
import { getReviews } from 'Constant/apiUrl'

const DashboardChart = lazy(() => import("component/Common/Charts/Bar/BarChart"))
export default function Feedback({ data }) {
    
    let [testimonials,setTestimonial] = useState([])
    
    useEffect(() => { 
        const getInterviewer = async () => { 
            const testimonial = await getData(getReviews);
            if(testimonial) setTestimonial(testimonial)
        }
        getInterviewer()
    }, [])
    
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
