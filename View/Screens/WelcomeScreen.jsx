import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Spacing, FontSize, Colors, Font } from "../constants";

const { height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="contain"
          source={require("../Assets/images/welcome.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            Know today's weather from anywhere!
          </Text>
          <Text style={styles.subtitleText}>
            Get the latest updates about the weather conditions
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Spacing * 2,
  },
  imageBackground: {
    height: height / 2.5,
    width: "100%",
    marginBottom: Spacing * 2,
  },
  textContainer: {
    paddingHorizontal: Spacing * 4,
    alignItems: "center",
  },
  titleText: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["Inter-bold"],
    textAlign: "center",
  },
  subtitleText: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Font["Inter-regular"],
    textAlign: "center",
    marginTop: Spacing * 2,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: Spacing * 2,
    paddingVertical: Spacing * 4,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    borderRadius: Spacing,
  },
  buttonText: {
    fontFamily: Font["Inter-bold"],
    color: Colors.white,
    textAlign: "center",
  },
});
