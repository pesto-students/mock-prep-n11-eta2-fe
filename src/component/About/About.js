import { lazy } from "react"
import { Link} from "react-router-dom"
import "./About.css"

const Header = lazy(() => import("component/Common/Header/Header"))
const Mission = lazy(() => import("component/About/Mission/Mission"))
const Team = lazy(() => import("component/About/Team/Team"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))

export default function About() {
    return (
        <>
            <section className="aboutContainer">
                <Header />
                <section id="aboutContent">
                    <h2 >We are <span id="title">Mock Prep</span></h2>
                    <p>Providing solutions to interview preparation</p>
                    <p className="about">At Mock prep, we want to help students prepare of technical interviews in an effective way. </p>
                     <p className="about">As we are seeing a boom in software and related technologies, Organizations are looking for potential people to fulfill these roles,<br/>
                        however interviews as seen as one of the roadblocks even by potential individuals due to lack of knowledge and guidance.
                    </p>
                    <p className="about">
                        We are trying to solve this issue by working on the core basics of an interview process and allowing our users to engage with experienced 
                        individuals in their field to be guided in the right way to overcome any gaps in their preparation.
                    </p>
                    <Link to="/join">
                    <button className="btn btn-transparent border-secondary hover">Join as Instructor</button>
                    </Link>
                </section>

            </section>
            <Mission />
            <Team/>
            <Footer/>
        </>
    )
}