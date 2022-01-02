import "./TopicsCard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import { editIcon, trashIcon } from "constant/antIcons";

export default function TopicsList({ topic, handleDelete, handleEdit }) {
  const auth = useSelector((state) => state.authReducer);

  return (
    <Suspense fallback={<div>Loading</div>}>
      {topic && auth.user ? (
        <section className="topicsCard" key={topic._id}>
          {auth.user.role === "admin" ? (
            <span className="editIcons">
              <Link
                to="#"
                onClick={() => {
                  handleDelete(topic._id);
                }}
                className="edit-icon"
              >
                {trashIcon}
              </Link>
              <Link
                to="#"
                onClick={() => {
                  handleEdit(topic._id);
                }}
                className="edit-icon"
              >
                {editIcon}
              </Link>
            </span>
          ) : (
            <></>
          )}
          <img alt="topicProfile" src={topic.image} className="topicProfile" />
          <span className="topicCardDetails">
            <h2 className="int-details">{topic.title}</h2>
            <p className="int-details">{topic.description}</p>
          </span>
          <Link to={`resourceList/${topic._id}`}>
            <button className="btn btn-sm btn-warning learnButton">
              Start Learning
            </button>
          </Link>
        </section>
      ) : (
        <></>
      )}
    </Suspense>
  );
}
