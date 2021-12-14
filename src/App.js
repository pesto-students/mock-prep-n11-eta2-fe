import React,{ Suspense,lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { InterviewerProfile } from "component/Dashboard/Interviewer/Profile/InterviewerProfile";
import StudentProfile from "component/Dashboard/Student/Profile/StudentProfile";
import { Spin } from "antd"
import 'antd/dist/antd.css';
import './App.css';

const Landing = lazy(() => import("component/Landing/Landing"))
const About = lazy(() => import("component/About/About"))
const Package = lazy(() => import("component/Package/Package"))
const Join = lazy(() => import("component/Join/Join"))
const Contact = lazy(() => import("component/Contact/Contact"))
const SignIn = lazy(() => import("component/Join/SignIn/SignIn"))
const Dashboard = lazy(() => import("component/Dashboard/Admin/Dashboard/Dashboard"))
const InterviewerList = lazy(() => import("component/Dashboard/Interviewer/List/InterviewerList"))
const StudentList = lazy(() => import("component/Dashboard/Student/List/StudentList"))
const TopicsList = lazy(() => import("component/Dashboard/Common/Topics/List/TopicsList"))
const ResourceList = lazy(() => import("component/Dashboard/Common/Resource/ResouceList"))
const QuizList = lazy(() => import("component/Dashboard/Common/Quiz/Quiz"))


const fallback = <div id="loader" style={{ margin: "40vh auto", width: "40vw", display: "flex" }}><span id="spin"><Spin size="large"></Spin>Loading...</span></div>

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={fallback}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/package" component={Package} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/interviewerList" component={InterviewerList} />
            <Route exact path="/admin/interviewerProfile/:profileId" component={InterviewerProfile} />
            <Route exact path="/admin/studentList" component={StudentList} />
            <Route exact path="/admin/studentProfile/:profileId" component={StudentProfile} />
            <Route exact path="/admin/topicsList" component={TopicsList} />
            <Route exact path="/admin/resourceList/:resouceId?" component={ResourceList} />
            <Route exact path="/admin/quizList/:topicId?" component={QuizList} />
          </Switch>  
      </Suspense>
      </Router>
    </div>  
  );
}

export default App;
