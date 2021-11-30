import "./App.css";
import { BrowserRouter } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
