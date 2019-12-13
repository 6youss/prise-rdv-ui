import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Login from "./Login";
import Home from "./Home";
import NavBar from "../components/NavBar";
import Doctors from "./Doctors";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>        
        </Route>
        <Route path={["/doctors/:name" , "/doctors" ]}>
          <Doctors/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <ToastContainer autoClose={6000} />
    </Router>
  );
};

export default App;
