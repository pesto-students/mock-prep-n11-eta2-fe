import React, {useState,useEffect, lazy} from 'react'
import { smileIcon,deleteIcon } from "constant/antIcons"
import { Input,Tabs,Button} from 'antd';
import { Link} from "react-router-dom"
import { fallback, interviewerFilter} from "constant/navList"
import "./StudentList.css"
import { adminNavList} from "constant/navList"
import { deleteStudent, getStudents, updateStudent } from 'constant/apiUrl';
import { getData } from 'api/Fetch';
import { updateData } from 'api/Update';
import { removeData } from 'api/Delete';

const Filter = lazy(() => import('component/Common/Filter/Filter'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const InterviewerCardList = lazy(() => import("component/Common/Cards/Interviewer/interviewerCardList"))

export default function InterviewerList() {

    
    const { Search } = Input;
    const { TabPane } = Tabs;


    let [students, setStudents] = useState([])
    let [interviewerList, setInterviewer] = useState([]); 

    useEffect(() => { 
        const getInterviewer = async () => { 
            const interviewer = await getData(getStudents);
            if (interviewer) { setStudents(interviewer); setInterviewer(interviewer) }
          
        }
        getInterviewer()
    }, [])
    
    let newInterviewerList;
    let existingInterviewerList;
  
    if (students.length>0) { 
        newInterviewerList = interviewerList.filter(int => int.listed !== true)
        existingInterviewerList = interviewerList.filter(int => int.listed === true)
    }



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
            if (x._id === profileId) { 
                x.listed = false;
                updateData(updateStudent+x._id,x)
            }
        })
    
        setInterviewer(students)
    }

    const removeProfile = (profileId) => {
        setInterviewer(interviewerList.filter(e => e._id !== profileId))
        removeData(deleteStudent+profileId)
    }; 

    const addProfile = (profileId) => { 
       console.log("add")
        students.forEach(x => { 
            if (x._id === profileId) { 
                x.listed = true
                updateData(updateStudent+x._id,x)
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
                {interviewerList.length>0?
                <section className="interviewersList">
                <Tabs defaultActiveKey="1" >
                        <TabPane tab="Listed Students" key="1">
                            <section className='interviewerListCard'>
                                {existingInterviewerList.map(interviewer => (
                                    <InterviewerCardList  key={interviewer._id}  btn1={<Link to={`/admin/studentProfile/${interviewer._id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { deList(interviewer._id)}} className='removeProfileBtn'>DeList Student</Button>} delIcon={<Link to="#" onClick={() => removeProfile(interviewer._id)} className="closeProfile">{deleteIcon}</Link>} className='interviewerlistProfile' skills={interviewer.skills}  name={interviewer.name} image={interviewer.image} degree={interviewer.degree} company={interviewer.company}    contact={interviewer.contact} />
                                ))}
                            </section>
                    </TabPane>
                    <TabPane tab="Delisted Students" key="2">
                            <section className='interviewerListCard'>
                                {newInterviewerList.map(interviewer => (
                                    <InterviewerCardList  key={interviewer._id}  btn1={<Link to={`/admin/interviewerProfile/${interviewer._id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { addProfile(interviewer._id) }} className='addProfileBtn'>List Student</Button>} delIcon={<Link to="#" onClick={() => removeProfile(interviewer._id)} className="closeProfile">{deleteIcon}</Link>}   className='interviewerlistProfile' skills={interviewer.skills}name={interviewer.name} image={interviewer.image} degree={interviewer.degree} company={interviewer.company} contact={interviewer.contact} />
                                ))}
                            </section>
                    </TabPane>
                    </Tabs>
                </section>:
                <section>{fallback}</section>}

            </div>
        </>
    )
}