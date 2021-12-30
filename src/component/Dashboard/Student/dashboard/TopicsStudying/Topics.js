import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import TopicsCard from 'component/Common/Cards/Topics/TopicsCard'
import { getTopics} from 'constant/apiUrl'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import "./TopicsStudying.css"

export default function Topics(student) {
    
    const dispatch = useDispatch()
    let [topicsList, setTopicsList] = useState([]);
    let data = useSelector(state => state.dataReducer)
    let studentData = {
        ongoingTopics: ["61c3a3b5719ad651ce51e29c","61c3a4f7719ad651ce51e2a1"]
    }


    useEffect(() => { dataActionCreator.getAdminData(dispatch, getTopics, dataActions.setTopic) }, [dispatch])
    useEffect(() => {
        if (data.topics !== undefined && student.length>0) {

            let topic = data.topics.data.filter(f => { 
                student.forEach(s => { s.learnings.topics.topicId === f._id;})
            });

            setTopicsList(topic);
        }
    }, [data,studentData.ongoingTopics]);
       
    return (
        <div className='topicsOngoing'>
            <h2 className='title'>My Topics</h2>
            <section id="topics">
                    {
                    topicsList.length > 0 ?
                        topicsList.map((topic, index) => (
                            <TopicsCard dashboard={true} key={index} title={topic.title} id={topic._id}  description={topic.description} image={topic.image}  />
                        )) :
                    <section>No Topics yet...</section>
                    }
            </section>
        </div>
    )
}
