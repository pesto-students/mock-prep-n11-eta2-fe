import React,{ Suspense } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { fallback } from "constant/navList";
import Route  from "Route/Routes"
import 'antd/dist/antd.css';
import './App.css';

function App() {
  
  return (
    <div className="App">
      {/* <Router>
        <Suspense fallback={fallback}>
          <Switch>
              <Route/>
          </Switch>  
        </Suspense>
      </Router> */}
    </div>  
  );
}

export default App;