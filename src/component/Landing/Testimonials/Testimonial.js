import React, {useState,useEffect} from 'react'
import "./Testimonial.css"
import { getReviews } from 'constant/apiUrl';
import {getData} from 'api/Fetch';

export default function Testimonials() {
    
    let [testimonials,setTestimonial] = useState([])

    useEffect(() => { 
        const getInterviewer = async () => { 
            const testimonial = await getData(getReviews);
            if(testimonial) setTestimonial(testimonial)
        }
        getInterviewer()
    },[])

    return (
        <div>
            <h2 className="headline">Testimonials </h2>
            {
                testimonials ?
                    <section className="testimonials">
                        {testimonials.map(test => (
                            <section className="testimonial" key={test.id}>
                                <img src={test.image} alt="profile" className="test-profile"></img>
                                <section className="review">
                                    <p>"{test.review}"</p>
                                    <p className="test-person">{test.name}</p>
                                    <p className="test-person">{test.company}</p>
                                </section>
                            </section>
                        ))}
                    </section>:
            <p>Loading..</p>
            }
        </div>
    )
}