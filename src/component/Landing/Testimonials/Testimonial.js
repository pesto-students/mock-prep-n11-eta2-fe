import React, { useEffect ,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getReviews } from 'constant/apiUrl';
import Slides from "component/Landing/Testimonials/Slides"
import dataActions from 'Redux/Actions/dataAction';
import dataActionCreator from 'Redux/Action Creators/dataActionCreators';
import "./Testimonial.css"

export default function Testimonials() {
    
    
    let [testimonials, setTestimonials] = useState([])
    
    const dispatch = useDispatch()
    let data = useSelector(state => state.dataReducer)
    
    useEffect(() => { dataActionCreator.getAdminData(dispatch, getReviews, dataActions.setTestimonials) }, [dispatch])
    useEffect(() => { if (data.testimonials !== undefined) { setTestimonials(data.testimonials.data) }}, [data])
    
    return (<div>{testimonials.length>0 ? <section id="testimonials"><Slides testimonials={ testimonials} /></section>: <p>Loading..</p>}</div>)
}