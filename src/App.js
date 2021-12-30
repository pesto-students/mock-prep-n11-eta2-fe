import React,{ Suspense, useEffect } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { fallback } from "constant/navList";
import { useDispatch } from "react-redux"; 
import {  useCookies } from "react-cookie";
import Route from "Route/Routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import './App.css';
import authActionCreator from "Redux/Action Creators/authActionCreators";

import Component from "component/Dashboard/Interviewer/Dashboard/Dashboard"

function App() {
  
  const [cookies] = useCookies(['user']);
  const dispatch = useDispatch()

  useEffect(() => { 
    if (cookies.user) {
      authActionCreator.logIn(dispatch, cookies.user)
    }
  }, [cookies,dispatch])
  
  return (

    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={fallback}>
          <Switch>
            <Route/>
            {/* <Component/> */}
          </Switch>  
        </Suspense>
      </Router>
    </div>  
  );
}

export default App;