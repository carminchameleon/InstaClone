import React, {useState} from 'react';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import {
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  fromModule,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTabsScreen from './Navigation/Navigation';
import RootStackScreens from './Navigation/Navigation';
import Login from './Screens/Login';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

  const cacheImages = (images) =>
    images.map((image) => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });

  const LoadAssets = () => {
    const images = cacheImages([require('./assets/logo_text.png')]);
    const fonts = cacheFonts([
      Ionicons.font,
      MaterialIcons.font,
      MaterialCommunityIcons.font,
      EvilIcons.font,
      FontAwesome.font,
      AntDesign.font,
      Entypo.font,
    ]);
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => {
    setIsReady(true);
  };

  return isReady ? (
    <NavigationContainer>
      <RootStackScreens />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={LoadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}

console.disableYellowBox = true;
