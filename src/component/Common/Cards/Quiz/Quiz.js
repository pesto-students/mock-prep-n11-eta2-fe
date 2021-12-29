import { editIcon, trashIcon } from 'constant/antIcons';
import React, { Suspense } from 'react'
import { Link } from 'react-router-dom';
import "./Quiz.css"

export default function QuizCard({quiz,handleDelete}) {
  
        return (
                <Suspense fallback={<div>Loading</div>}>
                        <section className="quizCard" key={quiz._id}>
                                <span className='quizEditIcons'>
                                <Link to="#" onClick={() => { handleDelete(quiz._id) }} className="edit-icon"  >{trashIcon}</Link>
                                </span>     
                                <img alt="quizProfile" src={quiz.image} className="quizProfile" />
                                <span className="quizCardDetails">
                                <h2 className="int-details">{quiz.title}</h2>
                                <p className="int-details">{quiz.description}</p></span>
                                <Link to={`quizContent/${quiz._id}`}><button className="btn btn-sm btn-info learnButton">Start Quiz</button></Link> 
                        </section>
                </Suspense >
        )
        
}
     