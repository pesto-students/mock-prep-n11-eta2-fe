import React,{ Suspense,lazy} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';

const About = lazy(() => import("./components/About/About"));
const Join = lazy(() => import("./components/Join Us/JoinUs"));
const Landing = lazy(() => import("./components/landing/index"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Package = lazy(() => import("./components/Packages/Packages"));

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Suspense fallback={<p>Loading..</p>}>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>  
      </Suspense>
      </Router> */}
    </div>  
  );
}

export default App;
