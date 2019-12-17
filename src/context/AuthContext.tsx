import React from "react";
import { FullPageSpinner } from "../components";
import { fetchUser } from "../api/userAPI";
const AuthContext = React.createContext({} as IUser);

interface IDoctor {
    firstName:string;
    lastName: string;
    holidays: Date[];
}
interface IPatient {
    firstName:string;
    lastName: string;    
}

interface IUser {
    patient: IPatient | undefined;
    doctor: IDoctor | undefined;
}

const AuthProvider: React.FC = props => {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);
  const [user, setUser] = React.useState({} as IUser);

  React.useEffect(() => {
    //check for user
    fetchUser()
      .then(user => {
        setUser(user);
      })
      .finally(() => {
        setFirstAttemptFinished(true);
      });
  }, []);

  if (!firstAttemptFinished) {
    return <FullPageSpinner />;
  }

  return <AuthContext.Provider value={user} {...props} />;
};

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
