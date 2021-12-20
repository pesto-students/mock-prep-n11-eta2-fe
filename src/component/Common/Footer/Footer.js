import React from 'react'
import { logoWhiteUrl } from 'Constant/const_url'
import "./Footer.css"

export default function Footer () {
    return (
        <footer>
            <section>
                <img src={logoWhiteUrl} alt="Logo"></img>
                <p>MockPrep allows you to engage with industry experts to get assistance with your interview preparation.</p>
            </section>
            <section>
                <h2>Pages</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Packages</li>
                    <li>Join Us</li>
                </ul>
            </section>
            <section>
                <h2>Packages</h2>
                <ul>
                    <li>Interview Prep  pack</li>
                    <li>Mock Interview</li>
                    <li>Mentorship and consulting</li>
                </ul>
            </section>
            <section>
                <h2>Support</h2>
                <ul>
                    <li>Book a demo session</li>
                    <li>Contact Us</li>
                    <li>Queries</li>
                </ul>
            </section>
        </footer>
    )
}
