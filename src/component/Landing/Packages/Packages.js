import React, { lazy } from 'react'
import { packages } from 'Constant/data'
import "./Packages.css"

const Bundle = lazy(() => import("component/Common/Bundle/InterviewBundle"))

export default function Package () {
    return (
        <section className="package-details">
            {packages.map((pack,index) => (<Bundle key={index} id={pack.id} title={pack.title} description={pack.description} details={pack.details} />))}
        </section>
    )
}