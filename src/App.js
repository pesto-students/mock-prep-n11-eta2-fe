import React,{ Suspense,lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spin } from "antd"
import 'antd/dist/antd.css';
import './App.css';

const Landing = lazy(() => import("component/Landing/Landing"))

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Spin id="loader">Loading...</Spin>}>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>  
      </Suspense>
      </Router>
    </div>  
  );
}

export default App;
