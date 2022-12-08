import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native-ui-lib";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View flex paddingH-25 paddingT-120>
      <Text>Home Screen</Text>
      <Button
        label={"Go to Chat Screen"}
        onPress={() => navigation.navigate("Chat")}
      />
    </View>
  );
};

export default HomeScreen;
