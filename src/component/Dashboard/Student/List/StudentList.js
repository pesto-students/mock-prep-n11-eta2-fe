import React, { useState, useEffect, lazy } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { idCardIcon } from "constant/antIcons"
import { Input,Tabs} from 'antd';
import { deleteStudent, getStudents, updateStudent } from 'constant/apiUrl';
import { removeData, updateData } from 'api/Api';
import dataActionCreators from 'Redux/Action Creators/dataActionCreators';
import dataActions from 'Redux/Actions/dataAction';
import "./StudentList.css"
import alertActionCreator from 'Redux/Action Creators/alertActionCreator';
const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const InterviewerCardList = lazy(() => import("component/Common/Cards/Interviewer/StudentCardList"))

export default function StudentList() {

    const { Search } = Input;
    const { TabPane } = Tabs;

    const dispatch = useDispatch()
    let [interviewers,setInterviewers] = useState([])
    let [interviewerList,setInterviewerList] = useState([])

    let userRole = useSelector(state => state.authReducer.user.role)
    let data = useSelector(state => state.dataReducer)

    useEffect(() => { dataActionCreators.getAdminData(dispatch, getStudents, dataActions.setStudents) }, [dispatch])
    useEffect(() => {
        if (data.studentData ) { 
            setInterviewerList(data.studentData.data)
            setInterviewers(data.studentData.data)
        }
    }, [data,interviewerList])
    
    const onSearch = (value) => {
        let filtered = interviewers.filter(val => val.name.includes(value) ||  val.degree.includes(value) ||  val.company.includes(value) ||  val.skills.includes(value)   );
        setInterviewerList(filtered)
    }; 

    const deleteProfile = async (profileId) => {
       
        await removeData(deleteStudent + profileId)
        setInterviewerList(interviewerList.filter(e => e._id !== profileId))
        alertActionCreator.setError(dispatch, "  Deleted profile from mockprep")
    }; 

    const listProfile = (profileId) => {    
      
        interviewerList.forEach(x => { 
            if (x._id === profileId) { 
                x.onboarded = true;
                updateData(updateStudent + x._id)
                alertActionCreator.setMessage(dispatch,x.name +"  Listed")
            }
        })
    
        setInterviewerList(interviewerList)
      
    }

    const deListProfile = (profileId) => { 
       
        interviewerList.forEach(x => { 
            if (x._id === profileId) { 
                x.onboarded = false;
                updateData(updateStudent + x._id)
                alertActionCreator.setEror(dispatch,x.name +"  Delisted")
            }
        })
    
        setInterviewerList(interviewerList)
    }
    
    const search = <><section className="search"><Search placeholder="Search Student by any parameter" onSearch={onSearch} style={{ width: 200 }} /></section></>

 
    return (
        <>
            <div className="interviewerListContainer">
                    <DashboardHeader title={userRole === "admin" ? "List Students":"Student List"} icon={idCardIcon} rightComponent={search}  />
                    <section className="interviewerTabContainer">
                        {search}
                        {
                            userRole && userRole === "admin" ?
                                <Tabs defaultActiveKey="1" >
                                    <TabPane tab="New Students" key="1">
                                    <section className='interviewerList'>
                                            {interviewerList.map((interviewer,index) => (
                                                    <section key={index}> {!interviewer.onboarded ? <InterviewerCardList interviewer={interviewer} handleList={listProfile} handleDelete={deleteProfile}  key={interviewer._id}/>:<></>}</section>   
                                            ))}
                                    </section>
                                    </TabPane>
                                    <TabPane tab="Listed Students" key="2">
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




              