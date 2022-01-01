import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { fallback } from "constant/navList";
import Routes from "Route/Routes";
import { Switch } from "react-router"
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
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
