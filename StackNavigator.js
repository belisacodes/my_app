import useAuth from "./hooks/useAuth";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
