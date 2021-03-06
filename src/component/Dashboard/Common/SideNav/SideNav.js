import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logoUrl } from "constant/const_url";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import authActionCreator from "Redux/Action Creators/authActionCreators";
import alertActionCreator from "Redux/Action Creators/alertActionCreator";
import "./SideNav.css";

export default function SideNav({ sideNavList }) {
  const [cookies, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.user) {
      setUser(cookies.user);
    }
  }, [cookies]);

  const logOut = () => {
    if (user.isLoggedIn) {
      removeCookie("user");
      authActionCreator.logOut(dispatch);
      alertActionCreator.setMessage(dispatch, "Logged out succesfully");
      window.location.reload();
      window.location.href = "/signIn";
    }
  };

  return (
    <div>
      <div className="sidenav" id="sideNav">
        <a
          href="/"
          onClick={() => {
            window.location.reload("/");
          }}
        >
          <img src={logoUrl} alt="logo" className="logo-img"></img>
        </a>
        <ul className="sidebar-list">
          {sideNavList.map((list, index) => (
            <Link key={index} to={list.url} className="sidebar-list-item">
              <i>{list.icon}</i>
              <p className="icon">{list.linkName}</p>
            </Link>
          ))}
        </ul>

        <section id="bottom">
          <section id="admin">
            <img alt="profile" id="userProfile" src={user.image}></img>
            <p style={{ marginLeft: "1vw" }}>
              {user.name}
              <br />
              <span style={{ textTransform: "capitalize" }}>{user.role}</span>
            </p>
          </section>
          <button id="logoutBtn" onClick={() => logOut()}>
            Logout
          </button>
        </section>
      </div>
    </div>
  );
}
