import React, { useState, useEffect, lazy } from "react";
import { DBIcon } from "constant/antIcons";
import { useSelector } from "react-redux";
import { deleteTopic, getTopics } from "constant/apiUrl";
import { useDispatch } from "react-redux";
import dataActions from "Redux/Actions/dataAction";
import dataActionCreator from "Redux/Action Creators/dataActionCreators";
import TopicsCard from "component/Common/Cards/Topics/TopicsCard";
import alertActionCreator from "Redux/Action Creators/alertActionCreator";
import { insertData, removeData } from "api/Api";
import Modals from "component/Common/Modal/Modals";
import TopicsForm from "component/Common/Form/TopicsForm";
import { topicForm } from "constant/formData";
import { updateData } from "api/Api";
import { updateTopic, insertTopic } from "constant/apiUrl";
import "./TopicsList.css";

const DashboardHeader = lazy(() =>
  import("component/Dashboard/Common/Header/DashboardHeader")
);

export default function TopicsList() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.dataReducer);
  let [topics, setTopics] = useState([]);
  let [topicsList, setTopicsList] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [showModal2, setShowModal2] = useState(false);
  let [topicId, setTopicId] = useState("");

  const auth = useSelector((state) => state.authReducer);

  useEffect(() => {
    dataActionCreator.getAdminData(dispatch, getTopics, dataActions.setTopic);
  }, [dispatch]);

  useEffect(() => {
    if (data && data.topics) {
      setTopics(data.topics.data);
      setTopicsList(data.topics.data);
    }
  }, [data]);

  const handleEdit = (topicId) => {
    setTopicId(topicId);

    let topic = topics.filter((f) => f._id === topicId);
    if (Object.keys(topic).length > 0) {
      Object.keys(topicForm).forEach((key) => (topicForm[key] = topic[0][key]));
    }

    setShowModal(true);
  };

  const handleAdd = () => {
    topicForm.title = "";
    topicForm.image = "";
    topicForm.description = "";

    setShowModal2(true);
  };

  const submit = (value) => {
    let topicIndex = topics.findIndex((f) => f._id === topicId);
    for (var key in value) {
      if (value[key] !== undefined) {
        topics[topicIndex][key] = value[key];
      }
    }

    try {
      updateData(updateTopic + topicId, value);
      setTopics(topics);
      setShowModal(false);
      alertActionCreator.setMessage(dispatch, "Topic Update Succesfull");
    } catch (e) {
      alertActionCreator.setError(dispatch, "Error updating topic");
    }
  };

  const submit2 = (value) => {
    topics.push(value);

    try {
      setTopics(topics);
      insertData(insertTopic, value);
      setShowModal2(false);
      alertActionCreator.setMessage(dispatch, "Topic Added Succesfull");
    } catch (e) {
      alertActionCreator.setError(dispatch, "Error Adding topic");
    }
  };

  const handleDelete = async (topicId) => {
    try {
      removeData(deleteTopic + topicId);
      setTopics(topics.filter((e) => e._id !== topicId));
      alertActionCreator.setMessage(dispatch, "Topic Deleted");
    } catch (e) {
      alertActionCreator.setError(dispatch, "Error Deleting topic");
    }
  };

  const hide1 = () => {
    setShowModal(false);
  };

  const hide2 = () => {
    setShowModal2(false);
  };

  const onSearch = (value) => {
    let filtered = topicsList.filter(
      (val) => val.title.includes(value) || val.description.includes(value)
    );
    setTopics(filtered);
  };

  const form = (
    <TopicsForm
      submitFunction={submit}
      formFields={topicForm}
      buttonValue={"Update Topics"}
    />
  );
  const form2 = (
    <TopicsForm
      submitFunction={submit2}
      formFields={topicForm}
      buttonValue={"Update Topics"}
    />
  );
  const search = (
    <>
      {" "}
      <section className="search"></section>
    </>
  );

  return (
    <div>
      <section className="topics-container">
        <DashboardHeader
          title="Topics List"
          icon={DBIcon}
          onSearch={onSearch}
        />

        <section className="interviewerTabContainer">
          {auth && auth.user.role === "admin" ? (
            <button className="btn btn-primary m-4" onClick={handleAdd}>
              Add Topics
            </button>
          ) : (
            <></>
          )}
          <section className="responsiveSearch">{search}</section>
          <section className="topicListContainer">
            {topics.length > 0 ? (
              <>
                {topics.map((topic, index) => (
                  <TopicsCard
                    key={index}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    topic={topic}
                  />
                ))}
              </>
            ) : (
              <></>
            )}
          </section>
        </section>
        <Modals
          title={"Update Topic"}
          show={showModal}
          onHide={hide1}
          data={form}
        />
        <Modals
          title={"Add Topic"}
          show={showModal2}
          onHide={hide2}
          data={form2}
        />
      </section>
    </div>
  );
}
