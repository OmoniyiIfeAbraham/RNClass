import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen1 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Screen1</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
