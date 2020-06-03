import React from "react";
import styled from "styled-components";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;
import { theme } from "../constants/theme";
import logo from "../assets/logo_text.png";

export default () => {
  return (
    <SafeZone>
      <Container isPlatform={Platform.OS === "android"}>
        <Feather name="camera" size={24} color="black" />
        <LogoImage source={logo} />
        <Entypo name="direction" size={24} color="black" />
      </Container>
    </SafeZone>
  );
};

const SafeZone = styled.SafeAreaView`
  background-color: ${theme.GRAY_COLOR};
`;
const Container = styled.View`
  display: flex;
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 6}px` : "8px"};
  align-items: center;
  background-color: ${theme.GRAY_COLOR};
  border-bottom-color: ${theme.BORDER_COLOR};
  border-bottom-width: 0.3px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 8px;
`;

const LogoImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 30px;
`;
