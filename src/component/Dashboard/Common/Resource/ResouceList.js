import React, { lazy, useState, useEffect } from 'react'
import { useParams} from "react-router-dom" 
import { useSelector,useDispatch} from "react-redux"
import { Input} from "antd"
import { resourceIcon } from "Constant/antIcons"
import { daleteResources, getResources, getTopics, insertResource, updateResource } from 'Constant/apiUrl'
import { insertData, removeData, updateData } from 'api/Api'
import { deleteIcon,editIcon } from "Constant/antIcons"
import { fallback } from 'Constant/navList'
import { Button} from "antd"
import { resourceForm } from "Constant/formData"
import Modals from 'component/Common/Modal/Modals'
import Forms from "component/Common/Form/Forms"
import ResourceCard from 'component/Common/Cards/Resource/ResouceCard'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import "../Topics/List/TopicsList.css"

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))

export default function ResourceList() {

    const { Search } = Input;
    let { topicId} = useParams()
    let [resourceList, setResourceList] = useState([]);
    let [resource, setResource] = useState([]);
    let [resourceId, setResourceId] = useState([]);
    let [topics, setTopics] = useState([]);
    let data = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [key, setKey] = useState(false);
    let userRole = useSelector(state => state.authReducer.user.role)

    useEffect(() => { dataActionCreator.getAdminData(dispatch, getResources, dataActions.setResource) }, [dispatch,key])
    useEffect(() => { dataActionCreator.getAdminData(dispatch, getTopics, dataActions.setTopic) }, [dispatch])
   
    useEffect(() => {
        if (data.resources !== undefined) {
          
            if (topicId) {
                setResource(data.resources.data.filter(e => e.topicId === topicId));
                setResourceList(data.resources.data.filter(e => e.topicId === topicId));
            }
            else { 
                setResource(data.resources.data);
                setResourceList(data.resources.data);
            }
            if (data.topics !== undefined) { 
                setTopics(data.topics.data)
            }
        }
    }, [data,topicId])

    const handleOk = (value) => {
        setIsModalVisible(false);
        setIsModalVisible2(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
        setIsModalVisible2(false);
    };

    const submit = (value) => {
        console.log(value)

        if (value.topic) {
            let id = topics.find(e => {
                if (e.title === value.topic) {
                    return e._id
                }
                return 0;
            })

            value.topicId = id;
        }
        else { 
            value.topicId = "";
        }

        insertData(insertResource, value)
        resource.push(value);
        setResource(resource)
        
    }
    
    const submit2 = (value) => {
        updateData(updateResource+resourceId, value)
        setKey(!key)
    }

    const update = (resourceId) => { 
        setResourceId(resourceId)
        setIsModalVisible2(true)
    }
    
    
    const handleRemove = (resourceId) => { 
        setResourceList(resource.filter(e => e._id !== resourceId))
        removeData(daleteResources + resourceId)
        
    }

    const onSearch = (value) => {
        let filtered = resource.filter(val => val.title.includes(value) ||  val.description.includes(value) );
        setResourceList(filtered)
    }; 

    
    let res = resourceList.filter(f => f._id === resourceId)
    const Form = JSON.parse(JSON.stringify(resourceForm));
    delete Form._id
    delete Form.topicId
    
    let Form2;
    if (res.length > 0) {
        Form2 = JSON.parse(JSON.stringify(res[0]));
        delete Form2._id
        delete Form2.__v
        delete Form2.topicId
    } else {
         Form2 = JSON.parse(JSON.stringify([]));
    }
    const form = <Forms about="false" populate={false}  topics={topics} submitFunction={submit} formFields={Form} buttonValue="Add Resource" /> 
    const form2 = <Forms about="false" populate={true} topics={topics} submitFunction={submit2} formFields={Form2} buttonValue="Update Resource" /> 
    const search = <> <section className="search"><Search placeholder="Search Topics" onSearch={onSearch} style={{ width: 200 }} /></section></>
    
    return (
        <div>
           
            <section className='resource-container'>
                <DashboardHeader title="Resources List" icon={resourceIcon} rightComponent={search} />
                {userRole==="admin" ? <Button id="addItem" type="primary" onClick={() => { setIsModalVisible(true)}}>Add Resource</Button> :<></>}
                <section id="topics">
                {
                    resourceList.length > 0 ?
                    resourceList.map((resource, index) => (
                        <ResourceCard key={index} update={update} editIIcon={editIcon} delIcon={deleteIcon} id={resource._id} remove={handleRemove} title={resource.title} description={resource.description} image={resource.image} url={resource.url}  />
                        )) :
                    <section>{fallback}</section>
                    }
                </section>
            </section>
            <Modals animation={false} data={form} title="Add Topic" isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
            <Modals animation={false} data={form2} title="Update Topic" isModalVisible={isModalVisible2} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    )
}
