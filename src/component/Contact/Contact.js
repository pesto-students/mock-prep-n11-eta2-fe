import React, { lazy} from 'react'
import { queryForm } from 'Constant/formData'
import './Contact.css' 
import ContactForm from 'component/Common/Form/ContantForm'
import { insertQuery } from 'Constant/apiUrl'
import { insertData } from 'api/Api'

const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))
export default function Contact() {

    const submit = (value) => { 
        value.pending = false;
        insertData(insertQuery, value)
        alert("Query Sent!!")
        window.location.reload("/contact")
    }

    return (
        <>
            <Header />    
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Have a Question or just want to say hi ? We would love to hear from you</p>
                    <section className="queryForm">
                    <ContactForm textArea="" submitFunction={ submit} formFields={queryForm} buttonValue="submit" />
                    </section>
                <h2>info@mockprep.com or 8553548534</h2> 
            </section>
            <Footer/>  
        </>
    )
}