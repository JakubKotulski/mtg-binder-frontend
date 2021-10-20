import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <NavBar />
      <Switch>
        <Route path="/" component={MainPage} exact={true}/>
      </Switch>
    </Router>
  );
}

export default App;
