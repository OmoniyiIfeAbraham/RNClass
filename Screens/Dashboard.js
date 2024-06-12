import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import GeneralStyles from "../Styles/GeneralStyles";

const Dashboard = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 36, fontWeight: "800", color: "#061347" }}>
        WELCOME TO HOMEAPP
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "400", color: "#061347" }}>
        John Doe
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "400", color: "#061347" }}>
        example@gmail.com
      </Text>
      {/* btns */}
      <View>
        <TouchableOpacity
          style={[
            GeneralStyles.Btn,
            { paddingHorizontal: 50, backgroundColor: "#FA3F33" },
          ]}
          onPress={() => navigation.navigate("Login")}
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
