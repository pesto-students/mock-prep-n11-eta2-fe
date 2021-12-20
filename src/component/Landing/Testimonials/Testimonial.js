import React, {useState,useEffect} from 'react'
import "./Testimonial.css"
import { getReviews } from 'constant/apiUrl';
import { useSelector } from 'react-redux';
import dataActions from 'Redux/Actions/dataAction';
import dataActionCreator from 'Redux/Action Creators/dataActionCreators';
import { useDispatch } from 'react-redux';

export default function Testimonials() {
    
    let [testimonials,setTestimonial] = useState([])

    let data = useSelector(state => state.dataReducer.testimonials)

    const dispatch = useDispatch()
    useEffect(() => { 
        dataActionCreator.getAdminData(dispatch,getReviews,dataActions.setTestimonials)
    },[])
    useEffect(() => { 
        setTestimonial(data)
    },[data])
    return (
        <div>
            <h2 className="headline">Testimonials </h2>
            {
                testimonials ?
                    <section className="testimonials">
                        {testimonials.map(test => (
                            <section className="testimonial" key={test.id}>
                                <img src={test.image} alt="profile" className="test-profile"></img>
                                <section className="review">
                                    <p>"{test.review}"</p>
                                    <p className="test-person">{test.name}</p>
                                    <p className="test-person">{test.company}</p>
                                </section>
                            </section>
                        ))}
                    </section>:
            <p>Loading..</p>
            }
        </div>
    )
}