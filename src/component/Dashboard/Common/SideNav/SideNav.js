import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { logoUrl } from "Constant/const_url"
import { UserOutlined } from "@ant-design/icons"
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import authActionCreator from 'Redux/Action Creators/authActionCreators'

import "./SideNav.css"
export default function SideNav({ sideNavList }) {
    
    const [cookies, removeCookie] = useCookies(["user"])
    const [userName, setUserName] = useState("User")
    
    const dispatch = useDispatch()

    useEffect(() => { 
      
        if (cookies.user) {
            console.log(cookies.user.name)
            setUserName(cookies.user.name)
        }
    
    }, [cookies, userName])

    
    
    const logOut = () => { 
        if (cookies.user.isLoggedIn) { 
          
            authActionCreator.logOut(dispatch);
            removeCookie("user");
            window.location.href="/signIn"
        }
    }
   
    
    return (
        <div>
        <div className="sidenav" id="sideNav">
            <a href="/" onClick={() => { window.location.reload("/") }}> <img src={logoUrl} alt="logo" className="logo-img"></img></a>
            <ul className="sidebar-list">{sideNavList.map((list,index) => (<Link key={index}  to={list.url} className="sidebar-list-item"><i>{list.icon}</i><p className="icon">{list.linkName}</p></Link>))} </ul>
                
                <section id="bottom">
                <section id="admin" >
                    <h3 className="icon">  <UserOutlined /> {userName}</h3>
                </section>
                    <button id="logoutBtn" onClick={() => logOut()}>Logout</button>
                </section>
        </div>
        </div>
    )
}   