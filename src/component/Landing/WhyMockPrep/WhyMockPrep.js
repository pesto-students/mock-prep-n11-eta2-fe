import React from 'react'
import { mockPrepAdvantages } from 'Constant/data'
import "./WhyMockPrep.css"

export default function WhyMockPrep () {
    return (
        <section id="sell-pointer">
            {mockPrepAdvantages.map((pointer,index) => (<section  id="pointer" key={index}><p id="point"> <i className={pointer.icon}></i>{pointer.text}</p></section>))}
        </section>
    )
}