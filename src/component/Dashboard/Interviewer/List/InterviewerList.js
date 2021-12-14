import React, {useState, lazy} from 'react'
import { idCardIcon,deleteIcon } from "constant/antIcons"
import { Input,Tabs,Button} from 'antd';
import { interviewers } from "constant/data"
import { Link} from "react-router-dom"
import { interviewerFilter} from "constant/navList"
import "./InterviewerList.css"
import { adminNavList} from "constant/navList"

const Filter = lazy(() => import('component/Common/Filter/Filter'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const InterviewerCardList = lazy(() => import("component/Common/Cards/Interviewer/interviewerCardList"))

export default function InterviewerList() {

    const { Search } = Input;
    const { TabPane } = Tabs;

    let [interviewerList, setInterviewer] = useState(interviewers);
    
    let newInterviewerList = interviewerList.filter(int => int.onboarded !== true)
    let existingInterviewerList = interviewerList.filter(int => int.onboarded === true)
 
    const handleFilter = (value) => {
        console.log(value)
        let filtered = interviewers.filter(fil => value.some(e => fil.skills.includes(e)));
        setInterviewer(filtered)

        if (value.length === 0) {
            setInterviewer(interviewers)
        }
    }
    
    const onSearch = (value) => {
        let filtered = interviewers.filter(val => val.name.includes(value) || val.company.includes(value) || val.designation.includes(value));
       
        setInterviewer(filtered)
    }; 
    
    const removeProfile = (profileId) => {
        console.log(profileId)
        setInterviewer(interviewerList.filter(e=>e.id!==profileId))
    }; 

    const addProfile = (profileId) => { 
       
        interviewers.forEach(x => { 
            if (x.id === profileId) { 
                x.onboarded = true
            }
        })
        setInterviewer(interviewers)
    }

    const deList = (profileId) => { 
       
        interviewers.forEach(x => { 
            if (x.id === profileId) { 
                x.onboarded = false
            }
        })

        setInterviewer(interviewers)
    }
    
    const search = <><Filter filterOptions={interviewerFilter} filterFunction={handleFilter} placeholder="Filter Interviewer" /><section className="search"><Search placeholder="Search Interviewer" onSearch={onSearch} style={{ width: 200 }} /></section></>

    const viewProfileButton = <Button className='viewProfileBtn'>View Profile</Button>
 
    return (
        <>
          <SideNav sideNavList={adminNavList} userName="admin"></SideNav>
            <div className="interviewerListContainer">

                <DashboardHeader title="Onboard Interviewers" icon={idCardIcon} rightComponent={search}  />

                <section className="interviewersList">
                <Tabs defaultActiveKey="1" >
                        <TabPane tab="New Interviewers" key="1">
                            <section className='interviewerListCard'>
                                {newInterviewerList.map(interviewer => (
                                    <InterviewerCardList  key={interviewer.id} btn1={<Link to={`/admin/interviewerProfile/${interviewer.id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { addProfile(interviewer.id)}} className='addProfileBtn'>Add Interviewer</Button>} delIcon={<Link to="#" onClick={() => removeProfile(interviewer.id)} className="closeProfile">{deleteIcon}</Link>} className='interviewerlistProfile' skills={interviewer.skills}  name={interviewer.name} pic={interviewer.pic} designation={interviewer.designation} company={interviewer.company}    contact={interviewer.contact} />
                                ))}
                            </section>
                    </TabPane>
                    <TabPane tab="Exisiting Interviewers" key="2">
                            <section className='interviewerListCard'>
                                {existingInterviewerList.map(interviewer => (
                                    <InterviewerCardList key={interviewer.id} btn1={<Link to={`/admin/interviewerProfile/${interviewer.id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { deList(interviewer.id) }} className='removeProfileBtn'>Remove Interviewer</Button>} delIcon={<Link to="#" onClick={() => removeProfile(interviewer.id)} className="closeProfile">{deleteIcon}</Link>}   className='interviewerlistProfile' skills={interviewer.skills}  name={interviewer.name} pic={interviewer.pic} designation={interviewer.designation} company={interviewer.company} contact={interviewer.contact} />
                                ))}
                            </section>
                    </TabPane>
                    </Tabs>
                </section>

            </div>
        </>
    )
}