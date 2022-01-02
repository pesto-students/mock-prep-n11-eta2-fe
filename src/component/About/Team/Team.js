import { balaji, raghuUrl, saif } from "constant/const_url";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import "./Team.css";

export default function Team() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div id="teamContainer">
        <h2 className="title">Meet Our Team</h2>
        <section id="team">
          <section id="teamProfile">
            <img src={raghuUrl} alt="profile"></img>
            <h3>Raghu Datta</h3>
            <p>Senior Engineer / Mentor</p>
          </section>
          <section id="teamProfile">
            <img src={balaji} alt="profile"></img>
            <h3>Balaji Kamalesan</h3>
            <p>Full Stack Developer</p>
          </section>
          <section id="teamProfile">
            <img src={saif} alt="profile"></img>
            <h3>Mohammed Saif</h3>
            <p>Full Stack Developer</p>
          </section>
        </section>
        <Link to="/contact">
          {" "}
          <button className="btn contactBtn btn-warning my-4">
            Contact Us
          </button>
        </Link>
      </div>
    </Suspense>
  );
}
