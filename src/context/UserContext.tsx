import React from "react";
import { useAuth } from "./AuthContext";
const UserContext = React.createContext(null);
const UserProvider = (props: any) => {
  const auth = useAuth();
  const user = auth ? auth.data.user : null;
  return <UserContext.Provider value={user} {...props} />;
};

const useUser = () => React.useContext(UserContext);
export { useUser, UserProvider };
