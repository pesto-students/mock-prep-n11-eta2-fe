import React, { lazy } from 'react'
import { useSelector } from "react-redux";
import PublicRoute from "Route/PublicRoute";
// import PrivateRoute from "Route/PrivateRoute";
// import { useCookies } from "react-cookie"
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';

const Landing = lazy(() => import("component/Landing/Landing"))
const About = lazy(() => import("component/About/About"))
// const Package = lazy(() => import("component/Package/Package"))
// const Join = lazy(() => import("component/Join/Join"))
// const Contact = lazy(() => import("component/Contact/Contact"))
// const SignIn = lazy(() => import("component/Join/SignIn/SignIn"))
// const Admin = lazy(() => import("component/Dashboard/Admin/Dashboard/Admin"))
// const Interviewer = lazy(() => import("component/Dashboard/Interviewer/Interviewer"))
// const Student = lazy(() => import("component/Dashboard/Student/Student"))
// const QuizContent = lazy(() => import("component/Dashboard/Common/Quiz/QuizContent/QuizContent"))

export default function Routes() {

    return (
        <div>
            <PublicRoute exact path="/" component={Landing} />
            <PublicRoute exact path="/about" component={About}  />
           
        </div>
    )
}