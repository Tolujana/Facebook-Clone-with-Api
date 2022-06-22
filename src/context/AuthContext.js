import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "622f4191b32a471db4a725b8",
    username: "jane",
    email: "jane@gmail.com",
    password: "$2a$10$tiBSjTXFl.RPpLfSHL3yGOZLjPhBl.GRNYlNPJbZQW8.vmGO9RlHm",
    profilePicture: "",
    coverPicture: "",
    followers: ["622f48914bc225b196242aa7"],
    following: ["622f48914bc225b196242aa7", "622f44b121ce9d0bcd43cf6d"],
    isAdmin: false,
    city: "lagos",
    desc: "I am just awesome",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
