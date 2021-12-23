import React from 'react'
import { Link } from 'react-router-dom'
import { logoUrl } from "Constant/const_url"
import { UserOutlined} from "@ant-design/icons"
import "./SideNav.css"

export default function SideNav({sideNavList, userName,logout }) {
    
    return (
        <div>
        <div className="sidenav" id="sideNav">
            <a href="/" onClick={() => { window.location.reload("/") }}> <img src={logoUrl} alt="logo" className="logo-img"></img></a>
            <ul className="sidebar-list">{sideNavList.map((list,index) => (<Link key={index}  to={list.url} className="sidebar-list-item"><i>{list.icon}</i><p className="icon">{list.linkName}</p></Link>))} </ul>
            <section  id="admin" ><UserOutlined /><p className="icon">{userName}</p></section>
            <button id="logoutBtn" >Logout</button>
        </div>
        </div>
    )
}   