import React from 'react'
import "../landing/landing.css"
import {
    interviewers,
    sellingPointers,
    packages,
    testimonials
} from "../../constant/interviewer"

export const Landing = () => {
    return (
        <div className="landing-page">
            <h2 className="headline">Prepare for your upcoming interview <br /> with a "Google" Interviewer</h2>
            <p className="light-pointers">Take mock interviews & 1-on-1 mentoring sessions with real-life interviewers from the world’s best companies</p>
            <button className="package-btn">Explore Packages</button>
            <p className="light-pointers">A package for every interview preparation problem that you’ll ever face</p>
            <h3 className="headline">Meet our Interviewers</h3>

            <section className="interviewer-list">
                {interviewers.map(person => (
                    <section className="person" key={person.id}>
                        <img alt="int-profile" src={person.pic} className="profile"  />
                        <p className="int-details">{person.name}</p>
                        <p className="int-details">{person.designation},</p>
                        <p className="int-details">{person.company}</p>
                    </section>
                ))}
            </section>

            <h2 className="headline">Why MockPrep ?</h2>
            <section className="sell-pointer">
                {sellingPointers.map(pointer => (
                    <section className="pointer" key={pointer.id}>
                        <p className="point"> <i className={pointer.icon}></i>{pointer.text}</p>
                    </section>
                ))}
            </section>

            <h2 className="headline">Our Packages ?</h2>
            <section className="package-details">
                {packages.map(pack => (
                    <section className="package" key={pack.id}>
                        <h3 className="heading">{pack.title}</h3>
                        <p>{pack.description}</p>
                        <section className="pack-adv">
                        {pack.details.map(det => (
                            <p><i className={ pack.icon}></i>  {det}</p>
                        ))}
                        </section>
                        <button className="learn">Learn more</button>
                    </section>
                ))}
            </section>

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
