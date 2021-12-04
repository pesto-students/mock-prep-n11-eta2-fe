import { Landing} from "../src/components/landing/index"
import 'antd/dist/antd.css';
import './App.css';
import MPHeader from "./components/Primary Components/Header/MPHeader";
import JoinUs from "./components/Join Us/JoinUs";


function App() {
  return (
    <div className="App">
        <MPHeader />
        {/* <Landing></Landing> */}
        <JoinUs />
    </div>
  );
}

export default App;
