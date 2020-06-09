import React, {useLayoutEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';

import {theme} from '../Styles/theme';
import Feeds from '../Screens/Feeds';
import Search from '../Screens/Search';
import Upload from '../Screens/Upload';
import Activity from '../Screens/Activity';
import Profile from '../Screens/Profile';
import Settings from '../Screens/Settings';
import Login from '../Screens/Login';

const Tabs = createBottomTabNavigator();

const MainTabsScreen = () => {
  return (
    <Tabs.Navigator
      mode="modal"
      initialRouteName="Feeds"
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
          tabBarIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
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
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'md-search' : 'ios-search'}
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
          tabBarVisible: false,
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name={focused ? 'plussquare' : 'plussquareo'}
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
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'ios-heart' : 'ios-heart-empty'}
              size={size}
              color={theme.BLACK_COLOR}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={StackScreens}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={theme.BLACK_COLOR}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const Stacks = createStackNavigator();

const StackScreens = () => (
  <Stacks.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fafafa',
        borderBottomColor: 'blue',
      },
      headerTintColor: 'rgb(38, 38, 38)',
      headerBackTitleVisible: false,
      // 이전의 타이틀을 보여줄 것인지
    }}
  >
    <Stacks.Screen
      name="Profile"
      component={Profile}
      options={{headerShown: false}}
    />
    <Stacks.Screen name="Settings" component={Settings} />
  </Stacks.Navigator>
);

const RootStack = createStackNavigator();

const RootStackScreens = () => (
  <RootStack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStack.Screen name="Login" component={Login}></RootStack.Screen>
    <RootStack.Screen
      name="mainStack"
      component={MainTabsScreen}
    ></RootStack.Screen>
  </RootStack.Navigator>
);

export default RootStackScreens;
