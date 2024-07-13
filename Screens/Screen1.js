import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GeneralStyles from "../Styles/GeneralStyles";

const Screen1 = ({ navigation }) => {
  const logoutBtn = () => {
    // navigation.openDrawer();
    // navigation.closeDrawer();
    navigation.toggleDrawer();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Screen1</Text>
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
              Toggle Drawer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
