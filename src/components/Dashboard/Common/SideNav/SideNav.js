import React from 'react'
import { logoUrl } from "../../../../constant/data"
import "./SideNav.css"
import Button from "@material-ui/core/Button"
import AccountCircle from "@material-ui/icons/AccountCircle"
import { Link } from 'react-router-dom'


export default function SideNav({sideNavList, userName }) {
    
    return (
        <div>
        <div className="sidenav">
            <a href="http://localhost:8080/"> <img src={logoUrl} alt="logo" className="logo-img"></img></a>

            <ul className="sidebar-list">
                    {sideNavList.map((list,index) => (
                        <Link key={index} to={list.url} className="sidebar-list-item">{list.icon}<p className="icon">{list.linkName}</p></Link>
                    ))}
            </ul>

            <section className="sidebar-list-item sidebar-list admin" >
                <AccountCircle />
                <p className="icon">{userName}</p>
            </section>
            
            <Button variant="contained" color="primary"  style={{width: "80%"}}>Logout</Button>
        </div>
        </div>
    )
}
