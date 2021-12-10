import React,{lazy} from 'react'
import "../landing/landing.css"

const Introduction = lazy(() => import("../landing/Introduction/Introduction"))
const Interviewers = lazy(() => import("../landing/Interviewers/interviewers"))
const WhyMockPrep = lazy(() => import("../landing/WhyMockPrep/WhyMockPrep"))
const Package = lazy(() => import("../landing/Package/Package"))
const Analytics = lazy(() => import("../landing/Analytics/Analytics"))
const Testimonials = lazy(() => import("../landing/Testimonials/Testimonials"))
const Footer = lazy(() => import("../Primary Components/Footer/Footer"))

export default function Landing() {
    return (
        <>
           {/* <Header/> */}
                {/* <div className="landing-page">
                    
                    <Introduction/>
                
                    <Interviewers/>

                    <WhyMockPrep/>

                    <Package/>

                    <Analytics/>

                    <Testimonials/>
                    
                </div> */}
            <Footer/>
        </>
    )
}
