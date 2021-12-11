import React, { lazy} from 'react'
import { queryForm } from 'constant/formData'
import './Contact.css' 
import { Forms } from 'component/Common/Form/Forms'


const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))


export default function Contact() {

    return (
        <>
            <Header />    
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Have a Question or just want to say hi ? We would love to hear from you</p>
                    <section className="queryForm">
                         <Forms textArea="" submitFunction="" formFields={queryForm} buttonValue="submit" />
                    </section>
                <h2>info@mockprep.com or 8553548534</h2> 
            </section>
            <Footer/>  
        </>
    )
}