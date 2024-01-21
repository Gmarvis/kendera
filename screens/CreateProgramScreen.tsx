import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

const CreateProgramScreen = () => {
  const handleCreateProgram = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Program Name</Text>
        <TextInput style={styles.input} />
        {/* <Text>Duration</Text> */}
        {/* <View style={styles.duration}>
          <TextInput
            style={styles.duratioInput}
            placeholder="Months"
            keyboardType={"number-pad"}
            maxLength={2}
          />
          <TextInput
            style={styles.duratioInput}
            placeholder="Weeks"
            keyboardType={"number-pad"}
            maxLength={2}
          />
          <TextInput
            style={styles.duratioInput}
            placeholder="Days"
            keyboardType={"number-pad"}
            maxLength={2}
          />
        </View> */}
        <Text style={styles.title}>Description</Text>
        <TextInput
          style={styles.description}
          multiline={true}
          numberOfLines={4}
          maxLength={40}
        />
        <Pressable style={styles.pressable} onPress={handleCreateProgram}>
          <Text
            style={{
              color: "white",
            }}
          >
            Create
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateProgramScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3f2fd",
  },
  form: {
    width: "90%",
    // height: 80,
    // backgroundColor: "red",
  },
  input: {
    borderColor: "#5b45db",
    borderWidth: 1,
    height: 60,
    width: "100%",
    borderRadius: 5,
    padding: 5,
  },
  duration: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  duratioInput: {
    borderColor: "#5b45db",
    borderWidth: 1,
    height: 60,
    borderRadius: 5,
    padding: 10,
    width: "30%",
  },
  description: {
    borderColor: "#5b45db",
    borderWidth: 1,
    height: 90,
    width: "100%",
    borderRadius: 5,
    padding: 10,
  },
  pressable: {
    marginTop: 10,
    backgroundColor: "#5b45db",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 60,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    margin: 5,
  },
});
