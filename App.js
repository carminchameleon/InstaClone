import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainTabsScreen from "./Navigation/Navigation";
import { Asset } from "expo-asset";
import RootStacks from "./Navigation/Stack";
////////////////////////////////
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Upload from "./Screens/Upload";
import Settings from "./Screens/Settings";
import Feeds from "./Screens/Feeds";
import Profile from "./Screens/Profile";
import Search from "./Screens/Search";

import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
  const cacheImages = (images) =>
    images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  const LoadAssets = () => {
    const images = cacheImages([require("./assets/logo_text.png")]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => {
    setIsReady(true);
  };

  return isReady ? (
    <NavigationContainer>
      <MainTabsScreen />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={LoadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

///////////////////////

// const Tabs = createBottomTabNavigator();

// const MainTabsScreen = () => (
//   <Tabs.Navigator mode="modal">
//     <Tabs.Screen name="Upload" component={Upload} />
//     <Tabs.Screen name="Profile" component={StackScreens} />
//     <Tabs.Screen name="Feeds" component={Feeds} />
//     <Tabs.Screen name="Search" component={Search} />
//   </Tabs.Navigator>
// );

// const Stacks = createStackNavigator();

// const StackScreens = () => (
//   <Stacks.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#fafafa",
//         borderBottomColor: "blue",
//       },
//       headerTintColor: "rgb(38, 38, 38)",
//       headerBackTitleVisible: false,
//       // 이전의 타이틀을 보여줄 것인지
//     }}
//   >
//     <Stacks.Screen
//       name="Profile"
//       component={Profile}
//       options={{ headerShown: false }}
//     />
//     <Stacks.Screen name="Settings" component={Settings} />
//     <Stacks.Screen name="Search" component={Search} />
//   </Stacks.Navigator>
// );
