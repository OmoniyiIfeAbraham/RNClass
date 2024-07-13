import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Dashboard from "./Screens/Dashboard";
import { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

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
    // drawer
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={"Dashboard"}
          screenOptions={{
            drawerPosition: "left",
            drawerType: "front",
            swipeEdgeWidth: 100,
            drawerHideStatusBarOnOpen: false,
            overlayColor: "#00000090",
            drawerStyle: {
              backgroundColor: "#e6e6e6",
              width: 250,
            },
            headerShown: true,
            swipeEnabled: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#00800f",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "bold",
            },
          }}
        >
          <Drawer.Screen
            name="Advertise"
            component={Screen1}
            options={{
              title: "Advertise",
              drawerIcon: ({ focused }) => (
                // <View style={focused ? styles.activeTab : styles.inactiveTab}>
                <Ionicons
                  name="megaphone-outline"
                  size={focused ? 30 : 23}
                  color={focused ? "#213481" : "#000000"}
                />
                // </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Earn"
            component={Screen2}
            options={{
              title: "Earn",
              drawerIcon: ({ focused }) => (
                // <View style={focused ? styles.activeTab : styles.inactiveTab}>
                <Feather
                  name="dollar-sign"
                  size={focused ? 30 : 23}
                  color={focused ? "#213481" : "#000000"}
                />
                // </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: "Dashboard",
              drawerIcon: ({ focused }) => (
                // <View style={focused ? styles.activeTab : styles.inactiveTab}>
                <FontAwesome6
                  name="house"
                  size={focused ? 30 : 23}
                  color={focused ? "#213481" : "#000000"}
                />
                // </View>
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>

    // top tab
    // <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    //   <NavigationContainer>
    //     <Tab.Navigator
    //       initialRouteName={"Dashboard"}
    //       screenOptions={{
    //         headerShown: false,
    //         tabBarLabelStyle: {
    //           fontSize: 12,
    //           marginBottom: 5,
    //         },
    //         tabBarActiveTintColor: "#213481",
    //         tabBarHideOnKeyboard: true,
    //         tabBarInactiveTintColor: "#000000",
    //         // tabBarShowLabel: false
    //         tabBarItemStyle: { maxHeight: 100 },
    //         tabBarStyle: { backgroundColor: "powderblue" },
    //       }}
    //     >
    //       <Tab.Screen
    //         name="Advertise"
    //         component={Screen1}
    //         options={{
    //           title: "Advertise",
    //           tabBarIcon: ({ focused }) => (
    //             <View style={focused ? styles.activeTab : styles.inactiveTab}>
    //               <Ionicons
    //                 name="megaphone-outline"
    //                 size={focused ? 30 : 23}
    //                 color={focused ? "#213481" : "#000000"}
    //               />
    //             </View>
    //           ),
    //         }}
    //       />
    //       <Tab.Screen
    //         name="Earn"
    //         component={Screen2}
    //         options={{
    //           title: "Earn",
    //           tabBarIcon: ({ focused }) => (
    //             <View style={focused ? styles.activeTab : styles.inactiveTab}>
    //               <Feather
    //                 name="dollar-sign"
    //                 size={focused ? 30 : 23}
    //                 color={focused ? "#213481" : "#000000"}
    //               />
    //             </View>
    //           ),
    //         }}
    //       />
    //       <Tab.Screen
    //         name="Dashboard"
    //         component={Dashboard}
    //         options={{
    //           title: "Dashboard",
    //           tabBarIcon: ({ focused }) => (
    //             <View style={focused ? styles.activeTab : styles.inactiveTab}>
    //               <FontAwesome6
    //                 name="house"
    //                 size={focused ? 30 : 23}
    //                 color={focused ? "#213481" : "#000000"}
    //               />
    //             </View>
    //           ),
    //           // tabBarBadge: 3,
    //         }}
    //       />
    //     </Tab.Navigator>
    //   </NavigationContainer>
    // </SafeAreaView>

    // bottom tab
    // <SafeAreaProvider style={{ flex: 1, backgroundColor: "white" }}>
    //   <NavigationContainer>
    //     <Tab.Navigator
    //       initialRouteName={"Dashboard"}
    //       screenOptions={{
    //         headerShown: false,
    //         tabBarLabelStyle: {
    //           fontSize: 12,
    //           marginBottom: 5,
    //         },
    //         tabBarStyle: {
    //           backgroundColor: "#f8f8f8",
    //           alignItems: "center",
    //           height: 68,
    //         },
    //         tabBarActiveTintColor: "#213481",
    //         tabBarHideOnKeyboard: true,
    //         tabBarInactiveTintColor: "#000000",
    //         // tabBarActiveBackgroundColor: 'green',
    //         // tabBarInactiveBackgroundColor: 'grey',
    //         // tabBarShowLabel: false
    //       }}
    //     >
    //       <Tab.Screen
    //         name="Advertise"
    //         component={Screen1}
    //         options={{
    //           title: "Advertise",
    //           tabBarIcon: ({ focused }) => (
    //             <View style={focused ? styles.activeTab : styles.inactiveTab}>
    //               <Ionicons
    //                 name="megaphone-outline"
    //                 size={focused ? 30 : 23}
    //                 color={focused ? "#213481" : "#000000"}
    //               />
    //             </View>
    //           ),
    //         }}
    //       />
    //       <Tab.Screen
    //         name="Earn"
    //         component={Screen2}
    //         options={{
    //           title: "Earn",
    //           tabBarIcon: ({ focused }) => (
    //             <View style={focused ? styles.activeTab : styles.inactiveTab}>
    //               <Feather
    //                 name="dollar-sign"
    //                 size={focused ? 30 : 23}
    //                 color={focused ? "#213481" : "#000000"}
    //               />
    //             </View>
    //           ),
    //         }}
    //       />
    //       <Tab.Screen
    //         name="Dashboard"
    //         component={Dashboard}
    //         options={{
    //           title: "Dashboard",
    //           tabBarIcon: ({ focused }) => (
    //             <View style={focused ? styles.activeTab : styles.inactiveTab}>
    //               <FontAwesome6
    //                 name="house"
    //                 size={focused ? 30 : 23}
    //                 color={focused ? "#213481" : "#000000"}
    //               />
    //             </View>
    //           ),
    //           // tabBarBadge: 3,
    //         }}
    //       />
    //     </Tab.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>

    // stack
    // <SafeAreaProvider style={{ flex: 1, backgroundColor: "white" }}>
    //   <NavigationContainer>
    //     <Stack.Navigator
    //       initialRouteName={token ? "Dashboard" : "Login"}
    //       screenOptions={{ headerShown: false, animation: "slide_from_left" }}
    //     >
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="Register" component={Register} />
    //       <Stack.Screen name="Dashboard" component={Dashboard} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: "#213481",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  inactiveTab: {
    borderTopWidth: 0,
  },
});
