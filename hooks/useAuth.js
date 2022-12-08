import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";
import * as Google from 'expo-auth-session/providers/google';

const AuthContext = createContext({
  //Initial State
});

export const AuthProvider = ({ children }) => {

  const singInWithGoogle = async () => {
    await Google.logInAsync()
  }
  return (
    <AuthContext.Provider value={{ user: null }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
