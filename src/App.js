import React,{ Suspense, useEffect } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { fallback } from "constant/navList";
import Route  from "Route/Routes"
import 'antd/dist/antd.css';
import './App.css';
import { useSelector } from "react-redux";
import {  notification } from 'antd';
import { errorSign } from "constant/antIcons";
import { utilityFunction } from "component/Utility/utility";
import { useDispatch } from "react-redux";
import { useCookies} from "react-cookie"

function App() {
  
  const dispatch = useDispatch();
  const [cookies,getCookies,setCookies] = useCookies() 
  const error = useSelector(state => state.errorReducer)

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