import React,{ Suspense, useEffect } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { fallback } from "constant/navList";
import { utilityFunction } from "component/Utility/utility";
import { useDispatch } from "react-redux"; 
import {  useCookies } from "react-cookie";
import Route from "Route/Routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import './App.css';

function App() {
  
  const [cookies] = useCookies(['user']);
  const dispatch = useDispatch()

  useEffect(() => { 
    if (cookies.user) {
      utilityFunction.logIn(dispatch, cookies.user, cookies.user.role)
    }
  }, [cookies,dispatch])
  
  return (

    <div className="App">
      <Router>
        <Suspense fallback={fallback}>
          <Switch>
              <Route/>
          </Switch>  
        </Suspense>
      </Router>
    </div>  
  );
}

export default App;