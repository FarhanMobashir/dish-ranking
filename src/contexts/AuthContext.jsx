import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", {
    userData: {},
    isLoggedIn: false,
  });

  const login = (user) => {
    setUser({
      userData: user,
      isLoggedIn: true,
    });
  };

  const logout = () => {
    setUser({
      userData: {},
      isLoggedIn: false,
    });
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
