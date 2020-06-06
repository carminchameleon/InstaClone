import React, { useState } from "react";
import styled from "styled-components";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
const { width, height } = Dimensions.get("screen");
import { SearchBar, withTheme } from "react-native-elements";

import { theme } from "../Components/theme";

export default () => {
  const [value, onChangeText] = useState("input");
  return (
    <Container>
      <SearchContainer>
        <SearchBar
          round
          placeholder="Search"
          onChangeText={(text) => onChangeText(text)}
          value={value}
          containerStyle={{
            width: width,
            height: 30,
          }}
          platform={Platform.OS === "ios" ? "ios" : "android"}
        />
      </SearchContainer>
      <MenuContainer></MenuContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const SearchContainer = styled.View`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.View`
  flex: 1;
  border: 1px solid black;
`;
