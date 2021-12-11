import React,{ Suspense,lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spin } from "antd"
import 'antd/dist/antd.css';
import './App.css';

const Landing = lazy(() => import("component/Landing/Landing"))
const fallback = <div id="loader" style={{ margin: "40vh auto", width: "40vw", display: "flex" }}><span id="spin"><Spin size="large"></Spin>Loading...</span></div>

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={fallback}>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>  
      </Suspense>
      </Router>
    </div>  
  );
}

export default App;
