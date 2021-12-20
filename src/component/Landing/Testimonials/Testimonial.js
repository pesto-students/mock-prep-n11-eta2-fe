import React, { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getData } from 'api/Api';
import "./Testimonial.css"
import { getReviews } from 'Constant/apiUrl';
import dataActions from 'Redux/Actions/dataAction';
import dataActionCreator from 'Redux/Action Creators/dataActionCreators';


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
                {/* {reviews ?
                        <section id="testimonials">
                            {reviews.map((test,index) => (
                                <section key={index} className="testimonial">
                                    <img src={test.image} alt="profile" id="test-profile"></img>
                                    <section className="review">
                                        <p>"{test.review}"</p>
                                        <p className="test-person">{test.name}</p>
                                        <p className="test-person">{test.company}</p>
                                    </section>
                                </section>
                            ))}
                        </section>:
                <p>Loading..</p>
                } */}
        </div>
    )
}