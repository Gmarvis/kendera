import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CreateProgramScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Create Program Screen</Text>
    </View>
  );
};

export default CreateProgramScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
