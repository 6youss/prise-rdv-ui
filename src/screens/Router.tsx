import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import NavBar from "../components/NavBar";
import Doctors from "./Doctors";
import { AuthProvider } from "../context/AuthContext";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
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
      </AuthProvider>
      <ToastContainer hideProgressBar position={ toast.POSITION.BOTTOM_CENTER } autoClose={4000} />
    </Router>
  );
};

export default App;
