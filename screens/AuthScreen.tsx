import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  // ImageBackground,
} from "react-native";
import SignUp from "../components/SignUp";

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
