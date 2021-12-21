import React, { useState, useEffect, lazy } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { idCardIcon,deleteIcon } from "Constant/antIcons"
import { Input,Tabs,Button} from 'antd';
import { Link} from "react-router-dom"
import { fallback} from "Constant/navList"
import { deleteInterviewer, getInterviewers, updateInterviewer } from 'Constant/apiUrl';
import { removeData, updateData } from 'api/Api';
import dataActionCreators from 'Redux/Action Creators/dataActionCreators';
import dataActions from 'Redux/Actions/dataAction';
import "../List/InterviewerList.css"

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const InterviewerCardList = lazy(() => import("component/Common/Cards/Interviewer/interviewerCardList"))

export default function InterviewerList() {

    const { Search } = Input;
    const { TabPane } = Tabs;

    let [interviewerList,setInterviewerList] = useState([])
    let [interviewers,setInterviewer] = useState([])
    let [key,setKey] = useState(false)
    let [newInterviewerList,setNewList] = useState([])
    let [existingInterviewerList, setExistingList] = useState([])
    
    let interData = useSelector(state => state.dataReducer)

    const dispatch = useDispatch()

    useEffect(() => { dataActionCreators.getAdminData(dispatch,getInterviewers,dataActions.setInterviewer)},[dispatch])
    useEffect(() => { if (interData.interviewerData != undefined) { setInterviewer(interData.interviewerData.data); setInterviewerList(interData.interviewerData.data) } }, [interData])
    useEffect(() => { if (interviewers.length > 0) { setNewList(interviewerList.filter(int => int.onboarded !== true)); setExistingList(interviewerList.filter(int => int.onboarded === true))}}, [key,interviewers,interviewerList])
      
    const onSearch = (value) => {
        let filtered = interviewers.filter(val => val.name.includes(value) ||  val.designation.includes(value) ||  val.company.includes(value) ||  val.skills.includes(value)   );
        setInterviewerList(filtered)
        console.log(interviewers)
    }; 
    
    const removeProfile = async (profileId) => {
        setInterviewer(interviewers.filter(e => e._id !== profileId))
        const status = await removeData(deleteInterviewer+profileId,"Interviewer")
        setKey(!key)
    }; 

    const addProfile = (profileId) => { 
       
        interviewers.forEach(x => { 
            if (x._id === profileId) { 
                x.onboarded = true;
                updateData(updateInterviewer+x._id,x)
            }
        })
        setInterviewer(interviewers)
        setKey(!key)
    }

    const deList = (profileId) => { 
       
        interviewers.forEach(x => { 
            if (x._id === profileId) { 
                x.onboarded = false;
                updateData(updateInterviewer+x._id,x)
            }
        })

        setInterviewer(interviewers)
        setKey(!key)
    }
    
    const search = <><section className="search"><Search placeholder="Search Interviewer by any parameter" onSearch={onSearch} style={{ width: 200 }} /></section></>

    const viewProfileButton = <Button className='viewProfileBtn'>View Profile</Button>
 
    return (
        <>
            <div className="interviewerListContainer">

                <DashboardHeader title="Onboard Interviewers" icon={idCardIcon} rightComponent={search}  />

                {interviewerList.length>0 ?
                    <section className="interviewersList">
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="New Interviewers" key="1">
                                <section className='interviewerListCard'>
                                    {newInterviewerList.map(interviewer => (
                                        <InterviewerCardList key={interviewer._id} btn1={<Link to={`/admin/interviewerProfile/${interviewer._id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { addProfile(interviewer._id) }} className='addProfileBtn'>Onboard Interviewer</Button>} delIcon={<Link to="#" onClick={() => removeProfile(interviewer._id)} className="closeProfile">{deleteIcon}</Link>} className='interviewerlistProfile' skills={interviewer.skills} name={interviewer.name} image={interviewer.image} designation={interviewer.designation} company={interviewer.company} contact={interviewer.contact} />
                                    ))}
                                </section>
                                    
                            </TabPane>
                            <TabPane tab="Exisiting Interviewers" key="2">
                                <section className='interviewerListCard'>
                                    {existingInterviewerList.map(interviewer => (
                                        <InterviewerCardList key={interviewer._id} btn1={<Link to={`/admin/interviewerProfile/${interviewer._id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { deList(interviewer._id) }} className='removeProfileBtn'>DeList Interviewer</Button>} delIcon={<Link to="#" onClick={() => removeProfile(interviewer._id)} className="closeProfile">{deleteIcon}</Link>} className='interviewerlistProfile' skills={interviewer.skills} name={interviewer.name} image={interviewer.image} designation={interviewer.designation} company={interviewer.company} contact={interviewer.contact} />
                                    ))}
                                </section>
                            </TabPane>
                        </Tabs>
                    </section>
                    :<section>{fallback}</section>
                }
            </div>
        </>
    )
}