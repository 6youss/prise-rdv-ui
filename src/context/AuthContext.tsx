import React from "react";
import { FullPageSpinner } from "../components";
import { fetchUser } from "../api/userAPI";
const AuthContext = React.createContext({} as IAuth);

interface IDoctor {
  firstName: string;
  lastName: string;
  holidays: Date[];
}
interface IPatient {
  firstName: string;
  lastName: string;
}

interface IUser {
  patient: IPatient;
  doctor: IDoctor;
}

interface IAuth {
  user: IUser | undefined;
  logout: () => void;
  login: () => void;
}

const AuthProvider: React.FC = props => {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);
  const [user, setUser] = React.useState(undefined);

  React.useEffect(() => {
    login();
  }, []);

  if (!firstAttemptFinished) {
    return <FullPageSpinner />;
  }
  function login() {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      //check for user
      fetchUser()
        .then(user => {
          setUser(user);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setFirstAttemptFinished(true);
        });
    } else {
      console.log("no token");
      setFirstAttemptFinished(true);
    }
  }

  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(undefined);
  }

  return <AuthContext.Provider value={{ user, login, logout }} {...props} />;
};

function useAuth() {
  const context = React.useContext(AuthContext);
  if (Object.keys(context).length === 0) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
