import { lazy ,useState,useEffect} from "react"
import "./Package.css"
import { getPricing } from "constant/apiUrl"
import { getData } from "api/Fetch"
import { fallback } from "constant/navList"

const Header = lazy(() => import("component/Common/Header/Header"))
const PackageCard = lazy(() => import("component/Common/Cards/Packages/PackageCard"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))



export default function Package() {
    
    let [pricing,setPricing] = useState([])

    useEffect(() => { 
        const getInterviewer = async () => { 
            const prices = await getData(getPricing);
            if(prices) setPricing(prices)
        }
        getInterviewer()
    },[])
    
    return (<>
        <Header />
        <h2 className="pricing-header">Pricing and packages</h2>
        {pricing?
        <section className="package-detail">
                {pricing.map((pricing,index) => (
                    <PackageCard key={index} title={pricing.title} price={pricing.price} benefits={pricing.benefits}
                        description={pricing.description}
                    />
                ))}
        </section>
        :<span>{fallback}</span>
        }
        <Footer />
         </>
    )
}