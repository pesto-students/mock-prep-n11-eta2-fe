import React from 'react'
import {testimonials} from "../../../constant/data"

export default function Testimonials ()  {
    return (
        <div>
            <h2 className="headline">Testimonials </h2>
            <section className="testimonials">
                        {testimonials.map(test => (
                            <section className="testimonial" key={test.id}>
                                <img src={test.pic} alt="profile" className="test-profile"></img>
                                <section className="review">
                                    <p>"{test.review}"</p>
                                    <p className="test-person">{test.name}</p>
                                    <p className="test-person">{test.company}</p>
                                </section>
                            </section>
                        ))}
            </section>
        </div>
    )
}
