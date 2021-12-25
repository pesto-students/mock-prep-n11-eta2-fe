import React, { useState, useEffect, lazy } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { idCardIcon,deleteIcon } from "constant/antIcons"
import { Input,Tabs,Button} from 'antd';
import { Link} from "react-router-dom"
import { fallback} from "constant/navList"
import { deleteStudent, getStudents, updateStudent } from 'constant/apiUrl';
import { removeData, updateData } from 'api/Api';
import dataActionCreators from 'Redux/Action Creators/dataActionCreators';
import dataActions from 'Redux/Actions/dataAction';
import "../List/StudentList.css"
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))
const InterviewerCardList = lazy(() => import("component/Common/Cards/Interviewer/interviewerCardList"))

export default function StudentList() {

    const { Search } = Input;
    const { TabPane } = Tabs;
   

    let [studentList,setstudentList] = useState([])
    let [students,setstudent] = useState([])
    let [key,setKey] = useState(false)
    let [newstudentList,setNewList] = useState([])
    let [existingstudentList, setExistingList] = useState([])
    
    let interData = useSelector(state => state.dataReducer)
    let userRole = useSelector(state => state.authReducer.user.role)
    const dispatch = useDispatch()

    useEffect(() => { dataActionCreators.getAdminData(dispatch,getStudents,dataActions.setStudents)},[dispatch])
    useEffect(() => { if (interData.studentData !== undefined) { setstudent(interData.studentData.data); setstudentList(interData.studentData.data) } }, [interData])
    useEffect(() => { if (students.length > 0) { setNewList(studentList.filter(int => int.onboarded !== true)); setExistingList(studentList.filter(int => int.onboarded === true))}}, [key,students,studentList])
      
    const onSearch = (value) => {

      
        let filtered = students.filter(val => val.name.includes(value) || val.company.includes(value) || val.skills.includes(value) );
        setstudentList(filtered)

       
    }; 
    
    const removeProfile = async (profileId) => {
        await removeData(deleteStudent+profileId)
        setstudent(students.filter(e => e._id !== profileId))
        setstudentList(students.filter(e => e._id !== profileId))
    }; 

    const addProfile = (profileId) => { 
       
        students.forEach(x => { 
            if (x._id === profileId) { 
                x.onboarded = true;
                updateData(updateStudent+x._id,x)
            }
        })
        setstudent(students)
        setKey(!key)
    }

    const deList = (profileId) => { 
       
        students.forEach(x => { 
            if (x._id === profileId) { 
                x.onboarded = false;
                updateData(updateStudent+x._id,x)
            }
        })

        setstudent(students)
        setKey(!key)
    }
    
    const search = <><section className="search"><Search placeholder="Search student by any parameter" onSearch={onSearch} style={{ width: 200 }} /></section></>

    const viewProfileButton = <Button className='viewProfileBtn'>View Profile</Button>
 
    return (
        <>
            <div className="studentListContainer">

                <DashboardHeader title="Students List" icon={idCardIcon} rightComponent={search}  />

                {studentList.length > 0 ?
                    <>
                        {userRole && userRole=="admin" ? 
                        <section className="studentsList">
                          <Tabs defaultActiveKey="1" >
                              <TabPane tab="New students" key="1">
                                  <section className='studentListCard'>
                                      {newstudentList.map(student => (
                                          <InterviewerCardList key={student._id} btn1={<Link to={`/admin/studentProfile/${student._id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { addProfile(student._id) }} className='addProfileBtn'>List Student</Button>} delIcon={<Link to="#" onClick={() => removeProfile(student._id)} className="closeProfile">{deleteIcon}</Link>} className='studentlistProfile' skills={student.skills} name={student.name} image={student.image} degree={student.degree} company={student.company} contact={student.contact} />
                                      ))}
                                  </section>
                                      
                              </TabPane>
                              <TabPane tab="Exisiting students" key="2">
                                  <section className='studentListCard'>
                                      {existingstudentList.map(student => (
                                          <InterviewerCardList key={student._id} btn1={<Link to={`/admin/studentProfile/${student._id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { deList(student._id) }} className='removeProfileBtn'>DeList Student</Button>} delIcon={<Link to="#" onClick={() => removeProfile(student._id)} className="closeProfile">{deleteIcon}</Link>} className='studentlistProfile' skills={student.skills} name={student.name} image={student.image} degree={student.degree} company={student.company} contact={student.contact} />
                                      ))}
                                  </section>
                              </TabPane>
                          </Tabs>
                        </section> :
                        <section className="studentsList">
                                  <section className='studentListCard'>
                                      {studentList.map(student => (
                                          <InterviewerCardList key={student._id} btn1={<Link to={`/interviewer/studentProfile/${student._id}`} >{viewProfileButton}</Link>} btn2={<Button onClick={() => { addProfile(student._id) }} className='addProfileBtn'>List Student</Button>} delIcon={<Link to="#" onClick={() => removeProfile(student._id)} className="closeProfile">{deleteIcon}</Link>} className='studentlistProfile' skills={student.skills} name={student.name} image={student.image} degree={student.degree} company={student.company} contact={student.contact} />
                                      ))}
                                  </section>
                      </section>    
                        }
                    </>
                  
                    :<section>{fallback}</section>
                }
            </div>
        </>
    )
}