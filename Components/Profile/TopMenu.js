import React, {useState} from 'react';
import styled from 'styled-components';
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
} from 'react-native';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import ProfileModal from './ProfileModal';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;
const {width, height} = Dimensions.get('screen');

export default ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(true);
  };
  return (
    <Container>
      <TopMenu>
        <IdBox>
          <UserId>carminido_</UserId>
          <AntDesign name="down" size={15} color="black" />
        </IdBox>
        <MenuBox
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <MenuWrapper>
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
            <ProfileModal
              setModalVisible={setModalVisible}
              navigation={navigation}
            ></ProfileModal>
          </TouchableWithoutFeedback>
        </ScrollView>
      </Modal>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TopMenu = styled.View`
  width: 100%;
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

const ModalZone = styled.TouchableOpacity`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: transparent;
`;
