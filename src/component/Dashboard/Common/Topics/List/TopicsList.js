import React, { lazy,useState,useEffect} from 'react'
import { DBIcon } from "Constant/antIcons"
import { deleteTopic, getTopics, insertTopic } from 'Constant/apiUrl'
import { Input} from "antd"
import { useSelector, useDispatch } from "react-redux"
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import { fallback } from 'Constant/navList'
import TopicsCard from 'component/Common/Cards/Topics/TopicsCard'
import { deleteIcon } from 'Constant/antIcons'
import "./TopicsList.css"
import { insertData, removeData } from 'api/Api'
import { Button } from 'antd'
import Modals from 'component/Common/Modal/Modals'
import { topicForm } from 'Constant/formData'
import Forms from 'component/Common/Form/Forms';


const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))

export default function TopicsList() {

    const { Search } = Input;
   
    const [isModalVisible, setIsModalVisible] = useState(false);
    let [topicsList, setTopicsList] = useState([]);
    let [topics, setTopics] = useState([]);
    let data = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()
   
    
    useEffect(() => { dataActionCreator.getAdminData(dispatch, getTopics, dataActions.setTopic) }, [dispatch])
    useEffect(() => { if (data.topics !== undefined) { setTopics(data.topics.data); setTopicsList(data.topics.data) } }, [data])
  
    
    const onSearch = (value) => {
        let filtered = topics.filter(val => val.title.includes(value) ||  val.description.includes(value) );
        setTopicsList(filtered)
    }; 

    const handleRemove = (topicId) => { 
        removeData(deleteTopic+topicId)
    }

    const handleOk = (value) => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const submit = (value) => { 
       
        insertData(insertTopic, value)

        
    }

    
    const Form = JSON.parse(JSON.stringify(topicForm));
    console.log(Form)
    delete Form.id
    const form = <Forms populate={false} submitFunction={submit} formFields={Form} buttonValue="Add Topic" /> 
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
                            <TopicsCard key={index} title={topic.title} delIcon={deleteIcon} id={topic._id} remove={handleRemove} description={topic.description} image={topic.image} route={`/admin/resourceList/${topic._id}`}  />
                        )) :
                    <section>{fallback}</section>
                    }
                </section>
                <Modals animation={false} data={form} title="Add Topic" isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
            </section>
        </div>
    )
}
