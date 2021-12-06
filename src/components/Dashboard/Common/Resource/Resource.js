import React, { useState} from 'react'
import DashHeader from '../Header/DashHeader'
import { Feedback, } from "@material-ui/icons"
import { Input } from "antd"
import "./Resource.css"
import { resources,resourceFilter } from '../../../../constant/data'

import Filter from '../../../Primary Components/Filter/Filter'

export default function Resource() {
    const { Search } = Input;

    let [resourceList, setResources] = useState(resources);
    const handleFilter = (value) => {
       
        let filtered = resources.filter(res =>value.includes(res.title));
        setResources(filtered)

        if (value.length === 0) {
            setResources(resources)
        }
    }
    
    const onSearch = (value) => {
        let filtered = resources.filter(res => res.title.includes(value));
        setResources(filtered)
    };

    return (
        <div className="resource-container">
            <DashHeader icon={<Feedback />} title="Resources" rightComponent={<>
                <Filter filterOptions={resourceFilter} filterFunction={handleFilter} placeholder="Filter Resources" />
                <section className="search">    
                    <Search placeholder="Search Resource"  onSearch={onSearch} style={{ width: 200 }} />
                </section></>
            } />
            <section className="resourse">
            {resourceList.map(resource => (
                       <div className='resource'>
                       <img className="res-img" src={resource.img} alt="resource-pic"/>
                       <section className="res-desc">
                             <h3 className="res-head">{resource.title}</h3>
                             <p>{resource.description} <a target="_blank" rel="noreferrer" href={resource.url}>Click to read</a></p>
                         </section>
                     {/* <AutoDeleteIcon className="res-icon"/>    
                     <EditIcon className="res-icon"/> */}
                   </div>
  
                 ))}
            </section>
        </div>
    )
}
