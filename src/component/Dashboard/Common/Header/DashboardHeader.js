import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { MenuIcon } from "constant/antIcons";
import "./DashboardHeader.css";

export default function DashboardHeader({ icon, title, onSearch }) {
  const sideNav = () => {
    let sideNavBar = document.getElementById("sideNav");
    if (sideNavBar.style.display === "block") {
      sideNavBar.style.display = "none";
    } else {
      sideNavBar.style.display = "block";
    }
  };

  const { Search } = Input;

  return (
    <div className="header">
      <section className="tab-title">
        <i>{icon}</i>
        <p className="icon">{title}</p>
      </section>
      <section className="tab-options">
        {onSearch ? <Search placeholder="Search" onSearch={onSearch} /> : <></>}

        {/* {rightComponent} */}
        <Link to="#" id="toggleBtn" onClick={() => sideNav()}>
          {MenuIcon}
        </Link>
      </section>
    </div>
  );
}
