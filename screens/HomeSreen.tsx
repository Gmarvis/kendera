import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import { programs } from "../dummyData";
import ProgramCards from "../components/ProgramCards";

import Ionicons from "@expo/vector-icons/Ionicons";

const data = new Array(50).fill(0).map((_, index) => ({ id: index }));

const HomeSreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search..." />
      <FlatList
        data={programs}
        renderItem={(program) => {
          return (
            <ProgramCards
              name={program.item.name}
              description={program.item.description}
              start_date={program.item.start_date}
              end_date={program.item.end_date}
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
