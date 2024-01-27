import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = () => {
    alert("crating account");
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Kendera</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="email@gmail.com"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
        />

        <Pressable style={styles.pressable} onPress={handleCreateAccount}>
          <Text
            style={{
              color: "white",
            }}
          >
            Login
          </Text>
        </Pressable>
        <View
          style={{ justifyContent: "center", flexDirection: "row", gap: 5 }}
        >
          <Text>Don't have an Account?</Text>

          <Pressable onPress={() => navigation.navigate("signup")}>
            <Text
              style={{
                color: "#5b45db",
              }}
            >
              SignUp
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  input: {
    borderColor: "#5b45db",
    borderWidth: 1,
    height: 60,
    width: "90%",
    borderRadius: 5,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5b45db",
    marginBottom: 12,
  },
  pressable: {
    backgroundColor: "#5b45db",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 60,
  },
  pwdSection: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pwdInput: {
    width: "49%",
  },
});
