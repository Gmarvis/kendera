import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  // ImageBackground,
} from "react-native";
import Login from "../components/Login";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

export default LoginScreen;

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
