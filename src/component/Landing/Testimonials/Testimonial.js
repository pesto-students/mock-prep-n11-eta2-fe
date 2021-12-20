import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getReviews } from 'Constant/apiUrl';
import { getData } from 'api/Api';
import "./Testimonial.css"
import { dataActionCreator } from 'Redux/Action Creators/dataActionCreators';

export default function Testimonials() {
    
    const dispatch = useDispatch();
 
    useEffect(() => { 
        const getDataFunction = async () => { 
            const data = await getData(getReviews);
            dataActionCreator.setReviews(dispatch, data)
        }
        getDataFunction()
    }, [dispatch])

    let reviews = useSelector(state => state.dataReducer);
    console.log(reviews)
 
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