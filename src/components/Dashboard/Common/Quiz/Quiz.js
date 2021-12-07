import React, { useState} from 'react'
import DashHeader from '../Header/DashHeader'
import { QuestionOutlined }  from "@ant-design/icons"
import { Input,Card,Button } from "antd"
import "./Quiz.css"
import { quizList,resourceFilter } from '../../../../constant/data'

import Filter from '../../../Primary Components/Filter/Filter'

export default function QuizList() {
    
    const { Search } = Input;
    const { Meta } = Card;

    let [quizes, setQuiz] = useState(quizList);
    const handleFilter = (value) => {
       
        let filtered = quizList.filter(res =>value.includes(res.title));
        setQuiz(filtered)

        if (value.length === 0) {
            setQuiz(quizList)
        }
    }
    
    const onSearch = (value) => {
        let filtered = quizList.filter(res => res.title.includes(value));
        setQuiz(filtered)
    };

    return (
        <div className="quiz-container">
            <DashHeader icon={<QuestionOutlined />} title="Quiz" rightComponent={<>
                <Filter filterOptions={resourceFilter} filterFunction={handleFilter} placeholder="Filter Quiz" />
                <section className="search">    
                    <Search placeholder="Search Quiz"  onSearch={onSearch} style={{ width: 200 }} />
                </section></>
            } />
            <section className="quiz-list">
                {quizes.map(quiz => (
                    <Card
                        className="quiz-card"
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="image" className="quizBanner" src={quiz.img} />}
                        >
                        <Meta title={quiz.title} description={"Number of Questions " + quiz.count} />
                        <Button primary type="primary" style={{margin:"2vh 0"}}>Start Quiz</Button>
                     </Card>
                ))}
            </section>   
           
        </div>
    )
}
