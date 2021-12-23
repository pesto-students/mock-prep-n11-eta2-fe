import React, { lazy,useState,useEffect} from 'react'
import { DBIcon,editIcon } from "constant/antIcons"
import { deleteTopic, getTopics, insertTopic } from 'constant/apiUrl'
import { Input} from "antd"
import { useSelector, useDispatch } from "react-redux"
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import { fallback } from 'constant/navList'
import TopicsCard from 'component/Common/Cards/Topics/TopicsCard'
import { deleteIcon } from 'constant/antIcons'
import "./TopicsList.css"
import { insertData, removeData, updateData } from 'api/Api'
import { Button } from 'antd'
import Modals from 'component/Common/Modal/Modals'
import { topicForm } from 'constant/formData'
import Forms from 'component/Common/Form/Forms';
import { updateTopic } from 'constant/apiUrl'
import { C } from 'caniuse-lite/data/features/aac'

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))

export default function TopicsList() {

    const { Search } = Input;
   
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [topicId, setTopicId] = useState("");
    let [topicsList, setTopicsList] = useState([]);
    let [topics, setTopics] = useState([]);
    let [key, setKey] = useState(false)
    let data = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()
   
    
    useEffect(() => { dataActionCreator.getAdminData(dispatch, getTopics, dataActions.setTopic) }, [dispatch, key])
    useEffect(() => { if (data.topics !== undefined) { setTopics(data.topics.data); setTopicsList(data.topics.data) } }, [data, topics, key]);
  
  
    const onSearch = (value) => {
        let filtered = topics.filter(val => val.title.includes(value) || val.description.includes(value));
        setTopicsList(filtered)
    };

    const handleRemove = (topicId) => {
        removeData(deleteTopic + topicId)
        setKey(!key)
    }

    const handleOk = (value) => {
        setIsModalVisible(false);
        setIsModalVisible2(false)
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
        setIsModalVisible2(false)
    };

    const submit = (value) => {
      
        insertData(insertTopic, value)
        topics.push(value);
        setTopics(topics)
        
    }

    const submit2 = (value) => {
        updateData(updateTopic+topicId, value)
        setKey(!key)
    }

    const update = (topicId) => { 
        setTopicId(topicId)
        setIsModalVisible2(true)
    }
    
    const Form = JSON.parse(JSON.stringify(topicForm));
    delete Form.id

   
    let topic = topics.filter(f => f._id === topicId)
    
    let Form2;
    if (topic.length > 0) {
        Form2 = JSON.parse(JSON.stringify(topic[0]));
        delete Form2._id
        delete Form2.__v
    } else {
         Form2 = JSON.parse(JSON.stringify([]));
    }


    // delete Form2._id
    // delete Form2.__v


    const form = <Forms about="false" populate={false} submitFunction={submit} formFields={Form} buttonValue="Add Topic" /> 
    const form2 = <Forms about="false" populate={true} submitFunction={submit2} formFields={Form2} buttonValue="Update Topic" /> 
    const search =<> <section className="search"><Search placeholder="Search Topics" onSearch={onSearch} style={{ width: 200 }} /></section></>
       
    return (
        <div>
            <section className='topics-container'>
                <DashboardHeader title="Topics List" icon={DBIcon} rightComponent={search} />
                <Button id="addItem" type="primary" onClick={() => { setIsModalVisible(true)}}>Add Topics</Button>
                <section id="topics">
                    {
                    topicsList.length > 0 ?
                        topicsList.map((topic, index) => (
                            <TopicsCard key={index} title={topic.title} update={update} editIcon={editIcon} delIcon={deleteIcon} id={topic._id} remove={handleRemove} description={topic.description} image={topic.image} route={`/admin/resourceList/${topic._id}`}  />
                        )) :
                    <section>{fallback}</section>
                    }
                </section>
                <Modals animation={false} data={form} title="Add Topic" isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
                <Modals animation={false} data={form2} title="Update Topic" isModalVisible={isModalVisible2} handleOk={handleOk} handleCancel={handleCancel} />
            </section>
        </div>
    )
}
