import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { fallback } from "constant/navList";
import Routes from "Route/Routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={fallback}>
          <Switch>
            <Routes />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
