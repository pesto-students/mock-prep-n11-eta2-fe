import React, {useEffect, lazy,useState} from 'react'
import "../Topics/List/TopicsList.css"
import { Input} from "antd"
import { trophyIcon } from "Constant/antIcons"
import { fallback, topicsFilter } from 'Constant/navList'
import { adminNavList } from 'Constant/navList'
import { topicForm } from 'Constant/formData'
import { getData } from 'api/Api'
import { getQuizList } from 'Constant/apiUrl'

const Filter = lazy(() => import('component/Common/Filter/Filter'))
const QuizCard = lazy(() => import('component/Common/Cards/Quiz/Quiz'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))

export default function QuizList() {
    
    
    let [quiz, setInterviewer] = useState([]);

    let [topicsList, setInterviewerList] = useState([]);
    
    useEffect(() => { 
        const getInterviewer = async () => { 
            const interviewer = await getData(getQuizList);
           
            if (interviewer) { setInterviewer(interviewer); setInterviewerList(interviewer) }
            console.log(interviewer)
        }
        getInterviewer()
    },[])

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
                {topicsList.length > 0 ?
                    <section className="topics">
                        {topicsList.map((topic, index) => (<QuizCard key={index} route={"/quiz/quizContent/" + topic._id} image={topic.image} title={topic.title} category={topic.category} />))}
                    </section>
                    :
                < section > { fallback }</section>
                }
            </section>
        </div>
    )
}

