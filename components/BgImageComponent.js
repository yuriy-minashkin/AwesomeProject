import { StyleSheet, ImageBackground } from "react-native";
import BackGroundImage from "../assets/images/back-ground.png";

export const BgImageComponent = ({ children }) => {
  return (
    <ImageBackground source={BackGroundImage} style={styles.bgImage}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
