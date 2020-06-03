import { StyleSheet, Platform, StatusBar } from "react-native";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? statusBarHeight : 0,
  },
});
