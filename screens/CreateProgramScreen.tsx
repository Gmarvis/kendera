import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppContext } from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const CreateProgramScreen = () => {
  const [programName, SetProgramName] = useState("");
  const [description, seDescription] = useState("");

  const { setAllProgram } = useAppContext();
  const navigation = useNavigation();

  // CREATE PROGRAM
  const handleCreateProgram = async () => {
    try {
      if (!programName || !description) {
        throw new Error("please make sure you fill the form propaly");
      }
      const program = {
        id: new Date(),
        name: programName,
        description,
      };

      let storedData = JSON.parse(
        (await AsyncStorage.getItem("programData")) || "[]"
      );

      const savedProgram = await AsyncStorage.setItem(
        "programData",
        JSON.stringify([program, ...storedData])
      );

      const jsonValue = await AsyncStorage.getItem("programData");
      if (jsonValue) {
        setAllProgram(JSON.parse(jsonValue));
        navigation.navigate("Home");
        // console.log("jsonValue", JSON.parse(jsonValue));
      }
    } catch (err: any) {
      alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Program Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(programName) => SetProgramName(programName)}
        />

        <Text style={styles.title}>Description</Text>
        <TextInput
          style={styles.description}
          onChangeText={(description) => seDescription(description)}
          multiline={true}
          numberOfLines={4}
          maxLength={500}
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
