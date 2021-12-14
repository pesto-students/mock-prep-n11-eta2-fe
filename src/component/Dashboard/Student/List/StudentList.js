import React, {useState, lazy} from 'react'
import { smileIcon,deleteIcon } from "constant/antIcons"
import { Input,Tabs,Button} from 'antd';
import { students } from "constant/data"
import { Link} from "react-router-dom"
import { interviewerFilter} from "constant/navList"
import "./StudentList.css"
import { adminNavList} from "constant/navList"

const Filter = lazy(() => import('component/Common/Filter/Filter'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const InterviewerCardList = lazy(() => import("component/Common/Cards/Interviewer/interviewerCardList"))

export default function InterviewerList() {

    const { Search } = Input;
    const { TabPane } = Tabs;

    let [interviewerList, setInterviewer] = useState(students); 
    let newInterviewerList = interviewerList.filter(int => int.listed === true)
    let existingInterviewerList = interviewerList.filter(int => int.listed !== true)
 
    const handleFilter = (value) => {
      
        let filtered = students.filter(fil => value.some(e => fil.skills.includes(e)));
        setInterviewer(filtered)

        if (value.length === 0) {
            setInterviewer(students)
        }
    }
    
    const onSearch = (value) => {
        let filtered = students.filter(val => val.name.includes(value) || val.company.includes(value) || val.designation.includes(value));
       
        setInterviewer(filtered)
    }; 

    const deList = (profileId) => { 
      
        students.forEach(x => { 
            if (x.id === profileId) { 
                x.listed = false
            }
        })
        
        setInterviewer(students)
    }

    const removeProfile = (profileId) => {
        setInterviewer(interviewerList.filter(e => e.id!==profileId))
    }; 

    const addProfile = (profileId) => { 
       
        students.forEach(x => { 
            if (x.id === profileId) { 
                x.listed = true
            }
        })
        setInterviewer(students)
    }

    const search = <><Filter filterOptions={interviewerFilter} filterFunction={handleFilter} placeholder="Filter Interviewer" /><section className="search"><Search placeholder="Search Interviewer" onSearch={onSearch} style={{ width: 200 }} /></section></>

    const viewProfileButton = <Button className='viewProfileBtn'>View Profile</Button>
 
    return (
        <>
          <SideNav sideNavList={adminNavList} userName="Admin"></SideNav>
            <div className="interviewerListContainer">

                <DashboardHeader title="Student List" icon={smileIcon} rightComponent={search}  />

                <section className="interviewersList">
                <Tabs defaultActiveKey="1" >
                        <TabPane tab="Listed Students" key="1">
                            <section className='interviewerListCard'>
                                {newInterviewerList.map(interviewer => (
                                    <InterviewerCardList  key={interviewer.id}  btn1={<Link to={`/admin/studentProfile/${interviewer.id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { deList(interviewer.id)}} className='removeProfileBtn'>DeList Student</Button>} delIcon={<Link to="#" onClick={() => removeProfile(interviewer.id)} className="closeProfile">{deleteIcon}</Link>} className='interviewerlistProfile' skills={interviewer.skills}  name={interviewer.name} pic={interviewer.pic} designation={interviewer.designation} company={interviewer.company}    contact={interviewer.contact} />
                                ))}
                            </section>
                    </TabPane>
                    <TabPane tab="Delisted Students" key="2">
                            <section className='interviewerListCard'>
                                {existingInterviewerList.map(interviewer => (
                                    <InterviewerCardList  key={interviewer.id}  btn1={<Link to={`/admin/interviewerProfile/${interviewer.id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { addProfile(interviewer.id) }} className='addProfileBtn'>List Student</Button>} delIcon={<Link to="#" onClick={() => removeProfile(interviewer.id)} className="closeProfile">{deleteIcon}</Link>}   className='interviewerlistProfile' skills={interviewer.skills}name={interviewer.name} pic={interviewer.pic} designation={interviewer.designation} company={interviewer.company} contact={interviewer.contact} />
                                ))}
                            </section>
                    </TabPane>
                    </Tabs>
                </section>

            </div>
        </>
    )
}