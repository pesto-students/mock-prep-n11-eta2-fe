import React, { lazy,useState,useEffect} from 'react'
import "../Topics/List/TopicsList.css"
import { Input} from "antd"
import { resourceIcon } from "constant/antIcons"
import { Button } from 'antd'
import { resources } from 'constant/data'
import { fallback, topicsFilter } from 'constant/navList'
import { adminNavList } from 'constant/navList'
import { resourceForm } from 'constant/formData'
import Forms  from 'component/Common/Form/Forms';
import { getData } from 'api/Fetch'
import { getResources, insertResource } from 'constant/apiUrl'
import { insertData } from 'api/Insert'

const Filter = lazy(() => import('component/Common/Filter/Filter'))
const ResourceCard = lazy(() => import('component/Common/Cards/Resource/ResouceCard'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const Modals = lazy(() => import("component/Common/Modal/Modals"))

export default function ResourceList() {
    
    let [topics, setInterviewer] = useState([]);

    let [topicsList, setInterviewerList] = useState([]);
    

    useEffect(() => { 
        const getInterviewer = async () => { 
            const interviewer = await getData(getResources);
           
            if (interviewer) { setInterviewer(interviewer); setInterviewerList(interviewer) }
        }
        getInterviewer()
    },[])

    const { Search } = Input;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const interviewerForm = JSON.parse(JSON.stringify(resourceForm));
    delete interviewerForm.id


    const handleFilter = (value) => {

        let filtered = resources.filter(fil => value.some(e => fil.title.includes(e)));
        setInterviewer(filtered)

        if (value.length === 0) {
            setInterviewer(resources)
        }
    }
    
    const onSearch = (value) => {
        let filtered = resources.filter(val => val.title.includes(value) );
       
        setInterviewer(filtered)
        if (value === "") { 
            setInterviewer(topics)
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
        insertData(insertResource,value)
    }

    const data = <Forms populate={false} submitFunction={submit} formFields={interviewerForm} buttonValue="Add Topic" /> 

    const search = <><Filter filterOptions={topicsFilter} filterFunction={handleFilter} placeholder="Filter Resource" /><section className="search"><Search placeholder="Search Resource" onSearch={onSearch} style={{ width: 200 }} />
       
    </section></>

    return (
        <div>
            <SideNav sideNavList={adminNavList} userName="Admin"></SideNav>
            <section className='topics-container'>
                <DashboardHeader title="Resources List" icon={resourceIcon} rightComponent={search} />
                <Button onClick={showModal} id="addTopicBtn" type="primary">Add Resource</Button>
                {topicsList.length > 0 ?
                    <section className="topics">
                        {topicsList.map((res, index) => (
                            <ResourceCard key={index} description={res.description} image={res.image} url={res.url} title={res.title} />
                        ))}
                    </section>
                    :
                    <section>{fallback}</section>
                }
            </section>
            <Modals animation={false} data={data} title="Add Resource" isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    )
}
