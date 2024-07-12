import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import GeneralStyles from "../Styles/GeneralStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import Loader from "../components/Loader";

const Dashboard = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function getItem(item1Key, item2Key, item3Key) {
    try {
      const [item1Value, item2Value, item3Value] = await Promise.all([
        AsyncStorage.getItem(item1Key),
        AsyncStorage.getItem(item2Key),
        AsyncStorage.getItem(item3Key),
      ]);

      if (item1Value !== null && item2Value !== null && item3Value !== null) {
        console.log("Item 1:", item1Value);
        console.log("Item 2:", item2Value);
        console.log("Item 3:", item3Value);
        return { item1: item1Value, item2: item2Value, item3: item3Value };
      } else {
        console.log("One or all items not found");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving items:", error);
      return null;
    }
  }

  useFocusEffect(() => {
    async function fetchData() {
      const items = await getItem("fName", "lName", "email");
      if (items) {
        setName(`${items.item1} ${items.item2}`);
        setEmail(items.item3);
      }
    }
    fetchData();
  });

  const logoutBtn = async () => {
    try {
      await AsyncStorage.clear();
      console.log("All items cleared from AsyncStorage.");
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // navigation.navigate("Login");
      navigation.navigate("Advertise");
      Alert.alert("LOGOUT", "Logged Out Successfully!!!");
    }, 2000);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Loader Visible={isLoading} />
      <Text style={{ fontSize: 36, fontWeight: "800", color: "#061347" }}>
        WELCOME TO HOMEAPP
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "400", color: "#061347" }}>
        {name}
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "400", color: "#061347" }}>
        {email}
      </Text>
      {/* btns */}
      <View>
        <TouchableOpacity
          style={[
            GeneralStyles.Btn,
            { paddingHorizontal: 50, backgroundColor: "#FA3F33" },
          ]}
          onPress={logoutBtn}
        >
          <Text style={{ fontSize: 24, fontWeight: "400", color: "white" }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
