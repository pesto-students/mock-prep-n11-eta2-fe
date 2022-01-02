import React from "react";
import { Button, Progress } from "antd";
import { Link } from "react-router-dom";
import { CalenderIcon } from "constant/antIcons";
import "./Interview.css";


export default function Interviews(student) {
  return (
    <div>
      <section id="interview-details-dashboard">
        <section id="upcomingInterviews">
          <h2 className="title">
            Upcoming Interviews
            <Link to="Interviews/">
              {" "}
              <Button type="primary">View All</Button>
            </Link>
          </h2>
          <section id="upcomingList">
            {student.interviews.map((e, index) => (
              <section key={index} id="interviewInfo">
                <span id="date">
                  <i className="calender">{CalenderIcon}</i>
                  <p>{e.date}</p>
                </span>
                <p>{e.time} </p>
                <p>{e.student.name}</p>

                <span>
                  <p>{e.topic}</p>
                </span>
                <span>
                  <a href={e.meetingUrl}>Join Meets</a>
                </span>
              </section>
            ))}
          </section>
        </section>
        <section id="previousInterviews">
          <h2 className="title">Progress</h2>
          <section id="student-info">
            {student.student.learnings.map((task, index) => (
              <section key={index} id="task">
                <Progress
                  type="circle"
                  id="progressCircle"
                  strokeColor="lightgreen"
                  percent={
                    ((task.quiz.score / 10 + task.interview.score) / 2) * 10
                  }
                />
                <span>
                  <h6>{task.topics.name}</h6>
                  <p>Quiz Score: {task.quiz.score}</p>
                  <p>Mock Interview Score: {task.interview.score}</p>
                </span>
              </section>
            ))}
          </section>
        </section>
      </section>
    </div>
  );
}
