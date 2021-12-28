import React, { useState, useEffect, lazy } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { idCardIcon } from "constant/antIcons"
import { Input,Tabs} from 'antd';
import { deleteInterviewer, getInterviewers, updateInterviewer } from 'constant/apiUrl';
import { removeData, updateData } from 'api/Api';
import dataActionCreators from 'Redux/Action Creators/dataActionCreators';
import dataActions from 'Redux/Actions/dataAction';
import "./InterviewerList.css"
import alertActionCreator from 'Redux/Action Creators/alertActionCreator';
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const InterviewerCardList = lazy(() => import("component/Common/Cards/Interviewer/interviewerCardList"))

export default function InterviewerList() {

    const { Search } = Input;
    const { TabPane } = Tabs;

    const dispatch = useDispatch()
    let [interviewers,setInterviewers] = useState([])
    let [interviewerList,setInterviewerList] = useState([])

    let userRole = useSelector(state => state.authReducer.user.role)
    let data = useSelector(state => state.dataReducer)

    useEffect(() => { dataActionCreators.getAdminData(dispatch, getInterviewers, dataActions.setInterviewer) }, [dispatch])
    useEffect(() => {
        if (data.interviewerData ) { 
            setInterviewerList(data.interviewerData.data)
            setInterviewers(data.interviewerData.data)
        }
    }, [data])
    
    const onSearch = (value) => {
        let filtered = interviewers.filter(val => val.name.includes(value) ||  val.designation.includes(value) ||  val.company.includes(value) ||  val.skills.includes(value)   );
        setInterviewerList(filtered)
    }; 

    const deleteProfile = async (profileId) => {
       
        await removeData(deleteInterviewer + profileId, "Interviewer")
        setInterviewerList(interviewerList.filter(e => e._id !== profileId))
        alertActionCreator.setError(dispatch, "  Deleted profile from mockprep")
    }; 

    const listProfile = (profileId) => {    
      
        interviewerList.forEach(x => { 
            if (x._id === profileId) { 
                x.onboarded = true;
                updateData(updateInterviewer + x._id)
                alertActionCreator.setMessage(dispatch,x.name +"  Onboarded")
            }
        })
    
        setInterviewerList(interviewerList)
      
    }

    const deListProfile = (profileId) => { 
       
        interviewerList.forEach(x => { 
            if (x._id === profileId) { 
                x.onboarded = false;
                updateData(updateInterviewer + x._id, x)
                alertActionCreator.setError(dispatch,x.name + " Removed")
            }
        })
       
        setInterviewerList(interviewerList)
    }
    
    const search = <><section className="search"><Search placeholder="Search Interviewer by any parameter" onSearch={onSearch} style={{ width: 200 }} /></section></>

 
    return (
        <>
            <div className="interviewerListContainer">
                    <DashboardHeader title={userRole === "admin" ? "Onboard Interviewers":"Book Interviewers"} icon={idCardIcon} rightComponent={search}  />
                    <section className="interviewerTabContainer">
                        {search}
                        {
                            userRole && userRole === "admin" ?
                                <Tabs defaultActiveKey="1" >
                                    <TabPane tab="New Interviewers" key="1">
                                    <section className='interviewerList'>
                                            {interviewerList.map((interviewer,index) => (
                                                    <section key={index}> {!interviewer.onboarded ? <InterviewerCardList interviewer={interviewer} handleList={listProfile} handleDelete={deleteProfile}  key={interviewer._id}/>:<></>}</section>   
                                            ))}
                                    </section>
                                    </TabPane>
                                    <TabPane tab="Existing Interviewers" key="2">
                                        <section  className='interviewerList'>
                                            {interviewerList.map((interviewer,index) => (
                                               <section  key={index}> {interviewer.onboarded ? <InterviewerCardList interviewer={interviewer} handleDelist={deListProfile} handleDelete={deleteProfile} key={interviewer._id}/>:<></>}</section> 
                                            ))}
                                        </section>
                                    </TabPane>
                                </Tabs>
                            :
                            <section className='interviewerList'>
                                {interviewerList.map((interviewer,index) => (
                                   
                                        <section  key={index}> {!interviewer.listed ? <InterviewerCardList interviewer={interviewer} key={interviewer._id}/>:<></>}</section> 
                                ))}
                            </section>
                        }
                    </section>
            </div>
        </>
    )
}




              