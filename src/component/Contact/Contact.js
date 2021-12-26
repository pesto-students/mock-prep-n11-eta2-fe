import React, { useState,lazy} from 'react'
import { insertQuery } from 'constant/apiUrl'
import { insertData } from 'api/Api'
import { useDispatch} from "react-redux"
import { emailIcon, mapIcon, phoneIcon } from 'constant/antIcons'
import {fallback} from "constant/navList"
import ContactForm from 'component/Common/Form/ContantForm'
import './Contact.css' 
import alertActionCreator from 'Redux/Action Creators/alertActionCreator'

const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))

export default function Contact() {

    let [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    
    const submit = async (value) => { 
        value.status = "pending";
        setLoading(true)
     
        let response = await insertData(insertQuery, value)
      
        if (response.status === "success") { 
            alertActionCreator.setMessage(dispatch, "Query Sent Succesfully")   
        }
        else{
            alertActionCreator.setError(dispatch, "Query Sending Failed")
        }

        setLoading(false)
      
    }

    return (
        <>
       
            <section className="contact">
                <Header />   
                {!loading ?
                    <section id="contactForm">
                        <section id="info">
                            <h3>Send Query</h3>
                            <p>Fill the requested details and our team will respond within 24hours.</p>
                            <a href="/contact" className="link"><p>{phoneIcon} 8553548534</p></a><br />
                            <a href="mailto:email@example.com?subject=Subject&body=Body%20goes%20here'" className="link"><p>{emailIcon} info@mockprep.com</p></a><br />
                            <a href="/contact" className="link"><p>{mapIcon} #123, Infinity Park, Bangalore</p></a>
                        </section>
                        <section id="query">
                            <ContactForm submitFunction={submit} />
                        </section>
                    </section> :
                    <section>{ fallback }</section>
                }

            </section>
            <Footer/>  
        </>
    )
}