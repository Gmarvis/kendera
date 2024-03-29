import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Onboarding from "./components/Onboarding";
import AuthScreen from "./screens/SignUpScreen";

import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeSreen from "./screens/HomeSreen";
import CreateProgramScreen from "./screens/CreateProgramScreen";
import Activities from "./screens/Activities";
import ProfileScreen from "./screens/ProfileScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseConfig";
import { AppContexProvider } from "./context/AppContext";

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTaps = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5b45db",
        },
        headerTintColor: "white",
        tabBarActiveTintColor: "#5b45db",
        // tabBarActiveBackgroundColor: "#5b45db",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeSreen}
        options={{
          headerTitle: "Programs",
          tabBarIcon: () => <Ionicons name={"home"} size={25} />,
        }}
      />
      <Tab.Screen
        name="Create Program"
        component={CreateProgramScreen}
        options={{
          tabBarIcon: () => <Ionicons name={"add-circle"} size={25} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Ionicons name={"person"} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

const NewUserScreens = () => {
  return (
    // <NavigationContainer>
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="onBoarding" component={Onboarding} />
      <stack.Screen name="signup" component={SignUpScreen} />
      <stack.Screen name="login" component={LoginScreen} />
    </stack.Navigator>
    // </NavigationContainer>
  );
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      // console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <AppContexProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {!user ? (
              <stack.Screen name="onBoarding" component={NewUserScreens} />
            ) : (
              <stack.Screen name="Home1" component={HomeTaps} />
            )}
            <stack.Screen name="Activities" component={Activities} />
          </stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppContexProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  logo: {
    fontSize: 50,
    color: "#5b45db",
    fontWeight: "bold",
  },
});
