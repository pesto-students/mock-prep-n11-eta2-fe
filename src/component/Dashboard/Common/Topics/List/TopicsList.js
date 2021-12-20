import React, { lazy,useState,useEffect} from 'react'
import "./TopicsList.css"
import { Input} from "antd"
import { DBIcon } from "Constant/antIcons"
import { Button } from 'antd'
import { fallback, topicsFilter } from 'Constant/navList'
import { adminNavList } from 'Constant/navList'
import { topicForm } from 'Constant/formData'
import Forms from 'component/Common/Form/Forms';
import { getData } from 'api/Api'
import { getTopics, insertTopic } from 'Constant/apiUrl'
import { insertData } from 'api/Api'

const Filter = lazy(() => import('component/Common/Filter/Filter'))
const TopicsCard = lazy(() => import('component/Common/Cards/Topics/TopicsCard'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const Modals = lazy(() => import("component/Common/Modal/Modals"))

export default function TopicsList() {

    let [topics, setInterviewer] = useState([]);
    
    let [topicsList, setInterviewerList] = useState([]);

    useEffect(() => { 
        const getInterviewer = async () => { 
            const interviewer = await getData(getTopics);
           
            if (interviewer) { setInterviewer(interviewer); setInterviewerList(interviewer) }
        }
        getInterviewer()
    },[])
    
    const { Search } = Input;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const interviewerForm = JSON.parse(JSON.stringify(topicForm));
    delete interviewerForm.id


    const handleFilter = (value) => {

        let filtered = topics.filter(fil => value.some(e => fil.title.includes(e)));
        setInterviewer(filtered)

        if (value.length === 0) {
            setInterviewer(topics)
        }
    }
    
    const onSearch = (value) => {

        let filtered = topicsList.filter(val => val.title.includes(value) );
        setInterviewerList(filtered)  
        if (value === "") { 
            setInterviewerList(topics)  
        }
    }; 

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = (value) => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const submit = (value) => { 
        console.log(value)
        insertData(insertTopic, value)
        
    }

    if (topicsList.length > 0) { 
        console.log(topicsList)
    }

    const data = <Forms populate={false} submitFunction={submit} formFields={interviewerForm} buttonValue="Add Topic" /> 

    const search = <><Filter filterOptions={topicsFilter} filterFunction={handleFilter} placeholder="Filter Topics" /><section className="search"><Search placeholder="Search Topics" onSearch={onSearch} style={{ width: 200 }} />
       
    </section></>

    return (
        <div>
            <SideNav sideNavList={adminNavList} userName="Admin"></SideNav>
            <section className='topics-container'>
                <DashboardHeader title="Topics List" icon={DBIcon} rightComponent={search} />
            
                    <Button onClick={showModal} id="addTopicBtn" type="primary">Add Topics</Button>
                {topicsList.length > 0 ?
                    <section className="topics">
                        {topicsList.map((topic, index) => (<TopicsCard className="topicsCard" key={index} route={"/admin/resourceList/" + topic.id} image={topic.image} title={topic.title} description={topic.description} />))}
                    </section>
                    :
                    <section>{fallback}</section>
                }
            </section>
            <Modals animation={false} data={data} title="Add Topic" isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    )
}
