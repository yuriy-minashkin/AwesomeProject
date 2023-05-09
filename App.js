import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { BgImageComponent } from "./components/BgImageComponent";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BgImageComponent>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </BgImageComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View, ImageBackground } from "react-native";
// import { RegistrationScreen } from "./Screens/RegistrationScreen";
// import { LoginScreen } from "./Screens/LoginScreen";
// import BackGroundImage from "./assets/images/back-ground.png";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <ImageBackground source={BackGroundImage} style={styles.bgImage}>
//         <RegistrationScreen />
//         {/* <LoginScreen /> */}
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   bgImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//   },
// });
