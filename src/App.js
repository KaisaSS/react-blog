import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
