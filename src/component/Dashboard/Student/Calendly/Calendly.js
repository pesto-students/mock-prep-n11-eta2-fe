import DashboardHeader from "component/Dashboard/Common/Header/DashboardHeader";
import { userAddIcon } from "constant/antIcons";
import React from "react";
import { InlineWidget } from "react-calendly";
import alertActionCreator from "Redux/Action Creators/alertActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom"
import {
  getInterviewerById,
  updateStudent,
  insertInterviews,
} from "constant/apiUrl";
import dataActions from "Redux/Actions/dataAction";
import dataActionCreator from "Redux/Action Creators/dataActionCreators";
import { useEffect } from "react";
import { insertData } from "api/Api";
import "./Calendly.css";

export default function CalendlyApp() {
  const { interviewerId } = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const data = useSelector((state) => state.dataReducer);

  useEffect(() => {
    dataActionCreator.getAdminData(
      dispatch,
      getInterviewerById + interviewerId,
      dataActions.setInterviewer
    );
  }, [dispatch]);

  const handleBooking = async () => {
    if (
      data.student.data.package &&
      data.student.data.package.interviewsLeft > 0
    ) {
      let value = createInterviews();
      let pack = {
        package: {
          interviewsLeft: --data.student.data.package.interviewsLeft,
        },
      };

      insertData(insertInterviews, value);

      insertData(updateStudent, pack);

      alertActionCreator.setMessage(dispatch, "Booking Confirmed");
    } else {
      alertActionCreator.setError(dispatch, "Upgrade Package to Book");
    }
  };

  function createInterviews() {
    if (auth && auth.user && data && data.interviewer) {
      let options = {
        student: {
          name: auth.user.name,
          email: auth.user.email,
          id: auth.user.id,
        },
        interviewer: {
          name: data.interviewer.data.name,
          email: data.interviewer.data.email,
          id: data.interviewer.data.userId,
        },
        studentFeedback: {
          interviewerExperience: 0,
        },
        interviewerFeedback: {
          overallRating: 0,
        },

        topic: "Interview Preparation",
        date: "01/10/22",
        time: "15:30",
        meetingUrl:
          "https://calendly.com/events/5f49bcd3-331b-4560-93a7-cc4f78244acf/google_meet",
        status: "new",
        key: 1,
      };

      return options;
    }
  }
  const bookingCompleted = (
    <>
      <button onClick={handleBooking} className="btn btn-primary bookingButton">
        Click to Complete Booking
      </button>
    </>
  );

  return (
    <>
      <DashboardHeader title="Book Interview Slot" icon={userAddIcon} />
      {bookingCompleted}
      <div className="calendlyApp">
        <InlineWidget url="https://calendly.com/pesto-mockprep/interview" />
      </div>
    </>
  );
}
