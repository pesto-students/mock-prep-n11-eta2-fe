import { lazy ,useEffect} from "react"
import { getPricing } from "Constant/apiUrl"
import { fallback } from "Constant/navList"
import { useDispatch, useSelector } from 'react-redux'

import dataActionCreator from "Redux/Action Creators/dataActionCreators"
import dataActions from "Redux/Actions/dataAction"
import "./Package.css"

const Header = lazy(() => import("component/Common/Header/Header"))
const PackageCard = lazy(() => import("component/Common/Cards/Packages/PackageCard"))
const Footer = lazy(() => import("component/Common/Footer/Footer"))

export default function Package() {

    let pricing = [];
    const dispatch = useDispatch()
    
    useEffect(() => { dataActionCreator.getAdminData(dispatch,getPricing,dataActions.setPricing)}, [dispatch])
    
    let data = useSelector(state => state.dataReducer)
    if (data.pricing !== undefined) { pricing = data.pricing.data;}

    return (<>
        <Header />
            <h2 className="pricing-header">Pricing and packages</h2>
            {pricing.length>0?<section className="package-detail">{pricing.map((pricing,index) => (<PackageCard key={index} title={pricing.title} price={pricing.price} benefits={pricing.benefits} description={pricing.description}/>))}</section>:<span>{fallback}</span>}
        <Footer />
         </>
    )
}