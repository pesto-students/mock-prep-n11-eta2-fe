import React, {lazy} from 'react'
import { studentNavList } from "Constant/navList"
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useRouteMatch} from "react-router-dom"
import "./Student.css"

const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))

export default function Student() {

    let { path } = useRouteMatch();

    return (
        <>
            <Switch>
            <div className="dashboard">
                <Route path={`${path}`}>
                        <section className="sideNav">
                                    <SideNav sideNavList={studentNavList} userName={"Student"}></SideNav>
                        </section>
                        <section className="mainContainer">
                        <Route  path={`${path}/dashboard`} component={<></>} />
                      
                    </section>
                </Route>
            </div>
            </Switch>            
         </>
    )
}