import React, {useEffect, lazy,useState} from 'react'
import { Input} from "antd"
import { trophyIcon } from "Constant/antIcons"
import { fallback } from 'Constant/navList'
import { useDispatch, useSelector } from 'react-redux'
import { getQuizList } from 'Constant/apiUrl'
import { deleteIcon } from 'Constant/antIcons'
import { deleteQuizList } from 'Constant/apiUrl'
import { removeData } from 'api/Api'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import "../Topics/List/TopicsList.css"

const QuizCard = lazy(() => import('component/Common/Cards/Quiz/Quiz'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))

export default function QuizList() {
    
    const { Search } = Input;
    let [quizList, setQuizList] = useState([]);
    let [quiz, setQuiz] = useState([]);
    let data = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()

    useEffect(() => { dataActionCreator.getAdminData(dispatch, getQuizList, dataActions.setQuiz) }, [dispatch])
    useEffect(() => {
        if (data.quiz !== undefined) {
            setQuiz(data.quiz.data);
            setQuizList(data.quiz.data);
        }
    }, [data])

    const handleRemove = (quizId) => { 
        setQuizList(quiz.filter(e => e._id !== quizId))
        removeData(deleteQuizList + quizId)
        
    }

    const onSearch = (value) => {
        let filtered = quiz.filter(val => val.title.includes(value) ||  val.category.includes(value) );
        setQuizList(filtered)
    }; 

    const search =<> <section className="search"><Search placeholder="Search quiz" onSearch={onSearch} style={{ width: 200 }} /></section></>

    return (
        <div>
          <section className='quiz-container'>
                <DashboardHeader title="Quiz List" icon={trophyIcon} rightComponent={search} />
                {quizList.length > 0 ?
                    <section id="quiz">
                        {quizList.map((topic, index) => (<QuizCard key={index} delIcon={deleteIcon} id={topic._id} remove={handleRemove} route={"/quizContent/" + topic._id} image={topic.image} title={topic.title} category={topic.category} />))}
                    </section>
                    :
                     < section > { fallback }</section>
                }
            </section>
        </div>
    )
}

