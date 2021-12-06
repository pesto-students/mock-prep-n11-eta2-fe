import React, { useState} from 'react'
import DashHeader from '../../Common/Header/DashHeader'
import { PersonAdd } from '@material-ui/icons'
import Filter from '../../../Primary Components/Filter/Filter'
import { Input } from "antd"
import { students } from '../../../../constant/data'
import "./StudentList.css"
import { studentFilter } from '../../../../constant/data'
import { Tag } from "antd"
import { Button } from 'antd';
import { Link } from "react-router-dom"
import "../../Interviewer/List/interviewerList.css"

export default function StudentList() {
    const { Search } = Input;

    let [studentList, setStudentList] = useState(students);
 
    const handleFilter = (value) => {
       
        let filtered = students.filter(fil => value.some(e => fil.skills.includes(e)));
        setStudentList(filtered)

        if (value.length === 0) {
            setStudentList(students)
        }
    }
    
    const onSearch = (value) => {
        let filtered = students.filter(val => val.name.includes(value));
        setStudentList(filtered)
    };

    return (
        <div className="student-list">
             <DashHeader title="Student List" icon={<PersonAdd />}
                rightComponent={
                    <>
                        <Filter filterOptions={studentFilter} filterFunction={handleFilter} placeholder="Filter Students" />
                        <section className="search">
                            <Search placeholder="Search Students"  onSearch={onSearch} style={{ width: 200 }} />
                        </section>
                   
                    </>} />
                    <div className="students">

                    {studentList.length > 0 ?
                        <> {
                            studentList.map(student => (
                                <section key={student.id} className="interviewer">
                                    <img src={student.pic} className="int-profile" alt="int-profile" />
                        
                                    <span className="int-detail">
                                        <p>Info</p>
                                        <section className="info">
                                                <p>{student.name}, <br/>
                                                {student.degree}<br />
                                                { student.company}
                                            </p>
                                        </section>
                                    </span>
                                    <span className="int-detail skills">
                                        <p>Topics</p>
                                        <section className="skill">
                                            {student.skills.map(skill => (
                                                <Tag closable="true" color="success" style={{ margin: "0 10px 0 0" }}>{skill}</Tag>
                                            ))}
                                        </section>
                                    </span>
                                    <span className="int-detail">
                                        <p>Contacts</p>
                                        <section className="contact">
                                            {student.contacts.map(contact => (
                                                <p style={{ margin: "0 10px 0 0" }}> <i className={contact.icon} />{contact.value}</p>
                                            ))}
                                        </section>
                                    </span>

                                    <section className="int-buttons" style={{ display: "flex", flexDirection: "column" }}>
                                        <Link to="/admin/studentProfile"><Button className="btn" style={{ margin: "2vh 0" }} type="primary" >View Profile</Button></Link>
                                
                                        {student.onboarded ?
                                            <Button className="btn2" type="primary" >Block Profile</Button> :
                                            <Button className="btn3" type="primary" >List Profile</Button>
                                        }
                                    </section>
                                </section>
                            ))
                        }
                        </>
                    :
                        <p>No Data found</p>
                    }
            </div>
        </div>
    )
}
