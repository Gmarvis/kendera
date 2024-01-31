import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProgramCards = ({ ...program }: Program) => {
  return (
    <Pressable
      style={styles.container}
      onLongPress={() => alert("do you want to delete program?")}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>{program.name}</Text>
        <Pressable>
          <Ionicons name={"ellipsis-vertical-outline"} size={25} />
        </Pressable>
      </View>
      <Text>{program.description}</Text>
      <View style={styles.dates}>
        <View>
          <Text style={styles.dateTitle}>Start Date</Text>
          <Text>{program.id}</Text>
        </View>
        <View>
          {/* <Text style={styles.dateTitle}>End Date</Text> */}
          {/* <Text>{program.end_date}</Text> */}
        </View>
      </View>
    </Pressable>
  );
};

export default ProgramCards;

const styles = StyleSheet.create({
  container: {
    // height: 150,
    width: "95%",
    // backgroundColor: "#5b45db",
    backgroundColor: "#fff",

    alignSelf: "center",
    borderRadius: 5,
    marginTop: 20,
    flex: 1,
    gap: 5,
    padding: 10,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    // color: "white",
    // color: "#5b45db",
    fontWeight: "bold",
    fontSize: 20,
  },
  dates: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTitle: {
    // color: "white",
    fontWeight: "bold",
  },
});
