import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
  Button,
} from "react-native";
// import { programs } from "../dummyData";
import ProgramCards from "../components/ProgramCards";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppContext } from "../context/AppContext";

const HomeSreen = ({ navigation }: any) => {
  // const [programs, setPrograms] = useState<Program[]>([]);
  const { allPrograms } = useAppContext();

  const clearStorage = async () => {
    await AsyncStorage.removeItem("programData");
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search..." />
      <Button title="delete program" onPress={clearStorage} />
      <FlatList
        data={allPrograms}
        renderItem={(program) => {
          return (
            <ProgramCards
              id={program.item.id}
              name={program.item?.name}
              description={program.item?.description}
            />
          );
        }}
      />

      <Pressable
        style={styles.floatBTN}
        onPress={() => navigation.navigate("Activities")}
      >
        <Ionicons
          name={"create-outline"}
          style={{
            color: "white",

            fontWeight: "bold",
          }}
          size={25}
        />
      </Pressable>
    </View>
  );
};

export default HomeSreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd",
  },
  input: {
    width: "95%",
    padding: 10,
    backgroundColor: "#fff",
    margin: 2,
    marginTop: 4,
    alignSelf: "center",
  },
  floatBTN: {
    backgroundColor: "#5b45db",
    flex: 1,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    position: "absolute",
    right: 5,
    bottom: 5,
    borderRadius: 50,
  },
});
