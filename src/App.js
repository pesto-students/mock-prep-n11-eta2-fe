import React,{ Suspense, useEffect } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { fallback } from "Constant/navList";
import { useSelector } from "react-redux";
import {  notification } from 'antd';
import { errorSign } from "Constant/antIcons";
import { utilityFunction } from "component/Utility/utility";
import { useDispatch } from "react-redux"; 
import {  useCookies } from "react-cookie";
import Route  from "Route/Routes"
import 'antd/dist/antd.min.css';
import './App.css';

function App() {
  
  const [cookies,removeCookie] = useCookies(['name']);
  const dispatch = useDispatch()
  const error = useSelector(state => state.errorReducer)
  const auth = useSelector(state => state.authReducer)

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
  },[auth,error,dispatch])

  
  useEffect(() => { 
    if (cookies.user) {
      utilityFunction.logIn(dispatch, cookies.user, cookies.user.role)
    }
   
  },[cookies])
  
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