import React from 'react'
import { Link} from "react-router-dom"
import "./DashboardHeader.css"
import { MenuIcon } from "constant/antIcons"

export default function DashboardHeader({icon,title,rightComponent})  {

    const sideNav = () => { 
        let sideNavBar = document.getElementById("sideNav");
       
        if (sideNavBar.style.left === "0px") {
            sideNavBar.style.left = "-70vw";
        }
        else { 
            sideNavBar.style.left = "0";
        }
    }

    return (
        <div className="header">
                <section className="tab-title">
                <i>{icon }</i> 
                <p className="icon">{title}</p>
                </section>
                <section className="tab-options">
                    {rightComponent}
                    <Link to="#" id="toggleBtn" onClick={sideNav}>{MenuIcon}</Link>
                </section>
        </div>
    )
}