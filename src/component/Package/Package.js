import { lazy ,useState,useEffect} from "react"
import "./Package.css"
import { getPricing } from "constant/apiUrl"
import { fallback } from "constant/navList"
import { useDispatch, useSelector } from 'react-redux'
import dataActionCreator from "Redux/Action Creators/dataActionCreators"
import dataActions from "Redux/Actions/dataAction"



const Header = lazy(() => import("component/Common/Header/Header"))
const PackageCard = lazy(() => import("component/Common/Cards/Packages/PackageCard"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))



export default function Package() {
    const dispatch = useDispatch()
    let [pricing,setPricing] = useState([])
    const packageData = useSelector(state => state.dataReducer.package)
    useEffect(() => { 
        console.log(packageData)
        if(packageData) setPricing(packageData)
    },[packageData])

    useEffect(() => { 
        dataActionCreator.getAdminData(dispatch,getPricing,dataActions.setPackage)
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