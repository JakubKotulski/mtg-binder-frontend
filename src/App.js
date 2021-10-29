import "./App.css";
import MainPage from "./components/Pages/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import AccountPage from "./components/Pages/AccountPage/AccountPage";
import UserPanel from "./components/Pages/UserPanel/UserPanel";
import CardUpdatePage from "./components/Pages/CardUpdatePage/CardUpdatePage";
import ChangeUserDataPage from "./components/Pages/ChangeUserDataPage/ChangeUserDataPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// test

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
        <Route path="/user-change-data" component={ChangeUserDataPage} />
      </Switch>
    </Router>
  );
}

export default App;
