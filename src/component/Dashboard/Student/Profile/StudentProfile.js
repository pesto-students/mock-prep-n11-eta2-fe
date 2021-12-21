import React, { useState,lazy,useEffect} from 'react'
import { Tag } from "antd"
import { UserIcon } from 'Constant/antIcons';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./StudentProfile.css"
import Forms  from 'component/Common/Form/Forms';
import { updateData } from 'api/Api';
import { updateStudent } from 'Constant/apiUrl';
import { fallback } from 'Constant/navList';

const DashboardHeader = lazy(() => import("component/Dashboard/Common/Header/DashboardHeader"))
const CommonButton = lazy(() => import("component/Common/Button/CommonButton"))

export const StudentProfile = () => {

    const { profileId } = useParams();

    let [student, setstudent] = useState({})
    let [update, setUpdate] = useState(false)
    let interData = useSelector(state => state.dataReducer)

    useEffect(() => {  if (interData.studentData != undefined) setstudent(interData.studentData.data.find(e => e._id===profileId)) },[profileId])
    const studentForm = JSON.parse(JSON.stringify(student));
    delete studentForm._id
    delete studentForm.userId
    delete studentForm.about;
    delete studentForm.contacts;
    delete studentForm.__v;
    delete studentForm.interviewCount;
    delete studentForm.rating

    const showModal = () => {
        setUpdate(true);
    };


    const submit = (value) => { 
  
        for (var key in value) {
            if (value[key] !== undefined) {
                student[key] = value[key]
            }
        }
        updateData(updateStudent + student._id, student)
        setUpdate(false)
    }

    const data = <Forms populate={true} submitFunction={submit} formFields={studentForm} textArea={student.about} buttonValue="Update Details" /> 
    const component1 = <CommonButton buttonName="View Profile" onClick={() => {setUpdate(false)}} isDisabled="false" style={{ width: "100%", color: "white !important" }} />
    const component2 = <CommonButton buttonName="Update Details" onClick={showModal} isDisabled="false" style={{ width: "100%", color: "white !important" }} />
      

    let rating = [];
    
    for (var i = 0; i < student.rating; i++){
        rating.push(<i className="fa fa-star"/>);
    }

    return (
        <>
            <div className="student-profile">
                <DashboardHeader title="Student Profile" icon={UserIcon} rightComponent={update ? component1: component2} />
                {Object.keys(student).length !== 0 ?
                    <>
                        {!update ?
                            <div className="int-profile-container">
                            <section className="left-profile">
                                <img src={student.image} alt="profile" />
                                <p>{student.name}</p>
                                <p style={{textTransform:"lowercase"}}>{student.email}</p>
                                <p>{student.designation}, {student.company}</p>
                                <p>{student.experience} years of experience in industry</p>
                                <section className="skill-chips">
                                    {student.skills.map((skill, index) => (
                                        <section key={index}>
                                            <Tag key={index} className="chip"  color="success" label={skill} >{skill}</Tag>
                                        </section>
                                    ))}
                                </section>

                            </section>
                            <section className="right-profile">
                                <h3 className="heading">About</h3>
                                <p className="about">{student.about}</p>
                                <h3 className="heading">Interview Topics</h3>
                                <section className="skill-chips">
                                    {student.topics.map((topic, index) => (
                                        <section key={index}>
                                            <Tag className="chip2" key={index} color="warning" label={topic} >{topic}</Tag>
                                        </section>
                                    ))}
                                </section>
                                <h3 className="heading" style={{ margin: "3vh 0" }}>Total Interviews taken : <span style={{ color: "orange" }}>{student.interviewCount}</span></h3>
                            
                              
                                <h3 className="heading" style={{ marginRight: "1vw", marginTop: "4px",marginBottom:"2vh" }}>Contact : {student.contact }</h3>                      
                            
                                <h3 className="heading">Student Rating (5) :
                                
                                    {rating.map((rate, index) => (
                                        <i key={index}>{rate}</i>
                                    ))}
                                </h3>

                            </section>
                            </div> :
                            <div className="int-profile-form">
                                {data}
                            </div>
                        }
                    </>

                  :<section>{ fallback}</section>}
            </div>
        </>
    )
}