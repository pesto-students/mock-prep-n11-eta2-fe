import React, {useState,useEffect, lazy} from 'react'
import { idCardIcon,deleteIcon } from "Constant/antIcons"
import { Input,Tabs,Button} from 'antd';
import { Link} from "react-router-dom"
import { fallback, interviewerFilter} from "Constant/navList"
import "./InterviewerList.css"
import { adminNavList} from "Constant/navList"
import { getData } from 'api/Api';
import { deleteInterviewer, getInterviewers, updateInterviewer } from 'Constant/apiUrl';
import { removeData ,updateData} from 'api/Api';


const Filter = lazy(() => import('component/Common/Filter/Filter'))
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))
const InterviewerCardList = lazy(() => import("component/Common/Cards/Interviewer/interviewerCardList"))

export default function InterviewerList() {

    const { Search } = Input;
    const { TabPane } = Tabs;
   
    let [interviewerList,setInterviewerList] = useState([])
    let [interviewers,setInterviewer] = useState([])

    useEffect(() => { 
        const getInterviewer = async () => { 
            const interviewer = await getData(getInterviewers);
            if (interviewer) { setInterviewer(interviewer); setInterviewerList(interviewer) }
        }
        getInterviewer()
    },[])


    let newInterviewerList;
    let existingInterviewerList;
  
    if (interviewers.length>0) { 
        newInterviewerList = interviewerList.filter(int => int.onboarded !== true)
        existingInterviewerList = interviewerList.filter(int => int.onboarded === true)
    }

    const handleFilter = (value) => {
        let filtered = interviewerList.filter(fil => value.some(e => fil.skills.includes(e)));
        setInterviewerList(filtered)

        if (value.length === 0) {
            setInterviewerList(interviewers)
        }
    }
    
    const onSearch = (value) => {
        let filtered = interviewers.filter(val => val.name.includes(value) ||  val.designation.includes(value) ||  val.company.includes(value)    );
        setInterviewerList(filtered)    
    }; 
    
    const removeProfile = async (profileId) => {
        setInterviewer(interviewers.filter(e => e._id !== profileId))
        const status = await removeData(deleteInterviewer+profileId,"Interviewer")
        console.log(status);
    }; 

    const addProfile = (profileId) => { 
       
        interviewers.forEach(x => { 
            if (x._id === profileId) { 
                x.onboarded = true;
                updateData(updateInterviewer+x._id,x)
            }
        })
        setInterviewer(interviewers)

    }

    const deList = (profileId) => { 
       
        interviewers.forEach(x => { 
            if (x._id === profileId) { 
                x.onboarded = false;
                updateData(updateInterviewer+x._id,x)
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

                {interviewerList.length>0 ?
                    <section className="interviewersList">
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="New Interviewers" key="1">
                                <section className='interviewerListCard'>
                                    {newInterviewerList.map(interviewer => (
                                        <InterviewerCardList key={interviewer._id} btn1={<Link to={`/admin/interviewerProfile/${interviewer._id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { addProfile(interviewer._id) }} className='addProfileBtn'>Add Interviewer</Button>} delIcon={<Link to="#" onClick={() => removeProfile(interviewer._id)} className="closeProfile">{deleteIcon}</Link>} className='interviewerlistProfile' skills={interviewer.skills} name={interviewer.name} image={interviewer.image} designation={interviewer.designation} company={interviewer.company} contact={interviewer.contact} />
                                    ))}
                                </section>
                                    
                            </TabPane>
                            <TabPane tab="Exisiting Interviewers" key="2">
                                <section className='interviewerListCard'>
                                    {existingInterviewerList.map(interviewer => (
                                        <InterviewerCardList key={interviewer._id} btn1={<Link to={`/admin/interviewerProfile/${interviewer._id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { deList(interviewer._id) }} className='removeProfileBtn'>Remove Interviewer</Button>} delIcon={<Link to="#" onClick={() => removeProfile(interviewer._id)} className="closeProfile">{deleteIcon}</Link>} className='interviewerlistProfile' skills={interviewer.skills} name={interviewer.name} image={interviewer.image} designation={interviewer.designation} company={interviewer.company} contact={interviewer.contact} />
                                    ))}
                                </section>
                            </TabPane>
                        </Tabs>
                    </section>
                    : <section>{fallback}</section>
                }
            </div>
        </>
    )
}