import React, { lazy, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "antd";
import { resourceIcon } from "constant/antIcons";
import {
  getResources,
  getTopics,
  insertResource,
  updateResource,
  daleteResources,
} from "constant/apiUrl";
import { fallback } from "constant/navList";
import ResourceCard from "component/Common/Cards/Resource/ResouceCard";
import dataActionCreator from "Redux/Action Creators/dataActionCreators";
import dataActions from "Redux/Actions/dataAction";
import { resourceForm } from "constant/formData";
import TopicsForm from "component/Common/Form/TopicsForm";
import "./ResourceList.css";
import Modals from "component/Common/Modal/Modals";
import { updateData } from "api/Api";
import alertActionCreator from "Redux/Action Creators/alertActionCreator";
import { insertData, removeData } from "api/Api";

const DashboardHeader = lazy(() =>
  import("component/Dashboard/Common/Header/DashboardHeader")
);

export default function ResourceList() {
  const { Search } = Input;
  let { topicId } = useParams();
  let [resourceList, setResourceList] = useState([]);
  let [resource, setResource] = useState([]);
  let [topic, setTopics] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [showModal2, setShowModal2] = useState(false);
  let data = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();
  let [resourceId, setResourceId] = useState("");

  let auth = useSelector((state) => state.authReducer);

  useEffect(() => {
    dataActionCreator.getAdminData(
      dispatch,
      getResources,
      dataActions.setResource
    );
  }, [dispatch]);

  useEffect(() => {
    dataActionCreator.getAdminData(dispatch, getTopics, dataActions.setTopic);
  }, [dispatch]);

  useEffect(() => {
    if (data.resources !== undefined) {
      setResource(data.resources.data);
      setResourceList(data.resources.data);
    }

    if (data.topics !== undefined) {
      setTopics(data.topics.data);
    }
  }, [data, topicId]);

  const onSearch = (value) => {
    let filtered = resource.filter(
      (val) => val.title.includes(value) || val.description.includes(value)
    );
    setResourceList(filtered);
  };

  const submit = (value) => {
    let resourceIndex = resource.findIndex((f) => f._id === resourceId);
    for (var key in value) {
      if (value[key] !== undefined) {
        resource[resourceIndex][key] = value[key];
      }
    }
    try {
      setResource(resource);

      updateData(updateResource + resourceId, value);
      setShowModal(false);
      alertActionCreator.setMessage(dispatch, "Resource Update Succesfull");
    } catch (e) {
      alertActionCreator.setError(dispatch, "Resource Update Failed");
    }
  };

  const submit2 = async (value) => {
    resource.push(value);
    try {
      setTopics(resource);
      let res = await insertData(insertResource, value);
      console.log(res);
      setShowModal2(false);
      alertActionCreator.setMessage(dispatch, "Resource Added Succesfull");
    } catch (e) {
      alertActionCreator.setError(dispatch, "Error Adding Resource");
    }
  };

  const handleEdit = (resourceId) => {
    setResourceId(resourceId);

    let res = resource.filter((f) => f._id === resourceId);
    if (Object.keys(resourceForm).length > 0) {
      Object.keys(resourceForm).forEach(
        (key) => (resourceForm[key] = res[0][key])
      );
    }
    setShowModal(true);
  };

  const handleDelete = async (resourceId) => {
    let res = await removeData(daleteResources + resourceId);

    if (res.status === 200) {
      setResource(resource.filter((e) => e._id !== resourceId));
      alertActionCreator.setError(dispatch, "Resource Deleted");
    }
  };

  const handleAdd = () => {
    resourceForm.title = "";
    resourceForm.image = "";
    resourceForm.description = "";
    resourceForm.url = "";

    setShowModal2(true);
  };

  const form = (
    <TopicsForm
      submitFunction={submit}
      formFields={resourceForm}
      buttonValue={"Update Resource"}
    />
  );
  const form2 = (
    <TopicsForm
      submitFunction={submit2}
      topic={topic}
      formFields={resourceForm}
      buttonValue={"Add Resource"}
    />
  );
  const search = (
    <>
      <section className="search">
        <Search
          placeholder="Search Resources"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </section>
    </>
  );

  return (
    <div>
      <section className="resource-container">
        <DashboardHeader
          title="Resources List"
          icon={resourceIcon}
          onSearch={onSearch}
        />
        {auth && auth.user.role === "admin" ? (
          <button className="btn btn-primary m-4" onClick={handleAdd}>
            Add Resources
          </button>
        ) : (
          <></>
        )}
        <section className="resource">
          {resourceList.length > 0 ? (
            resourceList.map((resource, index) => (
              <ResourceCard
                key={index}
                {...resource}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <section>{fallback}</section>
          )}
        </section>
        <Modals
          title={"Update Resource"}
          show={showModal}
          onHide={() => {
            setShowModal(false);
          }}
          data={form}
        />
        <Modals
          title={"Add Resource"}
          show={showModal2}
          onHide={() => {
            setShowModal2(false);
          }}
          data={form2}
        />
      </section>
    </div>
  );
}
