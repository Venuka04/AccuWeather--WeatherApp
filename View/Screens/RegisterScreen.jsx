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

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    const constantUser = { email: "aruni@gmail.com", password: "aruni123" };

    if (
      email === constantUser.email &&
      password === constantUser.password &&
      password === confirmPassword
    ) {
      Alert.alert(
        "Registration Successful!",
        "You can now log in with your credentials."
      );
      navigation.navigate("Login");
    } else {
      Alert.alert(
        "Registration Failed",
        "Please make sure your details are correct and passwords match."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="contain"
        source={require("../Assets/images/register.png")}
      />
      <Text style={styles.title}>Create an Account!</Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>

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
        <View style={styles.iconInputContainer}>
          <Icon name="lock" size={24} backgroundColor="transparent" />
          <TextInput
            placeholder="Confirm Password"
            value={password}
            onChangeText={setConfirmPassword}
            placeholderTextColor={Colors.text}
            secureTextEntry
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>
          Already have an account?
          <Text
            style={styles.registerLinkText}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Spacing * 2,
  },
  imageBackground: {
    height: height / 4,
    marginBottom: Spacing * 2,
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
    marginBottom: Spacing * 2,
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
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    borderRadius: Spacing,
    marginBottom: Spacing * 2,
  },
  buttonText: {
    fontFamily: Font["Inter-bold"],
    color: Colors.white,
    textAlign: "center",
  },
  registerContainer: {
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
