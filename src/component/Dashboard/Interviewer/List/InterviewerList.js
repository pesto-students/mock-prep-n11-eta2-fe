import React, { useState, useEffect, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { idCardIcon } from "constant/antIcons";
import { Input, Tabs } from "antd";
import {
  deleteInterviewer,
  getInterviewers,
  updateInterviewer,
} from "constant/apiUrl";
import { removeData, updateData } from "api/Api";
import dataActionCreators from "Redux/Action Creators/dataActionCreators";
import dataActions from "Redux/Actions/dataAction";
import alertActionCreator from "Redux/Action Creators/alertActionCreator";
import "./InterviewerList.css";

const DashboardHeader = lazy(() =>
  import("component/Dashboard/Common/Header/DashboardHeader")
);
const InterviewerCardList = lazy(() =>
  import("component/Common/Cards/Interviewer/interviewerCardList")
);

export default function InterviewerList() {
  const { Search } = Input;
  const { TabPane } = Tabs;

  const dispatch = useDispatch();
  let [interviewers, setInterviewers] = useState([]);
  let [interviewerList, setInterviewerList] = useState([]);

  let userRole = useSelector((state) => state.authReducer.user.role);
  let data = useSelector((state) => state.dataReducer);

  useEffect(() => {
    dataActionCreators.getAdminData(
      dispatch,
      getInterviewers,
      dataActions.setInterviewerList
    );
  }, [dispatch]);

  useEffect(() => {
    if (data.interviewerList) {
      setInterviewerList(data.interviewerList.data);
      setInterviewers(data.interviewerList.data);
    }
  }, [data]);

  const onSearch = (value) => {
    let filtered = interviewers.filter((val) => val.name.includes(value));
    setInterviewerList(filtered);
  };

  const deleteProfile = async (profileId) => {
    let response = await removeData(
      deleteInterviewer + profileId,
      "Interviewer"
    );
    if (response.status === "success") {
      setInterviewerList(interviewerList.filter((e) => e._id !== profileId));
      alertActionCreator.setMessage(
        dispatch,
        "  Deleted profile from mockprep"
      );
    } else {
      alertActionCreator.setError(
        dispatch,
        "Error Deleting profile from mockprep"
      );
    }
  };

  const listProfile = async (profileId) => {
    interviewerList.forEach((x) => {
      if (x._id === profileId) {
        x.onboarded = true;
        try {
          updateData(updateInterviewer + x._id, x);
          setInterviewerList(interviewerList);
          alertActionCreator.setMessage(dispatch, x.name + "  Onboarded");
        } catch (e) {
          alertActionCreator.setError(dispatch, "Error Onboarding Interviewer");
        }
      }
    });
  };

  const deListProfile = (profileId) => {
    interviewerList.forEach((x) => {
      if (x._id === profileId) {
        x.onboarded = false;

        try {
          updateData(updateInterviewer + x._id, x);
          setInterviewerList(interviewerList);
          alertActionCreator.setMessage(dispatch, x.name + " Removed");
        } catch (e) {
          alertActionCreator.setError(dispatch, "Error Removing Interviewer");
        }
      }
    });

    setInterviewerList(interviewerList);
  };

  return (
    <div className="interviewerListContainer">
      <DashboardHeader
        title={
          userRole === "admin" ? "Onboard Interviewers" : "Book Interviewers"
        }
        icon={idCardIcon}
        onSearch={onSearch}
      />
      {interviewerList ? (
        <section className="interviewerTabContainer">
          {userRole && userRole === "admin" ? (
            <Tabs defaultActiveKey="1">
              <TabPane tab="New Interviewers" key="1">
                <section className="interviewerList">
                  {interviewerList.map((interviewer, index) => (
                    <section key={index}>
                      {!interviewer.onboarded ? (
                        <InterviewerCardList
                          interviewer={interviewer}
                          handleList={listProfile}
                          handleDelete={deleteProfile}
                          key={interviewer._id}
                        />
                      ) : (
                        <p></p>
                      )}
                    </section>
                  ))}
                </section>
              </TabPane>
              <TabPane tab="Existing Interviewers" key="2">
                <section className="interviewerList">
                  {interviewerList.map((interviewer, index) => (
                    <section key={index}>
                      {interviewer.onboarded ? (
                        <InterviewerCardList
                          interviewer={interviewer}
                          handleDelist={deListProfile}
                          handleDelete={deleteProfile}
                          key={interviewer._id}
                        />
                      ) : (
                        <p></p>
                      )}
                    </section>
                  ))}
                </section>
              </TabPane>
            </Tabs>
          ) : (
            <section className="interviewerList">
              {interviewerList.map((interviewer, index) => (
                <section key={index}>
                  {!interviewer.listed ? (
                    <InterviewerCardList
                      interviewer={interviewer}
                      key={interviewer._id}
                    />
                  ) : (
                    <></>
                  )}
                </section>
              ))}
            </section>
          )}
        </section>
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}
