import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopicsCard from "component/Common/Cards/Topics/TopicsCard";
import { getTopics } from "constant/apiUrl";
import dataActionCreator from "Redux/Action Creators/dataActionCreators";
import dataActions from "Redux/Actions/dataAction";
import "./TopicsStudying.css";

export default function Topics(student) {
  const dispatch = useDispatch();
  let [topicsList, setTopicsList] = useState([]);
  let data = useSelector((state) => state.dataReducer);
  

  useEffect(() => {
    dataActionCreator.getAdminData(dispatch, getTopics, dataActions.setTopic);
  }, [dispatch]);
  useEffect(() => {
    if (data.topics !== undefined && data.topics.data.length > 0) {
      setTopicsList(data.topics.data.splice(1, 3));
    }
  }, [data]);

  return (
    <div className="topicsOngoing">
      <h2 className="title">My Topics</h2>
      <section id="studentTopics">
        {topicsList.length > 0 ? (
          <>
            {topicsList.map((topic, index) => (
              <TopicsCard key={index} topic={topic} />
            ))}
          </>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
