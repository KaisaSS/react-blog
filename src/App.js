import "./App.css";
import { BrowserRouter } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
