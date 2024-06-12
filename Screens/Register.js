import {
  View,
  Text,
  Pressable,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Loader from "../components/Loader";
import GeneralStyles from "../Styles/GeneralStyles";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const Register = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordVisbility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // function to handle first name input changes
  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  // function to handle last name input changes
  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  // function to handle email input changes
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  // function to handle password input changes
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  // function to handle password input changes
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  // login btn
  const registerBtn = async () => {
    setIsLoading(true);
    console.log("Email: " + email);
    console.log("Password: " + password);

    // Introduce a delay of 3 seconds before setting setIsLoading to false
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Loader Visible={isLoading} />
      <Pressable
        style={{ flex: 1, paddingHorizontal: 25 }}
        onPress={() => Keyboard.dismiss()}
      >
        {/* homeapp title */}
        <View
          style={{
            height: "auto",
            paddingVertical: 40,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "800",
              color: "#061347",
            }}
          >
            HOMEAPP
          </Text>
        </View>
        {/* form title */}
        <Text
          style={{
            fontSize: 45,
            color: "#061347",
            fontWeight: "700",
          }}
        >
          Hello
        </Text>
        {/* form sub-title */}
        <Text
          style={{
            color: "#061347",
            fontSize: 16,
            marginBottom: 20,
            fontWeight: "800",
          }}
        >
          Create an account
        </Text>
        {/* first name */}
        <View style={GeneralStyles.TextInputView}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="#aaa"
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={GeneralStyles.TextInput}
            placeholder="John"
            placeholderTextColor="#aaa"
            autoCapitalize="words"
            keyboardType="default"
            value={firstName}
            onChangeText={handleFirstNameChange}
          />
        </View>
        {/* last name */}
        <View style={GeneralStyles.TextInputView}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="#aaa"
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={GeneralStyles.TextInput}
            placeholder="Doe"
            placeholderTextColor="#aaa"
            autoCapitalize="words"
            keyboardType="default"
            value={lastName}
            onChangeText={handleLastNameChange}
          />
        </View>
        {/* email */}
        <View style={GeneralStyles.TextInputView}>
          <Fontisto
            name="email"
            size={24}
            color="#aaa"
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={GeneralStyles.TextInput}
            placeholder="example@gmail.com"
            placeholderTextColor="#aaa"
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
        {/* password */}
        <View style={[GeneralStyles.TextInputView, { marginBottom: 10 }]}>
          <MaterialIcons
            name="lock-outline"
            size={24}
            color="#aaa"
            style={{
              marginRight: 10,
            }}
          />
          <TextInput
            style={GeneralStyles.TextInput}
            placeholder="Your Password"
            placeholderTextColor="#aaa"
            autoCapitalize="none"
            autoComplete="password"
            secureTextEntry={passwordVisible}
            value={password}
            onChangeText={handlePasswordChange}
          />
          {!passwordVisible ? (
            <Ionicons
              name="eye"
              size={24}
              color="#aaa"
              style={{
                marginLeft: 10,
              }}
              onPress={() => handlePasswordVisbility()}
            />
          ) : (
            <Ionicons
              name="eye-off"
              size={24}
              color="#aaa"
              style={{
                marginLeft: 10,
              }}
              onPress={() => handlePasswordVisbility()}
            />
          )}
        </View>
        {/* confirm password */}
        <View style={[GeneralStyles.TextInputView, { marginBottom: 10 }]}>
          <MaterialIcons
            name="lock-outline"
            size={24}
            color="#aaa"
            style={{
              marginRight: 10,
            }}
          />
          <TextInput
            style={GeneralStyles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            autoCapitalize="none"
            autoComplete="password"
            secureTextEntry={passwordVisible}
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
          />
          {!passwordVisible ? (
            <Ionicons
              name="eye"
              size={24}
              color="#aaa"
              style={{
                marginLeft: 10,
              }}
              onPress={() => handlePasswordVisbility()}
            />
          ) : (
            <Ionicons
              name="eye-off"
              size={24}
              color="#aaa"
              style={{
                marginLeft: 10,
              }}
              onPress={() => handlePasswordVisbility()}
            />
          )}
        </View>
        {/* btn */}
        <TouchableOpacity style={[GeneralStyles.Btn]} onPress={registerBtn}>
          <Text style={{ fontSize: 24, fontWeight: "400", color: "white" }}>
            Sign up
          </Text>
        </TouchableOpacity>
        {/* login link */}
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#aaa", fontSize: 20 }}>
            Already a member of homeapp?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: "#061347",
                fontSize: 22,
                fontWeight: "800",
              }}
            >
              Sign in
            </Text>
          </Pressable>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Register;