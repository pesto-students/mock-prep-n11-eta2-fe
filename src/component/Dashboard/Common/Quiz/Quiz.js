import React, {useEffect, lazy,useState} from 'react'
import "../Topics/List/TopicsList.css"
import { Input} from "antd"
import { trophyIcon } from "constant/antIcons"
import { fallback, topicsFilter } from 'constant/navList'
import { adminNavList } from 'constant/navList'
import { topicForm } from 'constant/formData'
import { getQuizList } from 'constant/apiUrl'
import { useDispatch, useSelector } from 'react-redux'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'

const Filter = lazy(() => import('component/Common/Filter/Filter'))
const QuizCard = lazy(() => import('component/Common/Cards/Quiz/Quiz'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))

export default function QuizList() {
    
    const dispatch = useDispatch()
    let [quiz, setQuiz] = useState([]);
    let [topicsList, setTopicsList] = useState([]);
    let quizData = useSelector(state => state.dataReducer.quiz)
    useEffect(() => { 
        dataActionCreator.getAdminData(dispatch,getQuizList,dataActions.setQuiz)
    },[])

    useEffect(() => {
        if (quizData) { setQuiz(quizData); setTopicsList(quizData) }
    },[quizData])

    const { Search } = Input;
    const interviewerForm = JSON.parse(JSON.stringify(topicForm));
    delete interviewerForm.id


    const handleFilter = (value) => {

        let filtered = quiz.filter(fil => value.some(e => fil.title.includes(e)));
        setQuiz(filtered)

        if (value.length === 0) {
            setQuiz(quiz)
        }
    }
    
    const onSearch = (value) => {
        let filtered = quiz.filter(val => val.title.includes(value) );
       
        setQuiz(filtered)
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

