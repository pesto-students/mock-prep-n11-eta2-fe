import React, { Suspense, useState, useEffect } from "react";
import { getReviews } from "constant/apiUrl";
import { useDispatch, useSelector } from "react-redux";
import dataActionCreators from "Redux/Action Creators/dataActionCreators";
import dataActions from "Redux/Actions/dataAction";
import "./Feedback.css";

export default function Feedback() {
  let [testimonials, setTestimonial] = useState([]);
  let feedbackdata = useSelector((state) => state.dataReducer.feedback);
  const dispatch = useDispatch();

  useEffect(() => {
    dataActionCreators.getAdminData(
      dispatch,
      getReviews,
      dataActions.setFeedback
    );
  }, [dispatch]);

  useEffect(() => {
    if (feedbackdata) {
      setTestimonial(feedbackdata.data);
    }
  }, [feedbackdata]);

  return (
    <div>
      <section className="customer-feedback">
        <section id="total-earning">
          <h2 id="earningHeadline">Total Earnings </h2>
          <section className="top">
            <p>Total Revenue</p>
            <h4>₹287,493</h4>
            <p>1.4% Growth</p>
          </section>
          <section className="top">
            <p>Total Expenditure</p>
            <h4>112,493</h4>
            <p>5.43% Savings</p>
          </section>
          <section className="top">
            <p>Total Profits</p>
            <h4>175,000</h4>
            <p>15.43% Growth</p>
          </section>
        </section>
        <section className="cust-review">
          <h2 id="earningHeadline">Customer Reviews</h2>
          <Suspense fallback={<div>Loading...</div>}>
            {testimonials.length ? (
              <section>
                {testimonials.map((review, index) => (
                  <section key={index} className="review-container">
                    <span style={{ display: "flex" }}>
                      <img src={review.image} alt="profile" />
                      <p>
                        {review.name}
                        <br />
                        {review.review}
                      </p>
                    </span>
                    <p>{review.rating}/5</p>
                  </section>
                ))}
              </section>
            ) : (
              <p>Loading...</p>
            )}
          </Suspense>
        </section>
      </section>
    </div>
  );
}
