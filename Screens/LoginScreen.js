import React from "react";
import { useFonts } from "expo-font";
import BackGroundImage from "../assets/images/back-ground.png";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={BackGroundImage} style={styles.bgImage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-12}
            style={styles.form}
          >
            <Text style={styles.title}>Sign in</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="Email address" />
              <TextInput style={styles.input} placeholder="Password" />
              <Text style={styles.showPassText}> Show </Text>
            </View>

            <TouchableOpacity style={styles.button} title="Create account">
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <Text style={styles.signInText}>
              Don't have an account? Create account
            </Text>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#FFFFFF",
    height: 489,
    width: "100%",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarBox: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
  },
  buttonAddAvatar: {
    position: "absolute",
    borderRadius: 50,
    right: -12,
    bottom: 14,
  },
  title: {
    marginBottom: 33,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",
    fontFamily: "RobotoMedium",
  },
  inputWrapper: {
    marginBottom: 43,
    gap: 16,
    width: "100%",
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    padding: 10,
    fontFamily: "RobotoRegular",
  },
  showPassText: {
    position: "absolute",
    right: 16,
    bottom: 30,
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "RobotoRegular",
  },
  button: {
    backgroundColor: "#FF6C00",
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "RobotoRegular",
  },
  signInText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "RobotoRegular",
  },
});
