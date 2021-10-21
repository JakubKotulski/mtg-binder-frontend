import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import AccountPage from "./components/AccountPage/AccountPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <NavBar />
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/account" component={AccountPage} />
      </Switch>
    </Router>
  );
}

export default App;
