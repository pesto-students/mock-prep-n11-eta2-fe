import { packages } from '../../constant/data'
import MPHeader from "../Primary Components/Header/Header"
import Footer from "../Primary Components/Footer/Footer"
import "./Package.css"

export default function Packages () {
    return (<>
            <MPHeader/>
            <section className="package-detail">
                {packages.map(pack => (
                  <section className="pack">
                        <h2>{pack.title}</h2>
                        <p>{pack.description}</p>
                        <ul>
                            {pack.details.map(detail => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                  </section>
                ))}
            </section>
            <Footer/>
         </>
    )
}