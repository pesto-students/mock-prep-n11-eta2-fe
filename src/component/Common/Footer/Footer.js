import React from "react";
import { logoWhiteUrl } from "constant/const_url";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <section>
        <img src={logoWhiteUrl} alt="Logo"></img>
        <p>
          MockPrep allows you to engage with industry experts to get assistance
          with your interview preparation.
        </p>
      </section>
      <section>
        <h2>Quick Links</h2>
        <ul>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/package">
            Packages
          </Link>
          <Link className="link" to="/join">
            Join Us
          </Link>
        </ul>
      </section>
      <section>
        <h2>Support</h2>
        <ul>
          <Link className="link" to="/">
            Book a demo session
          </Link>
          <Link className="link" to="/contact">
            Contact Us
          </Link>
          <Link className="link" to="/contact">
            Queries
          </Link>
          <Link className="link" to="/join">
            Join Us
          </Link>
        </ul>
      </section>
    </footer>
  );
}
