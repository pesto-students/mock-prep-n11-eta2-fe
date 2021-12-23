import React from 'react'

import "./Feedback.css"

export default function Feedback( ) {
    

    const testimonials = [
        {
            "_id": "61c35d8ab7809a9931002a30",
            "name": "Silki Hansen",
            "email": "silki.hansen@gmail.com",
            "company": "Razor Io",
            "review": "Feedback was usefull in improving my skills",
            "image": "https://randomuser.me/api/portraits/women/67.jpg",
            "rating": 10,
        },
        {
            "_id": "61c35f4cb7809a9931002a51",
            "name": "Bobby Mertin",
            "email": "bobby.martin@gmail.com",
            "company": "Minsoft Tech",
            "review": "Project Discussion was great, got much needed help",
            "image": "https://randomuser.me/api/portraits/men/0.jpg",
            "rating": 8,
          
        }
    ]
    
    
    return (
        <div>
             <section className="customer-feedback">
                <section className="total-earning">
                    <h2 className="headline">Quick Stats (2021)</h2>
                    <section className="top">
                        <p>Total Revenue</p>
                        <h4>₹127,493</h4>
                        <p>1.4% Growth</p>
                    </section>
                    <section className="top">
                        <p>Total Interviews taken</p>
                        <h4>112</h4>
                        <p>Averaging 15 interviews a month</p>
                    </section>
                    <section className="top">
                        <p>Average Rating</p>
                        <h4>8.3</h4>
                        <p>Out of 67 reviews</p>
                    </section>
                </section>
                <section className="cust-review">   
                    <h2 className="headline">Student Feedback</h2>
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
