import React, {lazy} from 'react'
import { interviewerNavList } from "Constant/navList"
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useRouteMatch} from "react-router-dom"
import "./Interviewer.css"

const SideNav = lazy(() => import("component/Dashboard/Common/SideNav/SideNav"))

export default function Interviewer() {

    let { path } = useRouteMatch();

    return (
        <>
            <Switch>
            <div className="dashboard">
                <Route path={`${path}`}>
                        <section className="sideNav">
                            <SideNav sideNavList={interviewerNavList} userName={"Interviewer"}></SideNav>
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