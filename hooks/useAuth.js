import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";

const AuthContext = createContext({
  //Initial State
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: 'hola' }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
