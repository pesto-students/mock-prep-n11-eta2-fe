import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Button,Progress ,Alert} from 'antd';
import { getQuizList } from 'constant/apiUrl';
import { fallback } from 'constant/navList';
import { useDispatch, useSelector } from 'react-redux';
import DashboardHeader from '../../Header/DashboardHeader'
import QuizOptionForm from "./QuizOptionForm"
import QuizNavigator from './QuizNavigator';
import dataActions from 'Redux/Actions/dataAction'; 
import dataActionCreator from 'Redux/Action Creators/dataActionCreators';
import "./QuizContent.css"
import { resourceIcon } from 'constant/antIcons';

export default function QuizContent() {

    
    const [index, setIndex] = useState(0)
    let percent = 0;
    let count = 0;
    let score = 0;
    let pending = false;
    let attempt;

    const {quizId } = useParams();
    const [quiz, setQuiz] = useState([]);
    const [quizDetail, setDetails] = useState([]);
    const dispatch = useDispatch()
    const data = useSelector(state => state.dataReducer)

    useEffect(() => { dataActionCreator.getAdminData(dispatch, getQuizList, dataActions.setQuiz) }, [dispatch])
    useEffect(() => {
        if (data.quiz !== undefined) {
            setQuiz(data.quiz.data);
            setDetails(data.quiz.data.filter(f=>f._id===quizId));
            if (data.quiz.data.length > 0) { 

                let question = data.quiz.data.filter(e => e._id === quizId)[0].questions;
                question.forEach((e,ind) => {
                    const obj = { question: ind, attempted: false, answer: false, correctAnswer: "" };
                    e.answer = obj
                })

                setQuiz(question)
            }
        }
    }, [data,quizId])


    const handleSubmit = (e) => {
      
    }

    const attempted = (ind) => { 


        quiz.find(e => e.answer.question === index).answer.attempted = true;
        
        quiz[index].correctAnswers.find((c, ind2) => {
            if (c.answer_a && ind2 === ind) {
                quiz.find(e => e.answer.question === index).answer.answer = true;
                return true;
            }
            return false;
        })

    }
    
    if (quiz) { 
        quiz.forEach(x => {
            if (x.answer.attempted) {
                count = count + 1;
            }
            else { 
                pending = true;
            }
    
            if (x.answer.answer) { 
                score=score + 1;
            }
        })
    }
    
    if (quiz.length > 0 && index<quiz.length) { 
        attempt = quiz[index].answer.attempted;
        percent = (count / quiz.length) * 100;
    }

  

    score = (score / quiz.length) * 100;
    let desc = "";
    if (score < 30) {
        desc = "You scored " + score + " percent!!, you can retake the test";
    }
    else if (score < 50) {
        desc = "You scored " + score + " percent!!, you can do better please read our resources to improve";
    }
    else {
        desc = "Congrats You scored " + score + " percent!!";
    }
  

    return (
        <div className='quiz'>
            <DashboardHeader title="Quiz" icon={resourceIcon} />
               {quiz ?<>{index!==quiz.length?
                        <section className="slides">
                           <section className="slide">
                               <section className="slideCard">
                               <p>Question {index+1} of {quiz.length} </p>
                                   <h1 className="question">{quiz[index].question} ?</h1> 
                                       <section className="option">
                                       <QuizOptionForm attempt={attempt} attempted={attempted} setQuiz={setQuiz} index={index} quiz={quiz} options={quiz[index].options}  multiple={quiz[index].multipleChoice} submit={handleSubmit}/>
                                       </section>
                                       <section className="navigationBtn">
                                           <Button type="danger" onClick={() => {if(index>0) setIndex(index-1) }}>Previous Question</Button>
                                           <Button type="primary" className="next" onClick={() => { if(index<quiz.length) setIndex(index + 1) }}>Next Question</Button>
                                       </section>
                               </section>
                           </section>
                           <section className="navigation">
                               <QuizNavigator percent={percent} index={index} questions={quiz} details={quizDetail} information={quiz[index].explanation} />
                           </section>
                        </section> :
                        <section className="slides">
                            <section className="slide">
                                <section className="slideCard">    
                                    <h1 className='completed'>Quiz Completed</h1> 
                                    
                                    <section className="score">
                                        {pending ?
                                           <> <Alert className='alertQuiz' type="error" description="Please Attempt all the questions to submit" /> </>:
                                            <Alert className='alertQuiz' type="success" description={ desc} />       
                                    }
                                    </section>
                                      <section className="navigationBtn">
                                          <Button type="danger" onClick={() => {if(index>0) setIndex(index-1) }}>Previous Question</Button>
                                          <Button type="primary" className="next" onClick={() => { if(index<quiz.length) setIndex(index + 1) }}>Next Question</Button>
                                      </section>
                              </section>
                             </section>
                            <section className="navigation">
                                <div className="quizNavigator">
                                    <section className="navHead">
                                        <Progress type="circle" className="prog" strokeColor={{ '0%': '#108ee9','100%': '#87d068',}} percent="100"/>
                                        <h3>Completed<br/>  <p>{quizDetail.description}</p></h3>
                                    </section>
                                    <section className="nav">
                                        {quiz?
                                            quiz.map((que,index) => (
                                    <section key={index}>
                                        {que.answer.attempted ?<>{que.answer.answer ?
                                                <Progress className='progress' type="circle" percent={100} format={percent => `${que.answer.question+1}`} /> :
                                                <Progress className='progress' type="circle" percent={100} format={percent => `${que.answer.question+1}`}  status="exception"     />
                                                } </>:<Progress className='progress' type="circle" percent={99} format={percent => `${que.answer.question+1}`} /> 
                                        }</section>
                                        )):<p></p>}
                                    </section>
                                </div>                                    
                            </section>
                        </section>}
            </> :
                <section>{fallback}</section>}
        </div>
    )
}