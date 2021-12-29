import React, { createContext, useCallback, useMemo, useState } from "react";
import { ActivityIndicator } from "react-native";

interface Props {
  children: React.ReactNode;
}

type Credentials = {
  username: string;
  password: string;
};

const defaultValue = {
  user: "",
  login: (credentials: Credentials) => {},
  logout: () => {},
  register: () => {},
};

const AuthContext = createContext(defaultValue);

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState("");

  const login = useCallback((credentials: Credentials) => {
    console.log("login", { credentials });
    setUser(credentials.username);
  }, []); // make a login request

  const register = useCallback(() => {
    console.log("register new user");
  }, []); // register the user

  const logout = useCallback(() => {
    console.log("logout");
    setUser("");
  }, []); // clear the token in localStorage and the user data

  const value = useMemo(
    () => ({ user, login, logout, register }),
    [login, logout, register, user]
  );

  // code for pre-loading the user's information if we have their token in
  // localStorage goes here

  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.

  // if (false) {
  //   return <ActivityIndicator color="red" size="large" />;
  // }

  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };

// the UserProvider in user-context.js is basically:
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )
// and the useUser hook is basically this:
// const useUser = () => React.useContext(UserContext)
