import React from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "./context/AuthContext";
import AppAuthenticated from "./AppAuthenticated";
import AppUnauthenticated from "./AppUnauthenticated";

function App() {
  const auth = useAuth();
  return (
    <>
      {auth.user ? <AppAuthenticated /> : <AppUnauthenticated />}
      <ToastContainer hideProgressBar position={toast.POSITION.BOTTOM_CENTER} autoClose={4000} />
    </>
  );
}

export default App;
