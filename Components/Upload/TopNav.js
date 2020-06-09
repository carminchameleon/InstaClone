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
import {theme} from '../theme';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;
const {width, height} = Dimensions.get('screen');

export default ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeZone>
      <TopMenu isPlatform={Platform.OS === 'android'}>
        <MenuBox>
          <MenuWrapper isPlatform={Platform.OS === 'android'}>
            <CancleText
              onPress={() => {
                navigation.navigate('Feeds');
              }}
            >
              취소
            </CancleText>
          </MenuWrapper>
        </MenuBox>
        <IdBox>
          <UserId>사진</UserId>
        </IdBox>
      </TopMenu>
    </SafeZone>
  );
};

const SafeZone = styled.SafeAreaView``;
const TopMenu = styled.View`
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight}px` : '10px'};
  height: 50px;
  border-bottom-color: ${theme.BORDER_COLOR};
  border-bottom-width: 0.3px;
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

const MenuBox = styled.TouchableOpacity``;

const MenuWrapper = styled.View`
  position: absolute;
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight}px` : '10px'};
  left: 15px;
`;

const CancleText = styled.Text`
  font-size: 17px;
`;
