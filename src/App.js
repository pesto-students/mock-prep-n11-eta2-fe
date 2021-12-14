import 'antd/dist/antd.css';
import './App.css';
import Landing from "./components/landing/index"
import Packages from './components/Packages/Packages';
import JoinUs from './components/Join Us/JoinUs';
import Contact from './components/Contact/Contact';
import About from "./components/About/About"
import SignIn from "./components/Join Us/SignIn/SignIn"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard"
import InterviewerDashboard from './components/Dashboard/Interviewer/Dashboard/InterviewerDashboard';

function App() {

  return (
    <div className="App">
        <Router>
          <Switch>
              <Route exact path="/">
                  <Landing />
              </Route>
              <Route exact path="/about">
                  <About />
              </Route>
              <Route exact path="/package">
                <Packages />
              </Route>
              <Route exact path="/join">
                <JoinUs />
              </Route>
              <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/signIn">
                <SignIn />
            </Route>
             <Route exact path="/admin/dashboard">
                <AdminDashboard />
            </Route>
            <Route exact path="/interviewer/dashboard">
                <InterviewerDashboard />
            </Route>
          </Switch>  
       </Router>
    </div>  
  );
}

export default App;
