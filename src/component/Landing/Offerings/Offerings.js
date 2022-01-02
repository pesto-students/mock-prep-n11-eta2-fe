import React from "react";
import "./Offerings.css";

// Mock Prep Steps
export default function Offerings() {
  return (
    <div id="offerings">
      <h2 className="title">
        Prepare for your interviews in
        <br /> simple and easy steps
      </h2>
      <section id="steps-container">
        <section className="steps">
          <i className="fa fa-book"></i>
          <h5>Choose Your Topic</h5>
          <p>Choose topic you want to prepare for, and start on it.</p>
        </section>
        <section className="steps">
          <i className="fa fa-book-open"></i>
          <h5>Read through resources</h5>
          <p>Access and start learning from curated for the chosen topic.</p>
        </section>
        <section className="steps">
          <i className="fa fa-question"></i>
          <h5>Take Quiz</h5>
          <p>Attend Quiz to analyse your learning.</p>
        </section>
        <section className="steps">
          <i className="fa fa-users"></i>
          <h5>Take Mock Interview</h5>
          <p>
            Book Mock Interviews, to improve your skills with right feedback.
          </p>
        </section>
      </section>
    </div>
  );
}
