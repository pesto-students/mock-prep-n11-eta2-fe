import React, { lazy,useState,useEffect } from 'react'
import PublicRoute from "Route/PublicRoute";
import { useSelector } from 'react-redux';

const Landing = lazy(() => import("component/Landing/Landing"))
const About = lazy(() => import("component/About/About"))
const Contact = lazy(() => import("component/Contact/Contact"))
const SuccessAlert = lazy(() => import("component/Alerts/Success"))
const ErrorAlert = lazy(()=>import("component/Alerts/Error"))

export default function Routes() {

      
    let [message, setMessage] = useState("")
    let [isAlert, setAlert] = useState(false)
    let [isError,setError] = useState(false)
    const alert = useSelector(state => state.alertReducer)

    useEffect(() => {
        if (alert && alert.message) { 
            setAlert(true)
            setMessage(alert.message)
        }
        else if(alert && alert.isError) { 
            setError(true)
            setMessage(alert.error)
        }
        setTimeout(() => {
            setAlert(false)
            setError(false)
        }, 2000)
        
    }, [alert])

 

    return (
        <div>
            {isAlert ? <SuccessAlert message={message} /> : <></>}
            {isError ? <ErrorAlert message={message} /> : <></>}
            <PublicRoute exact path="/" component={Landing} />
            <PublicRoute exact path="/about" component={About} />
            <PublicRoute exact path="/contact" component={Contact}  />
        </div>
    )
}