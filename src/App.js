import React,{ Suspense,lazy } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import StudentProfile from "component/Dashboard/Student/Profile/StudentProfile";
import { fallback } from "constant/navList";
import 'antd/dist/antd.css';
import './App.css';
import { useSelector } from "react-redux";
import PublicRoute from "Route/PublicRoute";
import PrivateRoute from "Route/PrivateRoute";

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
  const loginState = useSelector(state => state.authReducer);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={fallback}>
          <Switch>
            <PublicRoute exact path="/" component={Landing} loggedIn={loginState.isLoggedIn} restricted="false" />
            {/* <Route exact path="/" component={Landing} /> */}
            <PublicRoute exact path="/about" component={About}  loggedIn={loginState.isLoggedIn} restricted="false" />
            <PublicRoute exact path="/package" component={Package}  loggedIn={loginState.isLoggedIn} restricted="false"/>
            <PublicRoute exact path="/join" component={Join}  loggedIn={loginState.isLoggedIn} restricted="false"/>
            <PublicRoute exact path="/contact" component={Contact}  loggedIn={loginState.isLoggedIn} restricted="false"/>
            <PublicRoute exact path="/signIn" component={SignIn}  loggedIn={loginState.isLoggedIn} restricted="false" />
            <PublicRoute exact path="/admin/login" component={AdminLogin} loggedIn={loginState.isLoggedIn} restricted="false"/>
            <PrivateRoute exact path="/admin/dashboard" component={Dashboard} loggedIn={loginState.isLoggedIn}/>
            <PrivateRoute exact path="/admin/interviewerList" component={InterviewerList} loggedIn={loginState.isLoggedIn}/>
            <PrivateRoute exact path="/interviewer/dashboard" component={InterviewerList} loggedIn={loginState.isLoggedIn}/>
            <PrivateRoute exact path="/admin/interviewerProfile/:profileId" component={InterviewerDashboard} loggedIn={loginState.isLoggedIn}/>
            <PrivateRoute exact path="/admin/studentList" component={StudentList} loggedIn={loginState.isLoggedIn}/>
            <PrivateRoute exact path="/admin/studentProfile/:profileId" component={StudentProfile} loggedIn={loginState.isLoggedIn}/>
            <PrivateRoute exact path="/admin/topicsList" component={TopicsList} loggedIn={loginState.isLoggedIn}/>
            <PrivateRoute exact path="/admin/resourceList/:resouceId?" component={ResourceList} loggedIn={loginState.isLoggedIn}/>
            <PrivateRoute exact path="/admin/quizList/:topicId?" component={QuizList} loggedIn={loginState.isLoggedIn}/>
            <PrivateRoute exact path="/interviewer/dashboard" component={InterviewerDashboard} loggedIn={loginState.isLoggedIn}/>

          </Switch>  
        </Suspense>
      </Router>
    </div>  
  );
}

export default App;
