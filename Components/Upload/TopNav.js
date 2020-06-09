import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text, SafeAreaView, Platform, Dimensions} from 'react-native';
import {theme} from '../../Styles/theme';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;
const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

export default ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Wrapper isPlatform={Platform.OS === 'android'}>
        <PhotoText>Photo</PhotoText>
        <CancleText
          isPlatform={Platform.OS === 'android'}
          onPress={() => {
            navigation.navigate('Feeds');
          }}
        >
          Cancle
        </CancleText>
      </Wrapper>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  width: ${WIDTH}px;
  height: ${HEIGHT / 10}px;
  padding: 5px 10px;
  background-color: ${theme.GRAY_COLOR};
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.View`
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 6}px` : '15px'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 10px;
`;
const PhotoText = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
const CancleText = styled.Text`
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 6}px` : '0px'};
  position: absolute;
  left: 10px;
  font-size: 17px;
`;
