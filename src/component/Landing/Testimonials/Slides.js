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
                    
                ))}
            </Carousel>,
        </div>
    )
}
