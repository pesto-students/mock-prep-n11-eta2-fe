import React, { useState, lazy, useEffect } from "react";
import { Tag } from "antd";
import { starIcon, UserIcon } from "constant/antIcons";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "api/Api";
import { getStudentById, updateStudent } from "constant/apiUrl";
import Forms from "component/Common/Form/Forms";
import dataActions from "Redux/Actions/dataAction";
import dataActionCreators from "Redux/Action Creators/dataActionCreators";
import "./StudentProfile.css";
import { studentForm } from "constant/formData";
import alertActionCreator from "Redux/Action Creators/alertActionCreator";

const DashboardHeader = lazy(() =>
  import("component/Dashboard/Common/Header/DashboardHeader")
);

export const StudentProfile = () => {
  const { profileId } = useParams();

  let [interviewer, setInterviewer] = useState({});
  let [update, setUpdate] = useState(false);

  const dispatch = useDispatch();
  let interData = useSelector((state) => state.dataReducer);
  let auth = useSelector((state) => state.authReducer);

  useEffect(() => {
    dataActionCreators.getAdminData(
      dispatch,
      getStudentById + profileId,
      dataActions.setStudent
    );
  }, [dispatch, profileId]);

  useEffect(() => {
    if (interData.student) {
      setInterviewer(interData.student.data);
    }
  }, [profileId, interData]);

  if (Object.keys(interviewer).length > 0) {
    Object.keys(studentForm).forEach(
      (key) => (studentForm[key] = interviewer[key])
    );
  }

  const submit = (value) => {
    if (value.skills) {
      value.skills = value.skills.split(",");
    }

    if (value.topics) {
      value.topics = value.topics.split(",");
    }

    for (var key in value) {
      if (value[key] !== undefined) {
        interviewer[key] = value[key];
      }
    }
    try {
      updateData(updateStudent + interviewer._id, interviewer);
      setUpdate(false);
      alertActionCreator.setMessage(dispatch, "Student profile update");
    } catch (e) {
      alertActionCreator.setMessage(dispatch, "Update Failed");
    }
  };

  let rating = [];
  for (let i = 0; i < interviewer.rating; i++) {
    rating.push(i);
  }

  const data = (
    <Forms
      populate="true"
      submitFunction={submit}
      formFields={studentForm}
      textArea={interviewer.about}
      buttonValue="Update Details"
    />
  );
  const component1 = (
    <button
      className="btn btn-success"
      onClick={() => {
        setUpdate(false);
      }}
    >
      View Profile
    </button>
  );
  const component2 = (
    <button
      className="btn btn-primary"
      onClick={() => {
        setUpdate(true);
      }}
    >
      Update Details
    </button>
  );

  return (
    <>
      <div className="interviewer-profile">
        <DashboardHeader title="Student Profile" icon={UserIcon} />

        <section className="btn-interviewer">
          {auth.user.role !== "student" ? (
            <> {update ? component1 : component2} </>
          ) : (
            <></>
          )}
        </section>
        {update ? (
          // update Form
          <div className="int-profile-form">{data}</div>
        ) : (
          // Profile
          <>
            {interviewer && Object.keys(interviewer).length > 0 ? (
              <>
                <div className="int-profile-container">
                  <section className="left-profile">
                    <img src={interviewer.image} alt="profile" />
                    <p>{interviewer.name}</p>
                    <p style={{ textTransform: "lowercase" }}>
                      {interviewer.email}
                    </p>
                    <p>
                      {interviewer.degree}, {interviewer.company}
                    </p>
                    <p>
                      {interviewer.experience} years of experience in industry
                    </p>
                    <section className="skill-chips">
                      {interviewer.skills.map((skill, index) => (
                        <section key={index}>
                          <Tag
                            key={index}
                            className="chip"
                            color="success"
                            label={skill}
                          >
                            {skill}
                          </Tag>
                        </section>
                      ))}
                    </section>
                  </section>
                  <section className="right-profile">
                    <h3 className="interviewerProfileHeading">About</h3>
                    <section className="about">
                      <p>{interviewer.about}</p>
                    </section>
                    <h3 className="interviewerProfileHeading">
                      Interview Topics
                    </h3>
                    <section className="skill-chips">
                      {interviewer.topics.map((topic, index) => (
                        <section key={index}>
                          <Tag
                            className="chip2"
                            key={index}
                            color="warning"
                            label={topic}
                          >
                            {topic}
                          </Tag>
                        </section>
                      ))}
                    </section>
                    <h3
                      className="interviewerProfileHeading"
                      style={{ margin: "3vh 0" }}
                    >
                      Subscription :{" "}
                      <span style={{ color: "orange" }}>
                        {" "}
                        {interviewer.package ? (
                          <>
                            {interviewer.package.name}: (
                            {interviewer.package.interviewsLeft})
                          </>
                        ) : (
                          <></>
                        )}{" "}
                      </span>
                    </h3>
                    <h3
                      className="interviewerProfileHeading"
                      style={{
                        marginRight: "1vw",
                        marginTop: "4px",
                        marginBottom: "2vh",
                      }}
                    >
                      Contact : {interviewer.contact}
                    </h3>
                    <h3
                      className=" interviewerProfileHeading rating"
                      style={{
                        marginRight: "1vw",
                        marginTop: "4px",
                        marginBottom: "2vh",
                      }}
                    >
                      Rating :
                      {rating.map((rate, index) => (
                        <i key={index}>{starIcon}</i>
                      ))}
                    </h3>
                  </section>
                </div>
              </>
            ) : (
              <div>Could not find profile</div>
            )}
          </>
        )}
      </div>
    </>
  );
};
