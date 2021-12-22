import React from 'react'
import { Carousel } from 'antd'
import "./Testimonial.css"

export default function Slides({testimonials}) {
  
    const contentStyle = {
        width: "85%",
        margin: "auto",
    };

    return (
        <div>
            <Carousel style={contentStyle} autoplay>
                {testimonials.map((test,index) => (
                        <section key={index} className="testimonial">
                            <section className="review">
                            <img src={test.image} alt="profile" id="test-profile"></img>    
                            </section>
                        <section>
                            <p id="rev">{test.name}, {test.company}</p>
                            <p id="rev">"{test.review}"</p>
                            <p id="rev" style={{color:"orangered"}}>{test.rating}/5</p>
                            </section>
                        </section>
                    ))}
            </Carousel>,
        </div>
    )
}
