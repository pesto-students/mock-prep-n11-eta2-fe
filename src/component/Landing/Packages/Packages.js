import React, {Suspense, lazy } from 'react'
import { packages } from 'constant/data'
import "./Packages.css"

const Bundle = lazy(() => import("component/Common/Bundle/InterviewBundle"))

export default function Package() {
    
    
    return (
        <>
            <h2 className="title">Packages</h2>
            <section className="package-details">
            <Suspense fallback={<div>Loading</div>}>
                    {packages.map((pack, index) => (<Bundle key={index} {...pack} />))}
            </Suspense>
            </section>
        </>
    )
}