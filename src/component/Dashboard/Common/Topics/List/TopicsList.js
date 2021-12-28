import React, {useState,useEffect, lazy} from 'react'
import { DBIcon } from "constant/antIcons"
import { Input} from "antd"
import { useSelector } from "react-redux"
import "./TopicsList.css"
import { deleteTopic, getTopics } from 'constant/apiUrl'
import { useDispatch } from 'react-redux'
import dataActions from 'Redux/Actions/dataAction'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import TopicsCard from 'component/Common/Cards/Topics/TopicsCard'
import alertActionCreator from "Redux/Action Creators/alertActionCreator"
import { removeData } from 'api/Api'

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))

export default function TopicsList() {

    const { Search } = Input;
    const dispatch = useDispatch()
    let data = useSelector(state => state.dataReducer)
    let [topics, setTopics] = useState([])
    let [topicsList, setTopicsList] = useState([]);

    useEffect(() => { dataActionCreator.getAdminData(dispatch, getTopics, dataActions.setTopic) }, [dispatch])
    useEffect(() => {
        if (data && data.topics) { 
            setTopics(data.topics.data)
            setTopicsList(data.topics.data)
        }
    }, [data])
  
    const handleEdit=(topicId) => { 
        
       
    }           

    const handleDelete = (topicId) =>{ 

        setTopics(topics.filter(e => e._id !== topicId))
        removeData(deleteTopic+topicId)
        alertActionCreator.setError(dispatch, "Topic Deleted")
    }

    const onSearch = (value) => {
        let filtered = topicsList.filter(val => val.title.includes(value) ||  val.description.includes(value) );
        setTopics(filtered)
    }; 

 
    const search =<> <section className="search"><Search placeholder="Search Topics" onSearch={onSearch} style={{ width: 200 }} /></section></>

    return (
    
        <div>
           
            <section className='topics-container'>
                <DashboardHeader title="Topics List" icon={DBIcon} rightComponent={search} />
              
                <section className="interviewerTabContainer">
                <section className='responsiveSearch'>{search}</section>
                    <section className="topicListContainer">{topics.length > 0 ?
                        <>{topics.map((topic) => (
                            <TopicsCard key={topic._id} handleEdit={handleEdit} handleDelete={handleDelete} topic={topic} />))}</> : <></>}
                    </section>
                </section>
            </section>  
        </div>
    )
}
