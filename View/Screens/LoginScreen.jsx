import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spacing, FontSize, Colors, Font } from "../constants";
import Icon from "../components/Icon";

const { height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Constant user for validation
  const validUser = {
    email: "weather@gmail.com",
    password: "weather123",
  };

  // Validation function
  const handleLogin = () => {
    if (email === validUser.email && password === validUser.password) {
      Alert.alert("Login Successful!");
      navigation.navigate("Home");
    } else {
      Alert.alert("Invalid Email or Password!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="contain"
          source={require("../Assets/images/login.png")}
        />
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>Login here</Text>
        <View style={styles.inputContainer}>
          <View style={styles.iconInputContainer}>
            <Icon name="email" size={24} backgroundColor="transparent" />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={Colors.text}
              style={styles.input}
            />
          </View>
          <View style={styles.iconInputContainer}>
            <Icon name="lock" size={24} backgroundColor="transparent" />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={Colors.text}
              secureTextEntry
              style={styles.input}
            />
          </View>
        </View>
        <View>
          <Text style={styles.forgotPasswordText}>Forgot Your Password?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            Don't have an account?
            <Text
              style={styles.registerLinkText}
              onPress={() => navigation.navigate("Register")}
            >
              {" "}
              Get registered
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageBackground: {
    height: height / 3.5,
    width: "100%",
    marginBottom: Spacing * 2,
  },
  textContainer: {
    paddingHorizontal: Spacing * 3,
    paddingTop: Spacing,
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.xxLarge,
    color: Colors.primary,
    fontFamily: Font["inter-bold"],
    textAlign: "center",
    marginBottom: Spacing,
  },
  subtitle: {
    fontSize: FontSize.medium,
    color: Colors.text,
    fontFamily: Font["inter-regular"],
    textAlign: "center",
    marginBottom: Spacing * 2,
  },
  inputContainer: {
    marginVertical: Spacing,
    paddingHorizontal: Spacing * 2,
  },
  iconInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.gray,
    borderRadius: Spacing,
    paddingHorizontal: Spacing,
    paddingVertical: Spacing * 1.5,
    marginBottom: Spacing,
  },
  input: {
    flex: 1,
    fontFamily: Font["inter-regular"],
    fontSize: FontSize.small,
    paddingLeft: Spacing,
    color: Colors.text,
  },
  forgotPasswordText: {
    fontFamily: Font["Inter-bold"],
    fontSize: FontSize.small,
    color: Colors.primary,
    alignSelf: "flex-end",
    paddingHorizontal: Spacing * 2,
    paddingBottom: Spacing,
  },
  buttonContainer: {
    paddingHorizontal: Spacing * 2,
    paddingVertical: Spacing,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    borderRadius: Spacing,
  },
  buttonText: {
    fontFamily: Font["Inter-bold"],
    color: Colors.white,
    textAlign: "center",
  },
  registerContainer: {
    marginTop: Spacing * 2,
    alignItems: "center",
  },
  registerText: {
    fontFamily: Font["inter-regular"],
    fontSize: FontSize.small,
    color: Colors.text,
  },
  registerLinkText: {
    fontFamily: Font["inter-bold"],
    color: Colors.link,
  },
});
