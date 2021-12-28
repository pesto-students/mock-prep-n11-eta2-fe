import React, { lazy, useState, useEffect } from 'react'
import { useParams} from "react-router-dom" 
import { useSelector,useDispatch} from "react-redux"
import { Input} from "antd"
import { resourceIcon } from "constant/antIcons"
import {  getResources, getTopics } from 'constant/apiUrl'
import { fallback } from 'constant/navList'
import ResourceCard from 'component/Common/Cards/Resource/ResouceCard'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import "./ResourceList.css"

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))

export default function ResourceList() {

    const { Search } = Input;
    let { topicId} = useParams()
    let [resourceList, setResourceList] = useState([]);
    let [resource, setResource] = useState([]);
    let [topic, setTopics] = useState([]);
    let data = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()
  
    useEffect(() => { dataActionCreator.getAdminData(dispatch, getResources, dataActions.setResource) }, [dispatch])
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

    const onSearch = (value) => {
        console.log(topic)
        let filtered = resource.filter(val => val.title.includes(value) ||  val.description.includes(value) );
        setResourceList(filtered)
    }; 

    const search = <> <section className="search"><Search placeholder="Search Resources" onSearch={onSearch} style={{ width: 200 }} /></section></>
    
    return (
        <div>  
            <section className='resource-container'>
                <DashboardHeader title="Resources List" icon={resourceIcon} rightComponent={search} />
                <section className="resource">
                    {resourceList.length > 0 ?resourceList.map((resource, index) => (<ResourceCard key={index} {...resource}  />)) :<section>{fallback}</section>}
                </section>
            </section>
        </div>
    )
}
