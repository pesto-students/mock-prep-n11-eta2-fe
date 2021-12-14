import React, { lazy,useState} from 'react'
import "./TopicsList.css"
import { Input} from "antd"
import { DBIcon } from "constant/antIcons"
import { Button } from 'antd'
import { topics } from 'constant/data'
import { topicsFilter } from 'constant/navList'
import { adminNavList } from 'constant/navList'
import { topicForm } from 'constant/formData'
import Forms  from 'component/Common/Form/Forms';

const Filter = lazy(() => import('component/Common/Filter/Filter'))
const TopicsCard = lazy(() => import('component/Common/Cards/Topics/TopicsCard'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const Modals = lazy(() => import("component/Common/Modal/Modals"))


export default function TopicsList() {
    
    let [topicsList, setInterviewer] = useState(topics);

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
        let filtered = topics.filter(val => val.title.includes(value) );
       
        setInterviewer(filtered)
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
  
        let ran = Math.floor(Math.random() * 100)
        
        topics.forEach(topic => { 
            if (topic.id !== ran) { 
                value.id = ran;
            }
        })
       topics.push(value)
 
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
              
                <section className="topics">
                    
                    {topicsList.map((topic,index) => (<TopicsCard key={index} route={"/admin/resourceList/"+topic.id} pic={topic.img} title={topic.title} description={topic.description} />))}
                </section>
            </section>
            <Modals animation={false} data={data} title="Add Topic" isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    )
}
