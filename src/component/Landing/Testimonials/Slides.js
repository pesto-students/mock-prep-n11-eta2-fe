import React from 'react'
import { Carousel } from 'antd'
import "./Testimonial.css"

export default function Slides({testimonials}) {

    
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
  
    const contentStyle = {
        width: "85%",
        margin: "auto",
       
    };

    return (
        <div>
            <Carousel style={contentStyle} autoplay afterChange={onChange}>
                {testimonials.map((review,index) => (
                <section key={index} className="testimonial">
                     <img src={review.image} alt="profile" id="test-profile"></img>
                     <section className="review">
                         <p>"{review.review}"</p>
                         <p className="test-person">{review.name}</p>
                         <p className="test-person">{review.company}</p>
                     </section>
                </section>
                ))}
            </Carousel>,
        </div>
    )
}
