import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Dashboard from "./Screens/Dashboard";
import { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [token, setToken] = useState("");

  async function getItem(item1Key) {
    try {
      const item1Value = await AsyncStorage.getItem(item1Key);

      if (item1Value !== null) {
        console.log("Item 1:", item1Value);
        return { item1: item1Value };
      } else {
        console.log("item not found");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving item:", error);
      return null;
    }
  }

  useEffect(() => {
    async function fetchData() {
      const items = await getItem("token");
      if (items) {
        setToken(items.item1);
      } else {
        setToken("");
      }
    }
    fetchData();
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "white" }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={token ? "Dashboard" : "Login"}
          screenOptions={{ headerShown: false, animation: "slide_from_left" }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
