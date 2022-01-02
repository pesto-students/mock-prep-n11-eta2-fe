import React from "react";
import "./LeaderBoard.css";
import { Tag } from "antd";
import { trophyIcon } from "constant/antIcons";

export const LeaderBoard = (studentList) => {
  return (
    <div id="leaderboard">
      <section className="cust-review">
        <h2 className="title">Student Leaderboard</h2>
        {studentList.student.length > 0 ? (
          <section>
            {studentList.student.map((student, index) => (
              <section key={index} className="review-container">
                <span style={{ display: "flex" }}>
                  <img src={student.image} alt="profile" />
                  <p>
                    {student.name} <br />
                    {student.skills.map((s, index) => (
                      <Tag
                        id={index}
                        color="success"
                        style={{ marginTop: "2px" }}
                      >
                        {s}
                      </Tag>
                    ))}
                  </p>
                </span>
                {student.analytics ? (
                  <h5>
                    {" "}
                    {trophyIcon} {student.analytics.ranking}
                  </h5>
                ) : (
                  <h5> {trophyIcon} 0</h5>
                )}
              </section>
            ))}
          </section>
        ) : (
          <p>Loading</p>
        )}
      </section>
      <section className="action-items">
        <h2 className="title">Action Items</h2>
        <section id="action">
          <span>
            <p>{"JavaScript"}</p>
            <p>{"Prepare Javascript technical"}</p>
            <Tag color={"red"}>{"pending"}</Tag>
          </span>
        </section>
        <section id="action">
          <span>
            <p>{"Quiz"}</p>
            <p>{"Take Webdevelopment Quiz"}</p>
            <Tag color={"success"}>{"completed"}</Tag>
          </span>
        </section>
      </section>
    </div>
  );
};
