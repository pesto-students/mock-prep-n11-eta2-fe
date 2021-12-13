import React, {useState, lazy} from 'react'
import "./InterviewerList.css";
import { idCardIcon } from "constant/antIcons"
import { Input } from 'antd';
import { interviewers } from "constant/data"
import { interviewerFilter} from "constant/navList"

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const Filter = lazy(() => import('component/Common/Filter/Filter'))

export default function InterviewerList() {

    const { Search } = Input;

    let [interviewerList, setInterviewer] = useState(interviewers);
 
    const handleFilter = (value) => {
       
        let filtered = interviewers.filter(fil => value.some(e => fil.skills.includes(e)));
        setInterviewer(filtered)

        if (value.length === 0) {
            setInterviewer(interviewers)
        }
    }
    
    const onSearch = (value) => {
        let filtered = interviewers.filter(val => val.name.includes(value));
        setInterviewer(filtered)
    };
    
    const search = <><Filter filterOptions={interviewerFilter} filterFunction={handleFilter} placeholder="Filter Interviewer" /><section className="search"><Search placeholder="Search Interviewer" onSearch={onSearch} style={{ width: 200 }} /></section></>
       
    return (
        <div className="interviewerListContainer">
            <DashboardHeader title="Onboard Interviewers" icon={idCardIcon} rightComponent={search}  />
        </div>
    )
}