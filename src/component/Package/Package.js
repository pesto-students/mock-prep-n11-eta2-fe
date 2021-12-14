import { lazy } from "react"
import "./Package.css"
import { pricingData } from "constant/data"

const Header = lazy(() => import("component/Common/Header/Header"))
const PackageCard = lazy(() => import("component/Common/Cards/Packages/PackageCard"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))

export default function Package () {
    return (<>
        <Header />
            <h2 className="pricing-header">Pricing and packages</h2>
            <section className="package-detail">
                {pricingData.map(pricing => (
                    <PackageCard key={pricing.id} title={pricing.title} price={pricing.price} benefits={pricing.benefits}
                        description={pricing.description}
                    />
                ))}
            </section>
        <Footer />
         </>
    )
}