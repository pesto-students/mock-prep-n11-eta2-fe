import "./InterviewerCard.css";
import { Tag } from "antd";
import { deleteIcon } from "constant/antIcons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./InterviewerList.css";

export default function InterviewerCardList({
  interviewer,
  handleDelete,
  handleList,
  handleDelist,
}) {
  let userRole = useSelector((state) => state.authReducer.user.role);

  return (
    <>
      {interviewer ? (
        <section className="personCard" key={interviewer._id}>
          <section className="hoverCard">
            {userRole && userRole === "admin" ? (
              <a
                href="#/"
                onClick={() => {
                  handleDelete(interviewer._id);
                }}
                id="deleteIcon"
              >
                {deleteIcon}
              </a>
            ) : (
              <></>
            )}
            {userRole && userRole === "admin" ? (
              <section id="interviewerCardButtons">
                <Link to={`interviewerProfile/${interviewer._id}`}>
                  <button className="btn text-white my-2 onboardBtn  m-auto btn-dark">
                    View Profile
                  </button>
                </Link>
                {!interviewer.onboarded ? (
                  <button
                    onClick={() => {
                      handleList(interviewer._id);
                    }}
                    className="btn text-white   m-auto my-2  btn-success"
                  >
                    Onboard Profile
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleDelist(interviewer._id);
                    }}
                    className="btn text-white m-auto onboardBtn  my-2 btn-danger"
                  >
                    Remove Profile
                  </button>
                )}
              </section>
            ) : (
              <section>
                <Link to={`interviewerProfile/${interviewer._id}`}>
                  <button className="btn m-auto btn-success">
                    View Profile
                  </button>
                </Link>
                <Link to={`bookInterviewer/${interviewer._id}`}>
                  <button className="btn my-2 m-auto btn-warning">
                    Book Interview
                  </button>
                </Link>
              </section>
            )}
          </section>
          <img alt="int-profile" src={interviewer.image} className="profile" />
          <p className="int-details">{interviewer.name}</p>

          {interviewer.degree ? (
            <p className="int-details">{interviewer.degree},</p>
          ) : (
            <p className="int-details">{interviewer.designation},</p>
          )}
          <p className="int-details">{interviewer.company}</p>

          {interviewer.skills.map((skill, index) => (
            <Tag key={index} style={{ margin: "4px 5px" }} color="success">
              {skill}
            </Tag>
          ))}
        </section>
      ) : (
        <>No Data</>
      )}
    </>
  );
}
