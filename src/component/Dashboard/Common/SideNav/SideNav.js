import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
import { logoUrl } from "constant/const_url"
import { UserOutlined} from "@ant-design/icons"
import "./SideNav.css"


const CommonButton = lazy(() => import("component/Common/Button/CommonButton"))

export default function SideNav({sideNavList, userName }) {
    
    return (
        <div>
        <div className="sidenav" id="sideNav">
                <a href="/" onClick={() => { window.location.reload("/")}}> <img src={logoUrl} alt="logo" className="logo-img"></img></a>

            <ul className="sidebar-list">
                    {sideNavList.map((list,index) => (
                        <Link key={index} to={list.url} className="sidebar-list-item"><i>{list.icon}</i><p className="icon">{list.linkName}</p></Link>
                    ))} 
            </ul>

            <section className="sidebar-list-item sidebar-list admin" >
                <UserOutlined />
                <p className="icon">{userName}</p>
            </section>
            
            <CommonButton type="button" isDisabled="false" id="logout-btn" width="98%" buttonName="Logout"/>
        </div>
        </div>
    )
}