import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getReviews } from 'Constant/apiUrl';
import Slides from "component/Landing/Testimonials/Slides"
import dataActions from 'Redux/Actions/dataAction';
import dataActionCreator from 'Redux/Action Creators/dataActionCreators';
import "./Testimonial.css"


export default function Testimonials() {
    
    
    let testimonials = [];
    const dispatch = useDispatch()
    
    useEffect(() => { 
            dataActionCreator.getAdminData(dispatch,getReviews,dataActions.setTestimonials)
    }, [dispatch])
    
    let data = useSelector(state => state.dataReducer)
    if (data.testimonials !== undefined) { testimonials = data.testimonials.data; }
  
    return (
        <div>
            {testimonials.length>0 ?
                <section id="testimonials">
                    <Slides testimonials={ testimonials} />
                </section>:
                <p>Loading..</p>
            }
        </div>
    )
}