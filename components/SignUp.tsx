import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  // firebase auth instance
  const auth = FIREBASE_AUTH;

  const handleCreateAccount = async () => {
    setLoading(true);

    if (!email || !password) {
      setSignUpError("form incomplete.!");
      setTimeout(() => {
        setSignUpError("");
      }, 3000);
      setLoading(false);
      return;
    }

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(response);
      setLoading(false);
    } catch (err: any) {
      alert("sign Up failed " + err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}

      //  behavior="padding"
    >
      <Text style={styles.title}>Create An Account</Text>
      <View style={styles.form}>
        {/* <TextInput
          style={styles.input}
          placeholder="User name"
          autoCorrect={false}
          onChangeText={(name) => setName(name)}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="email@gmail.com"
          autoCorrect={false}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          style={[styles.input]}
          //   secureTextEntry
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        />

        {loading ? (
          <ActivityIndicator size={"large"} color={"#5b45db"} />
        ) : (
          <Pressable style={styles.pressable} onPress={handleCreateAccount}>
            <Text
              style={{
                color: "white",
              }}
            >
              Sign Up
            </Text>
          </Pressable>
        )}
        {signUpError && (
          <Text
            style={{
              color: "red",
            }}
          >
            {signUpError}
          </Text>
        )}
        <View
          style={{ justifyContent: "center", flexDirection: "row", gap: 5 }}
        >
          <Text>Don't have an Account?</Text>

          <Pressable onPress={() => navigation.navigate("login")}>
            <Text
              style={{
                color: "#5b45db",
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

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
