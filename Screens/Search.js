import React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;
import styled from "styled-components";
import Input from "../Components/Search/Input";

export default ({ navigation }) => (
  <SafeAreaView>
    <Container isPlatform={Platform.OS === "android"}></Container>
    <Input />
  </SafeAreaView>
);

const Container = styled.ScrollView`
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 6}px` : "10px"};
`;
