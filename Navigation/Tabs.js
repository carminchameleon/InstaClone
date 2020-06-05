import React, { useLayoutEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feeds from "../Screens/Feeds";
import Search from "../Screens/Search";
import Upload from "../Screens/Upload";
import Activity from "../Screens/Activity";
import Profile from "../Screens/Profile";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { theme } from "../Components/theme";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => route?.state?.routeNames[route.state.index];

export default ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    navigation.navigate("photo");
  };

  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
      headerShown: name === "Activity",
      headerStyle: {
        backgroundColor: theme.GRAY_COLOR,
      },
    });
  }, [route]);
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: theme.BLACK_COLOR,
        inactiveTintColor: theme.BLACK_COLOR,
        style: {
          backgroundColor: theme.GRAY_COLOR,
          borderTopColor: theme.BORDER_COLOR,
        },
        showLabel: false,
      }}
    >
      <Tabs.Screen
        name="Feeds"
        component={Feeds}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={theme.BLACK_COLOR}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "md-search" : "ios-search"}
              size={size}
              color={theme.BLACK_COLOR}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "plussquare" : "plussquareo"}
              size={size}
              color={theme.BLACK_COLOR}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "ios-heart" : "ios-heart-empty"}
              size={size}
              color={theme.BLACK_COLOR}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={theme.BLACK_COLOR}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
