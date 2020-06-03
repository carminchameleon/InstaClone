import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feeds from "../Screens/Feeds";
import Settings from "../Screens/Settings";
import Tabs from "./Tabs";
const Stack = createStackNavigator();

export default () => (
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
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);
