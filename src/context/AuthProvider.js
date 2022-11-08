import React, { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
  const value = {};
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
