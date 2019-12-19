import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import NavBar from "./components/NavBar";
import Doctors from "./screens/Doctors";

const AppUnauthenticated: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={["/doctors/:doctorName", "/doctors"]}>
          <Doctors />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path={["/signup", "/signup/:userType"]}>
          <Signup />
        </Route>
        <Route path="*">
          <p> 404 </p>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppUnauthenticated;
