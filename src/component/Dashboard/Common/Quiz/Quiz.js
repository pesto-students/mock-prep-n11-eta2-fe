import React, { lazy,useState} from 'react'
import "../Topics/List/TopicsList.css"
import { Input} from "antd"
import { trophyIcon } from "constant/antIcons"
import { quiz } from 'constant/data'
import { topicsFilter } from 'constant/navList'
import { adminNavList } from 'constant/navList'
import { topicForm } from 'constant/formData'

const Filter = lazy(() => import('component/Common/Filter/Filter'))
const QuizCard = lazy(() => import('component/Common/Cards/Quiz/Quiz'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))

export default function QuizList() {
    
    let [topicsList, setInterviewer] = useState(quiz);

    const { Search } = Input;
    const interviewerForm = JSON.parse(JSON.stringify(topicForm));
    delete interviewerForm.id


    const handleFilter = (value) => {

        let filtered = quiz.filter(fil => value.some(e => fil.title.includes(e)));
        setInterviewer(filtered)

        if (value.length === 0) {
            setInterviewer(quiz)
        }
    }
    
    const onSearch = (value) => {
        let filtered = quiz.filter(val => val.title.includes(value) );
       
        setInterviewer(filtered)
    }; 

    const search = <><Filter filterOptions={topicsFilter} filterFunction={handleFilter} placeholder="Filter Quiz" /><section className="search"><Search placeholder="Search Quiz" onSearch={onSearch} style={{ width: 200 }} />
       
    </section></>

    return (
        <div>
            <SideNav sideNavList={adminNavList} userName="Admin"></SideNav>
            <section className='topics-container'>
                <DashboardHeader title="Quiz List" icon={trophyIcon} rightComponent={search} />
                <section className="topics">
                    {topicsList.map((topic,index) => (<QuizCard key={index} route={"/admin/quiz/"+topic.id} pic={topic.img} title={topic.title} count={topic.count} />))}
                </section>
            </section>
        </div>
    )
}
