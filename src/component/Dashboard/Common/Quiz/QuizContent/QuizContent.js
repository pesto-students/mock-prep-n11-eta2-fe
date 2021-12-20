import React, {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button,Progress ,Alert} from 'antd';
import "./QuizContent.css"
import { logoUrl } from 'Constant/const_url';
import DashboardHeader from '../../Header/DashboardHeader'
import { getData } from 'api/Api';
import { getQuizContent } from 'Constant/apiUrl';
import "./QuizContent.css"
import QuizOptionForm from "./QuizOptionForm"
import QuizNavigator from './QuizNavigator';
import { fallback } from 'Constant/navList';

export default function QuizContent() {

    const [quiz, setQuiz] = useState([]);
    const [index, setIndex] = useState(0)
    const {quizId } = useParams();
    const [quizDetail, setDetails] = useState([]);

    let percent = 0;
    let count = 0;
    let score = 0;
    let pending = false;

    console.log(percent);

    let attempt;
    const attempted = (ind) => { 
        quiz.find(e => e.answer.question === index).answer.attempted = true;
        
        quiz[index].correctAnswers.find((c, ind2) => {
            if (c.answer_a && ind2 === ind) {

                quiz.find(e => e.answer.question === index).answer.answer = true;
                return true;
            }
            return true;
        })

    }
  
    const logo =<Link to="/"><img alt="logo" className='headerLogo' src={logoUrl}></img></Link>

    useEffect(() => { 
       
        const getQuizData = async () => { 
            let data = await getData(getQuizContent + quizId)
           
            data.questions.forEach((e,ind) => {
                const obj = { question: ind, attempted: false, answer: false, correctAnswer: "" };
                e.answer = obj
            })
            setQuiz(data.questions)
            setDetails(data)
        }

        getQuizData();
       
        
    }, [quizId])

    const handleSubmit = (e) => {
      
    }

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
  
    
    if (quiz.length > 0 && index<quiz.length) { 
        attempt = quiz[index].answer.attempted;
        percent = (count / quiz.length) * 100;
       
    }

    score = (score / quiz.length) * 100;
    let desc = "Congrats You scored " + score + " percent!!";
    return (
        <div className='quiz'>
            <DashboardHeader title={logo} rightComponent={<><h3 style={{ margin: " 0 2vw" }}>{ " username"}</h3>  <Button >Exit Quiz</Button></>}></DashboardHeader>
            {quiz.length > 0
                ?
                <>
                    {index!==quiz.length?
                        <section id="slides">
                           <section id="slide">
                               <section id="slideCard">
                               <p>Question {index+1} of {quiz.length} </p>
                                   <h1 id="question">{quiz[index].question} ?</h1> 
                                       <section className="option">
                                       <QuizOptionForm attempt={attempt} attempted={attempted} setQuiz={setQuiz} index={index} quiz={quiz} options={quiz[index].options}  multiple={quiz[index].multipleChoice} submit={handleSubmit}/>
                                       </section>
                                       <section id="navigationBtn">
                                           <Button type="danger" onClick={() => {if(index>0) setIndex(index-1) }}>Previous Question</Button>
                                           <Button type="primary" id="next" onClick={() => { if(index<quiz.length) setIndex(index + 1) }}>Next Question</Button>
                                       </section>
                               </section>
                           </section>
                           <section id="navigation">
                               <QuizNavigator percent={percent} index={index} questions={quiz} details={quizDetail} information={quiz[index].explanation} />
                           </section>
                        </section> :
                        <section id="slides">
                          <section id="slide">
                                <section id="slideCard">    
                                    <h1 id="question" className='completed'>Quiz Completed</h1> 
                                    
                                    <section id="score">
                                        {pending ?
                                           <> <Alert className='alertQuiz' type="error" description="Please Attempt all the questions to submit" /> </>:
                                            <Alert className='alertQuiz' type="success" description={ desc} />
                                            
                                    }
                                      
                                    </section>

                                      <section id="navigationBtn">
                                          <Button type="danger" onClick={() => {if(index>0) setIndex(index-1) }}>Previous Question</Button>
                                          <Button type="primary" id="next" onClick={() => { if(index<quiz.length) setIndex(index + 1) }}>Next Question</Button>
                                      </section>
                              </section>
                          </section>
                          <section id="navigation">
                                <div id="quizNavigator">
                                    <section id="navHead">
                                        <Progress type="circle" id="prog" strokeColor={{ '0%': '#108ee9','100%': '#87d068',}} percent="100"/>
                                        <h3>{quizDetail.title}<br/>  <p>{quizDetail.description}</p></h3>
                                    </section>
                                    <section id="nav">
              
                            {quiz?
                                quiz.map((que,index) => (
                                    <section key={index}>
                                        {
                                            que.answer.attempted ?<>
                                                {
                                            que.answer.answer ?
                                                <Progress className='progress' type="circle" percent={100} format={percent => `${que.answer.question+1}`} /> :
                                                <Progress className='progress' type="circle" percent={100} format={percent => `${que.answer.question+1}`}  status="exception"     />
                                                } </>:
                                            <Progress className='progress' type="circle" percent={99} format={percent => `${que.answer.question+1}`} /> 
                                        }
                      </section>
              ))
                  :
              <p></p>
              }

      </section>
                                </div>
                               
                          </section>
                       </section>
                        
                }

                </>
               :
            <section>{fallback}</section>
            }
        </div>
    )
}