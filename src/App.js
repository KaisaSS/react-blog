import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
