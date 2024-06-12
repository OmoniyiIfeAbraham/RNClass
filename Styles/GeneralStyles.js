import { StyleSheet } from "react-native";

export default StyleSheet.create({
  TextInputView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
  },
  TextInput: { flex: 1, color: "black" },
  Btn: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: "#4DB151",
    marginBottom: 20,
  },
});
