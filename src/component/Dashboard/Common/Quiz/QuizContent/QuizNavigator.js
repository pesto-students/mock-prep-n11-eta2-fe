import React, { useEffect} from 'react'
import { Progress } from 'antd';
import { Alert } from 'antd';

export default function QuizNavigator({ details, information, questions, index ,percent}) {
    
    const onClose = (e) => {
        console.log(e, 'I was closed.');
    };
    
    let attempt = questions[index].answer.attempted;
    let answer = questions[index].answer.answer;
    return (
        <div id="quizNavigator">
            <section id="navHead">
                 <Progress type="circle" id="prog" strokeColor={{ '0%': '#108ee9','100%': '#87d068',}} percent={percent}/>
                <h3>{details.title}<br/>  <p>{details.description}</p></h3>
            </section>
            <section id="collapse">
                {attempt ?
                    
                    <>
                        {answer ?
                         <Alert
                         description={information}
                         type="success"
                         closable
                         onClose={onClose}
                        /> :
                            <Alert
                            description={information}
                            type="error"
                            closable
                            onClose={onClose}
                        /> 
                    }
                    </>
                   : 
                   <></>
                }
            </section>
            <section id="nav">
              
                {questions?
                    questions.map((que,index) => (
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
    )
}
