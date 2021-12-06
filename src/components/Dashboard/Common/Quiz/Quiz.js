import React, { useState} from 'react'
import DashHeader from '../Header/DashHeader'
import { Feedback, } from "@material-ui/icons"
import { Input,Card } from "antd"
import "./Quiz.css"
import { resources,resourceFilter } from '../../../../constant/data'

import Filter from '../../../Primary Components/Filter/Filter'


export default function Quiz() {
    
    const { Search } = Input;
    const { Meta } = Card;

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
        <div className="quiz-container">
             <DashHeader icon={<Feedback />} title="Resources" rightComponent={<>
                <Filter filterOptions={resourceFilter} filterFunction={handleFilter} placeholder="Filter Quiz" />
                <section className="search">    
                    <Search placeholder="Search Quiz"  onSearch={onSearch} style={{ width: 200 }} />
                </section></>
            } />
            {/* <section className="quiz-list">
          
                {resourceList.map(quiz => (
                    <Card
                        className="quiz-card"
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={ } />}
                        >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                     </Card>
                ))}
            </section>    */}
           
        </div>
    )
}
