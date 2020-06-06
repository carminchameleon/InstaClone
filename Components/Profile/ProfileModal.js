import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import styled from "styled-components";
const { width, height } = Dimensions.get("screen");
import { theme } from "../theme";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export default (props) => {
  console.log("check", props.navigation);

  const { setModalVisible, navigation } = props;

  const handleSettings = () => {
    setModalVisible(false);
    navigation.navigation.push("Settings");
  };
  return (
    <Container>
      <Wrapper>
        <MenuTouchZone
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => handleSettings()}
        >
          <MenuList>
            <IconBox>
              <AntDesign name="setting" size={27} color={theme.TEXT_COLOR} />
            </IconBox>
            <MenuBox>
              <MenuName>Settings</MenuName>
            </MenuBox>
          </MenuList>
        </MenuTouchZone>
        <MenuList>
          <IconBox>
            <Entypo name="back-in-time" size={27} color={theme.TEXT_COLOR} />
          </IconBox>
          <MenuBox>
            <MenuName>Archive</MenuName>
          </MenuBox>
        </MenuList>
        <MenuList>
          <IconBox>
            <Ionicons name="ios-timer" size={27} color={theme.TEXT_COLOR} />
          </IconBox>
          <MenuBox>
            <MenuName>Your Activity</MenuName>
          </MenuBox>
        </MenuList>
        <MenuList>
          <IconBox>
            <AntDesign name="scan1" size={27} color={theme.TEXT_COLOR} />
          </IconBox>
          <MenuBox>
            <MenuName>Nametag</MenuName>
          </MenuBox>
        </MenuList>
        <MenuList>
          <IconBox>
            <FontAwesome name="bookmark-o" size={27} color={theme.TEXT_COLOR} />
          </IconBox>
          <MenuBox>
            <MenuName>Saved</MenuName>
          </MenuBox>
        </MenuList>
        <MenuList>
          <IconBox>
            <MaterialIcons
              name="format-list-bulleted"
              size={27}
              color={theme.TEXT_COLOR}
            />
          </IconBox>
          <MenuBox>
            <MenuName>Close Friends</MenuName>
          </MenuBox>
        </MenuList>
        <MenuList>
          <IconBox>
            <MaterialIcons
              name="person-add"
              size={27}
              color={theme.TEXT_COLOR}
            />
          </IconBox>
          <MenuBox>
            <MenuName>Discover People</MenuName>
          </MenuBox>
        </MenuList>
      </Wrapper>
    </Container>
  );
};

const Container = styled.View`
  height: ${height / 2}px;
  width: 100%;
  background-color: ${theme.GRAY_COLOR};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  padding-top: 20px;
`;

const Wrapper = styled.View`
  flex: 1;
`;

const MenuTouchZone = styled.TouchableHighlight``;

const MenuList = styled.View`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconBox = styled.View`
  padding-left: 4px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuBox = styled.View`
  flex: 8;
  border-bottom-color: ${theme.BORDER_COLOR};
  border-bottom-width: 0.5px;
  padding: 10px;
`;
const MenuName = styled.Text`
  font-size: 18px;
  color: ${theme.TEXT_COLOR};
`;
