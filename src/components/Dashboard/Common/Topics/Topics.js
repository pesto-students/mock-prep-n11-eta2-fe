import React, { useState} from 'react'
import "./Topics.css"
import { Input } from "antd"
import { topics, topicsFilter } from "../../../../constant/data"
import DashHeader from '../Header/DashHeader'
import { SubjectOutlined } from '@material-ui/icons'
import Filter from '../../../Primary Components/Filter/Filter'
import { Card,Button} from "antd"
export default function Topics() {
    
    const { Search } = Input;
    const { Meta } = Card;

    let [topicsList, setTopics] = useState(topics);
    const handleFilter = (value) => {
       
        let filtered = topics.filter(res =>value.includes(res.title));
        setTopics(filtered)

        if (value.length === 0) {
            setTopics(topics)
        }
    }

    const onSearch = (value) => {
        let filtered = topics.filter(res => res.title.includes(value));
        setTopics(filtered)
    };

    return (
        <section className="topics">
            <DashHeader icon={<SubjectOutlined />} title="Topics" rightComponent={<><Filter filterOptions={topicsFilter} filterFunction={handleFilter} placeholder="Filter Topics" />
                <section className="search">    
                    <Search placeholder="Search Topics"  onSearch={onSearch} style={{ width: 200 }} />
                </section></>
            } />

        <section className="quiz-list">
                {topicsList.map((quiz,index) => (
                    <Card
                        key={index}
                        className="quiz-card"
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="pic" className="quizBanner" src={quiz.img} />}
                        >
                        <Meta title={quiz.title} description={"Learn Basic to advance of " + quiz.title} />
                        <Button primary type="primary" style={{margin:"2vh 0"}}>Start Learning</Button>
                     </Card>
                ))}
            </section>   
            
        </section>
    )
}
