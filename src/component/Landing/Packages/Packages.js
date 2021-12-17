import React, { lazy } from 'react'
import "./Packages.css"
import { packages } from 'constant/data'

const Bundle = lazy(() => import("component/Common/Bundle/InterviewBundle"))

export default function Package () {
    return (
        <div>
              <h1 className="headline">Explore Our Packages </h1>
                <section className="package-details">
                    {packages.map((pack,index) => (
                            <Bundle key={index} id={pack.id} title={pack.title} description={pack.description} details={pack.details} />
                        ))}
                </section>
        </div>
    )
}