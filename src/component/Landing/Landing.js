import React,{lazy} from 'react'
import "./Landing.css"

const Header = lazy(() => import("component/Common/Header/Header"))
const Introduction = lazy(() => import("component/Landing/Introduction/Introduction"))
const Interviewer = lazy(() => import("component/Landing/Interviewers/Interviewers"))
const WhyMockPrep = lazy(() => import("component/Landing/WhyMockPrep/WhyMockPrep"))
const Analytics = lazy(() => import("component/Landing/Analytics/Analytics"))
const Packages = lazy(() => import("component/Landing/Packages/Packages"))
const Testimonials = lazy(() => import("component/Landing/Testimonials/Testimonial"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))

export default function Landing() {

    return (
        <>
           <Header/>
                <div className="landing-page">
                    <Introduction/>
                    <Interviewer/>
                    <WhyMockPrep/>
                    <Analytics/>
                    <Packages/>
                    <Testimonials/> 
                </div>
            <Footer/>
        </>
    )
}