import 'antd/dist/antd.css';
import './App.css';
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
               
                <Switch>
                    <Route exact path="/admin/dashboard">
                      <AdminDashboard />
                    </Route>
                    {/* <Route exact path="/admin/interviewer-list">
                        <InterviewerList />
                    </Route>
                    <Route exact path="/admin/student-list">
                        <StudentList />
                    </Route>
                    <Route exact path="/admin/analytics">
                        <Analytics />
                    </Route> */}
                    {/* <Route exact path="/admin/resource-list">
                        <ResourceList />
                    </Route>
                    <Route exact path="/admin/quiz-list">
                        <QuizList />
                    </Route>
                    <Route exact path="/admin/topics-list">
                        <TopicsList />
                    </Route>
                    <Route exact path="/admin/interviewer-profile">
                        <InterviewerProfile />
                    </Route>
                    <Route exact path="/admin/student-profile">
                        <StudentProfile />
                    </Route> */}
                    {/* <Route path='*' exact={true}>
                        <Error />
                    </Route> */}
                </Switch>
            </Router>
    </div>
  );
}

export default App;
