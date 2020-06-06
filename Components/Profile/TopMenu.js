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
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ProfileModal from "./ProfileModal";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;
const { width, height } = Dimensions.get("screen");

export default () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(true);
  };
  return (
    <SafeZone>
      <TopMenu isPlatform={Platform.OS === "android"}>
        <IdBox>
          <UserId>carminido_</UserId>
          <AntDesign name="down" size={15} color="black" />
        </IdBox>
        <MenuBox
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <MenuWrapper isPlatform={Platform.OS === "android"}>
            <Ionicons name="ios-menu" size={30} color="black" />
          </MenuWrapper>
        </MenuBox>
      </TopMenu>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ModalZone
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}
        ></ModalZone>

        <ScrollView directionalLockEnabled={true}>
          <TouchableWithoutFeedback>
            <ProfileModal></ProfileModal>
          </TouchableWithoutFeedback>
        </ScrollView>
      </Modal>
    </SafeZone>
  );
};

const SafeZone = styled.SafeAreaView``;
const TopMenu = styled.View`
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 10}px` : "10px"};
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
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 10}px` : "10px"};
  top: -5px;
  right: 15px;
`;

const ModalZone = styled.TouchableOpacity`
  width: 100%;
  height: 50%;
  background-color: transparent;
`;
