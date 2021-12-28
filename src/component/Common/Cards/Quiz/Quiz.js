import React, { Suspense } from 'react'
import { Link } from 'react-router-dom';
import "./Quiz.css"

export default function QuizCard({quiz}) {
  
        return (
                <Suspense fallback={<div>Loading</div>}>
              
                    <section className="quizCard" key={quiz._id}>
                        <img alt="quizProfile" src={quiz.image} className="quizProfile" />
                        <span className="quizCardDetails">
                        <h2 className="int-details">{quiz.title}</h2>
                        <p className="int-details">{quiz.description}</p></span>
                        <Link to={`quizContent/${quiz._id}`}><button className="btn btn-sm btn-warning learnButton">Start Learning</button></Link> 
                        </section>
                </Suspense >
        )
        
}
     