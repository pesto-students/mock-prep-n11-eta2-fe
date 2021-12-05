import React, { useState    } from 'react'
import { PersonAdd } from '@material-ui/icons'
import DashHeader from '../../Common/Header/DashHeader'
import { interviewers } from '../../../../constant/data'
import "./interviewerList.css"
import Filter from '../../../Primary Components/Filter/Filter'
import { interviewerFilter } from '../../../../constant/data'
import { Link} from "react-router-dom"
import { Input } from 'antd';
import { Tag} from "antd"
import { Button } from 'antd';

export default function InterviewerList() {

    const { Search } = Input;
    let [interviewerList, setInterviewer] = useState(interviewers);
 
    const handleFilter = (value) => {
       
        let filtered = interviewers.filter(fil => value.some(e => fil.skills.includes(e)));
        setInterviewer(filtered)

        if (value.length === 0) {
            setInterviewer(interviewers)
        }
    }
    
    const onSearch = (value) => {
        let filtered = interviewers.filter(val => val.name.includes(value));
        setInterviewer(filtered)
    };

    return (
        <div className="interviewerList">
            <DashHeader title="Onboard Interviewers" icon={<PersonAdd />}
                rightComponent={
                    <>
                        <Filter filterOptions={interviewerFilter} filterFunction={handleFilter} />
                        <section className="search">
                            {/* <Input placeholder='Search..' /><Search /> */}
                            <Search placeholder="Search Interviewer"  onSearch={onSearch} style={{ width: 200 }} />
                        </section>
                   
                </>} />
            <div className="interviewers">

                {interviewerList.length>0 ?
                    <> {
                        interviewerList.map(interviewer => (
                            <section key={interviewer.id} className="interviewer">
                                <img src={interviewer.pic} className="int-profile" alt="int-profile" />
                    
                                <span className="int-detail">
                                    <p>Info</p>
                                    <section className="info">
                                        <p>{interviewer.name}, <br />
                                            {interviewer.company}</p>
                                    </section>
                                </span>
                                <span className="int-detail skills">
                                    <p>Skills</p>
                                    <section className="skill">
                                        {interviewer.skills.map(skill => (
                                            <Tag closable="true" color="success" style={{ margin: "0 10px 0 0" }}>{skill}</Tag>
                                        ))}
                                    </section>
                                </span>
                                <span className="int-detail">
                                    <p>Contacts</p>
                                    <section className="contact">
                                        {interviewer.contacts.map(contact => (
                                            <p style={{ margin: "0 10px 0 0" }}> <i className={contact.icon} />{contact.value}</p>
                                        ))}
                                    </section>
                                </span>

                                <section className="int-buttons" style={{ display: "flex", flexDirection: "column" }}>
                                    <Link to="/admin/interviewerProfile"><Button className="btn" style={{ margin: "2vh 0" }} type="primary" >View Profile</Button></Link>
                            
                                    {interviewer.onboarded ?
                                        <Button className="btn2" type="primary" >DeList Profile</Button> :
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
