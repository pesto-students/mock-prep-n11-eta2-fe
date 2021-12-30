import React, { useState,useEffect} from 'react'
import { Input,Tabs } from "antd"
import { CalenderIcon, userAddIcon } from "constant/antIcons"
import { useSelector,useDispatch } from 'react-redux'
import "./Interview.css"
import DashboardHeader from 'component/Dashboard/Common/Header/DashboardHeader'
import dataActionCreators from 'Redux/Action Creators/dataActionCreators'
import dataActions from 'Redux/Actions/dataAction'
import { getInterviews } from 'constant/apiUrl'

export default function Interviews() {
    
    const { TabPane } = Tabs;
    const { Search } = Input;
    
    let [interviews, setInterviews] = useState([])
    let [interviewsList, setInterviewsList] = useState([])

    
    let data = useSelector(state => state.dataReducer)
    let auth = useSelector(state => state.authReducer)
    const dispatch = useDispatch()

    useEffect(() => { dataActionCreators.getAdminData(dispatch, getInterviews, dataActions.setInterviews) }, [dispatch])
    useEffect(() => {

        if (data.interviews && auth.user) {
           
            setInterviews(data.interviews.data.filter(e => e.interviewer.id === auth.user.id))
            setInterviewsList(data.interviews.data.filter(e => e.interviewer.id === auth.user.id))
        }
    }, [data,auth])

    console.log(interviews)

    const onSearch = (value) => {
        let filtered = interviewsList.filter(val => val.student.name.includes(value) ||   val.topic.includes(value));
        setInterviews(filtered)
    
    }; 

    const search = <><section className="search" id="search1"><Search placeholder="Search Interviewer by any parameter" onSearch={onSearch} style={{ width: 200 }} /></section></>
    const search2 = <><section className="search" id="search2"><Search placeholder="Search Interviewer by any parameter" onSearch={onSearch} style={{ width: 200 }} /></section></>
 
    return (
        <div>
            <section id="upcoming-interviews-dashboard">
                <DashboardHeader title="Upcoming Interviews" icon={userAddIcon} rightComponent={search} />
                <div id="search2">{search2}</div>
                <section className="upcomingInterviews">
                  
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="Upcoming Interviews" key="1">
                            { interviews.length>0   ?
                                <section className='interviewsListContainer'>
                                    {interviews.map((e, index) => (<>
                                        {e.status !== "completed" ?
                                            <section key={index} id="interviewInfo">
                                                            
                                              <span id="date">
                                                  <i className="calender">{CalenderIcon}</i>
                                                  <p>{e.date}</p>
                                              </span>
                                              <p>{e.time} </p>
                                              <p>{e.student.name}</p>
                                                  
                                              <span>
                                                  <p>{e.topic}</p>
                                              </span>
                                              <span>
                                                  <a href={e.meetingUrl}>Join Meets</a>
                                              </span>
                                            </section> :
                                            <></>
                                        }
                                    </>))}
                                </section>:
                            <></>
                            }
                            </TabPane>
                            <TabPane tab="Past Interviewers" key="2">
                            { interviews.length>0   ?
                                    <section className='interviewsListContainer'>
                                    {interviews.map((e, index) => (<>
                                        {e.status === "completed" ?
                                            <section key={index} id="interviewInfo">
                                                            
                                              <span id="date">
                                                  <i className="calender">{CalenderIcon}</i>
                                                  <p>{e.date}</p>
                                              </span>
                                              <p>{e.time} </p>
                                              <p>{e.student.name}</p>
                                                  
                                              <span>
                                                  <p>{e.topic}</p>
                                              </span>
                                              <span>
                                                  <a href={e.meetingUrl}>Join Meets</a>
                                              </span>
                                            </section> :
                                            <>
                                          
                                            </>
                                        }
                                    </>))}
                                </section>:
                            <></>
                            }
                            </TabPane>
                        </Tabs>
                    
                </section>

            </section>
        </div>
    )
}
