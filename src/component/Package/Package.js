import { lazy } from "react"
import "./Package.css"
import { packages } from "constant/data"

const Header = lazy(() => import("component/Common/Header/Header"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))

export default function Package () {
    return (<>
            <Header/>
            <section className="package-detail">
                {packages.map(pack => (
                    <section key={ pack.id} className="pack">
                        <h2>{pack.title}</h2>
                        <p>{pack.description}</p>
                        <ul>
                            {pack.details.map((detail,index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                  </section>
                ))}
            </section>
            <Footer/>
         </>
    )
}