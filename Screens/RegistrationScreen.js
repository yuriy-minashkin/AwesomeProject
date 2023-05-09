import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const onCreateAccount = () => {
    console.log(`login: ${login}, email: ${email}, password: ${password}`);
    keyboardHide();
    resetForm();
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-260}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? 80 : 0,
            }}
          >
            <View style={styles.avatarBox}>
              <AntDesign
                name="pluscircleo"
                size={25}
                color="#FF6C00"
                backgroundColor="white"
                style={styles.buttonAddAvatar}
              />
            </View>
            <Text style={styles.title}>Create account</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Login"
                onFocus={() => setIsShowKeyboard(true)}
                value={login}
                onChangeText={setLogin}
              />
              <TextInput
                style={styles.input}
                placeholder="Email address"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={setEmail}
                autoComplete="email"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
                value={password}
                onChangeText={setPassword}
                autoComplete="password"
              />
              <Text style={styles.showPassText}> Show </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              title="Create account"
              onPress={onCreateAccount}
            >
              <Text style={styles.buttonText}>Create account</Text>
            </TouchableOpacity>
            <Text style={styles.signInText}>
              Already have an account? Sign in
            </Text>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#FFFFFF",
    height: 549,
    width: "100%",
    paddingTop: 92,
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
