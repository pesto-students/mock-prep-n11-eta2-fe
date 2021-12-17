import React,{ Suspense,lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentProfile from "component/Dashboard/Student/Profile/StudentProfile";
import { fallback } from "constant/navList";
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
const AdminLogin = lazy(() => import("component/Join/AdminLogin/adminLogin"))
const InterviewerDashboard = lazy(()=> import("component/Dashboard/Interviewer/Dashboard/InterviewerDashboard"))

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
            <Route exact path="/admin/login" component={AdminLogin} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/interviewerList" component={InterviewerList} />
            <Route exact path="/interviewer/dashboard" component={InterviewerList} />
            <Route exact path="/admin/interviewerProfile/:profileId" component={InterviewerDashboard} />
            <Route exact path="/admin/studentList" component={StudentList} />
            <Route exact path="/admin/studentProfile/:profileId" component={StudentProfile} />
            <Route exact path="/admin/topicsList" component={TopicsList} />
            <Route exact path="/admin/resourceList/:resouceId?" component={ResourceList} />
            <Route exact path="/admin/quizList/:topicId?" component={QuizList} />
            <Route exact path="/interviewer/dashboard" component={InterviewerDashboard} />

          </Switch>  
        </Suspense>
      </Router>
    </div>  
  );
}

export default App;
