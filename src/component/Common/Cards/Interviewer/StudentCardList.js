import { Tag } from "antd";
import { deleteIcon } from "constant/antIcons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./StudentList.css";

export default function StudentCardList({
  interviewer,
  handleDelete,
  handleList,
  handleDelist,
}) {
  let userRole = useSelector((state) => state.authReducer.user.role);

  return (
    <>
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
              {deleteIcon}{" "}
            </a>
          ) : (
            <></>
          )}
          {userRole && userRole === "admin" ? (
            <section id="interviewerCardButtons">
              <Link to={`studentProfile/${interviewer._id}`}>
                <button className="btn onboardBtn text-white my-2 m-auto btn-dark">
                  View Profile
                </button>
              </Link>
              {!interviewer.onboarded ? (
                <button
                  onClick={() => {
                    handleList(interviewer._id);
                  }}
                  className="btn onboardBtn text-white  m-auto my-2  btn-success"
                >
                  List Profile
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleDelist(interviewer._id);
                  }}
                  className="btn onboardBtn text-white m-auto  my-2 btn-danger"
                >
                  Delist Profile
                </button>
              )}
            </section>
          ) : (
            <Link to={`studentProfile/${interviewer._id}`}>
              <button className="btn onboardBtn m-auto btn-success">
                View Profile
              </button>
            </Link>
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
    </>
  );
}
