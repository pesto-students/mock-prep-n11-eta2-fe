import React,{ Suspense, useEffect } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { fallback } from "Constant/navList";
import Route  from "Route/Routes"
import 'antd/dist/antd.css';
import './App.css';
import { useSelector } from "react-redux";
import {  notification } from 'antd';
import { errorSign } from "Constant/antIcons";
import { utilityFunction } from "component/Utility/utility";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.errorReducer)
  console.log(error)
  useEffect (() => {
    if(error.error){
        notification.open({
            message: error.error,
            icon: errorSign,
          });
        setTimeout(() => {
          utilityFunction.setError(dispatch, null)
        },3000)
      }
    },[error])

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