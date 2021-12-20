import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import "./Testimonial.css"
import { getReviews } from 'Constant/apiUrl';
import dataActions from 'Redux/Actions/dataAction';
import dataActionCreator from 'Redux/Action Creators/dataActionCreators';
import Slides from './Slides';

export default function Testimonials() {
    
    let testimonials = [];
    const dispatch = useDispatch()
    
    useEffect(() => { 
            dataActionCreator.getAdminData(dispatch,getReviews,dataActions.setTestimonials)
    }, [])
    
    let data = useSelector(state => state.dataReducer)
    if (data.testimonials !== undefined) { testimonials = data.testimonials.data; }

    return (
        <div id="testimonials">
            {testimonials.length > 0 ? <section id="testimonials"><Slides testimonials={testimonials} /></section>:<p>Loading..</p>}
        </div>
    )
}