import {
  View,
  Text,
  Animated,
  Modal,
  ActivityIndicator,
  StyleSheet,
  Easing,
} from "react-native";
import React, { useEffect } from "react";

const Loader = ({ Visible }) => {
  return (
    <Modal
      transparent={true}
      presentationStyle="overFullScreen"
      visible={Visible}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.logoText}>HOMEAPP</Text>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#061347",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: "white",
  },
});

export default Loader;
