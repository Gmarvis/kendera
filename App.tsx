import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Onboarding from "./components/Onboarding";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.logo}>Kendera</Text> */}
      <Onboarding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  logo: {
    fontSize: 50,
    color: "#5b45db",
    fontWeight: "bold",
  },
});
