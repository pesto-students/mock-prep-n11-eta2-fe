import React, { lazy } from 'react'
import "./Introduction.css"

const CommonButton = lazy(() => import("component/Common/Button/CommonButton"))

export default function Introduction  ()  {
    return (
        <div id="introduction">
            <h1 id="headline">Prepare for your upcoming interview <br /> with a "Google" Interviewer</h1>
            <p className="light-text">Take mock interviews & 1-on-1 mentoring sessions with real-life interviewers from the world’s best companies</p>
                <CommonButton buttonType='primary' buttonName="Explore Packages" isDisabled = "false" size = "large" width = {"15%"} />
            <p className="light-text">A package for every interview preparation problem that you’ll ever face</p>
        </div>
    )
}
