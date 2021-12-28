import React, { lazy, useState, useEffect } from 'react'
import { useSelector,useDispatch} from "react-redux"
import { Input} from "antd"
import { questionIcon } from "constant/antIcons"
import {  getQuizList } from 'constant/apiUrl'

import { fallback } from 'constant/navList'


import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
// import "./QuizList.css"
import QuizCard from 'component/Common/Cards/Quiz/Quiz'

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))

export default function QuizList() {

    const { Search } = Input;
    let [quizList, setQuizList] = useState([]);
    let [quiz, setQuiz] = useState([]);
 
    let data = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()
  
    useEffect(() => { dataActionCreator.getAdminData(dispatch, getQuizList, dataActions.setQuiz) }, [dispatch])
    useEffect(() => { 
        if (data.quiz) { 
            setQuiz(data.quiz.data);
            setQuizList(data.quiz.data)
        }
     }, [data])

    const onSearch = (value) => {
        let filtered = quiz.filter(val => val.title.includes(value) ||  val.category.includes(value) );
        setQuizList(filtered)
    }; 

    const search = <> <section className="search"><Search placeholder="Search Quiz" onSearch={onSearch} style={{ width: 200 }} /></section></>
    
    return (
        <div>  
            <section className='resource-container'>
                <DashboardHeader title="Quiz List" icon={questionIcon} rightComponent={search} />
                <section className="resource">
                    {quizList.length > 0 ?quizList.map((quiz, index) => (<QuizCard key={index} quiz={quiz}  />)) :<section>{fallback}</section>}
                </section>
            </section>
        </div>
    )
}
