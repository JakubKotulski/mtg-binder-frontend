import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import AccountPage from "./components/AccountPage/AccountPage";
import UserPanel from "./components/UserPanel/UserPanel";
import CardUpdatePage from "./components/CardUpdatePage/CardUpdatePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <NavBar />
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/account" component={AccountPage} />
        <Route path="/user-panel" component={UserPanel} />
        <Route path="/card-update/:id" component={CardUpdatePage} />
      </Switch>
    </Router>
  );
}

export default App;
