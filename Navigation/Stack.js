import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feeds from "../Screens/Feeds";
import Settings from "../Screens/Settings";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";

import Tabs from "./Tabs";

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fafafa",
        borderBottomColor: "blue",
      },
      headerTintColor: "rgb(38, 38, 38)",
      headerBackTitleVisible: false,
      // 이전의 타이틀을 보여줄 것인지
    }}
  >
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

export default ProfileStack;
