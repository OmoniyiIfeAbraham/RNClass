import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import GeneralStyles from "../Styles/GeneralStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../components/Loader";

const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordVisbility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // function to handle email input changes
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  // function to handle password input changes
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  // login btn
  const loginBtn = async () => {
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
          Sign into your account
        </Text>
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
        {/* btn */}
        <TouchableOpacity style={[GeneralStyles.Btn]} onPress={loginBtn}>
          <Text style={{ fontSize: 24, fontWeight: "400", color: "white" }}>
            Sign in
          </Text>
        </TouchableOpacity>
        {/* register link */}
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
            Not a member of homeapp?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                color: "#061347",
                fontSize: 22,
                fontWeight: "800",
              }}
            >
              Sign up
            </Text>
          </Pressable>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;
