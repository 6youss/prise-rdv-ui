import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./screens/Home";
import NavBar from "./components/NavBar";
import Doctors from "./screens/Doctors";

const AppAuthenticated: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={["/signup", "/login"]}>
          <Redirect to="/" />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={["/doctors/:doctorName", "/doctors"]}>
          <Doctors />
        </Route>
        <Route path="*">
          <p> 404 </p>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppAuthenticated;
