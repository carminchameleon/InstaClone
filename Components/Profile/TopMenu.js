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
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default () => (
  <SafeZone>
    <TopMenu>
      <IdBox>
        <UserId>carminido_</UserId>
        <AntDesign name="down" size={15} color="black" />
      </IdBox>
      <MenuBox onPress={() => alert("hello")}>
        <MenuWrapper>
          <Ionicons name="ios-menu" size={30} color="black" />
        </MenuWrapper>
      </MenuBox>
    </TopMenu>
  </SafeZone>
);

const SafeZone = styled.SafeAreaView``;
const TopMenu = styled.View`
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 6}px` : "10px"};
  height: 50px;
`;

const IdBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const UserId = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const MenuBox = styled.TouchableWithoutFeedback``;

const MenuWrapper = styled.View`
  position: absolute;
  top: -5px;
  right: 15px;
`;
