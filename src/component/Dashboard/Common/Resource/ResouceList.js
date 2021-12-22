import React, { lazy, useState, useEffect } from 'react'
import { useParams} from "react-router-dom" 
import { useSelector,useDispatch} from "react-redux"
import { Input} from "antd"
import { resourceIcon } from "Constant/antIcons"
import { getResources } from 'Constant/apiUrl'
import ResourceCard from 'component/Common/Cards/Resource/ResouceCard'
import dataActionCreator from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import "../Topics/List/TopicsList.css"
import { removeData } from 'api/Api'
import { deleteIcon } from "Constant/antIcons"
import { fallback } from 'Constant/navList'



const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))


export default function ResourceList() {

    
    
    const { Search } = Input;
    let { topicId} = useParams()
    let [resourceList, setResourceList] = useState([]);
    let [resource, setResource] = useState([]);
    let data = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()

    useEffect(() => { dataActionCreator.getAdminData(dispatch, getResources, dataActions.setResource) }, [dispatch])
    useEffect(() => {
        if (data.resources !== undefined) {
            setResource(data.resources.data);
            setResourceList(data.resources.data);
        }
    }, [data])

    
    
    const handleRemove = (resourceId) => { 
        setResourceList(resource.filter(e => e._id !== resourceId))
        // removeData(deleteRsource+resourceId)
    }

    const onSearch = (value) => {
        let filtered = resource.filter(val => val.title.includes(value) ||  val.description.includes(value) );
        setResourceList(filtered)
    }; 

    const search =<> <section className="search"><Search placeholder="Search resource" onSearch={onSearch} style={{ width: 200 }} /></section></>
    return (
        <div>
            <section className='resource-container'>
                <DashboardHeader title="Resources List" icon={resourceIcon} rightComponent={search} />
                <section id="topics">
                {
                    resourceList.length > 0 ?
                    resourceList.map((resource, index) => (
                            <ResourceCard key={index} delIcon={deleteIcon} id={resource._id} remove={handleRemove} title={resource.title} description={resource.description} image={resource.image} url={resource.url}  />
                        )) :
                    <section>{fallback}</section>
                    }
                </section>
            </section>
        </div>
    )
}
