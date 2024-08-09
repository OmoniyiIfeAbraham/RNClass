import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "../../Screens/Screen1";
import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import Screen2 from "../../Screens/Screen2";
import Dashboard from "../../Screens/Dashboard";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "white" }}>
      <Tab.Navigator
        initialRouteName={"Dashboard"}
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            alignItems: "center",
            height: 68,
          },
          tabBarActiveTintColor: "#213481",
          tabBarHideOnKeyboard: true,
          tabBarInactiveTintColor: "#000000",
          // tabBarActiveBackgroundColor: 'green',
          // tabBarInactiveBackgroundColor: 'grey',
          // tabBarShowLabel: false
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: "Dashboard",
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.inactiveTab}>
                <FontAwesome6
                  name="house"
                  size={focused ? 30 : 23}
                  color={focused ? "#213481" : "#000000"}
                />
              </View>
            ),
            // tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Advertise"
          component={Screen1}
          options={{
            title: "Advertise",
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.inactiveTab}>
                <Ionicons
                  name="megaphone-outline"
                  size={focused ? 30 : 23}
                  color={focused ? "#213481" : "#000000"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Earn"
          component={Screen2}
          options={{
            title: "Earn",
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.inactiveTab}>
                <Feather
                  name="dollar-sign"
                  size={focused ? 30 : 23}
                  color={focused ? "#213481" : "#000000"}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default BottomTabNavigator;

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
