import React from 'react';
import {
  TouchableWithoutFeedback,
  SafeAreaView,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import {Feather, Entypo} from '@expo/vector-icons';
import {theme} from '../../Styles/theme';
import logo from '../../assets/logo_text.png';
import styled from 'styled-components';
import {Header} from 'react-native/Libraries/NewAppScreen';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
const statusBarHeight = Constants.statusBarHeight;

export default () => {
  return (
    <Container>
      <ActionButton
        onPress={() => {
          alert('this is camera');
        }}
      >
        <Feather name="camera" size={24} color="black" />
      </ActionButton>
      <LogoImage source={logo} />
      <ActionButton
        onPress={() => {
          alert('this is DM');
        }}
      >
        <Entypo name="direction" size={23} color="black" />
      </ActionButton>
    </Container>
  );
};

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 20}px;
  padding: 0 10px;
  background-color: ${theme.GRAY_COLOR};
  border-bottom-color: ${theme.BORDER_COLOR};
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 30px;
  margin-bottom: 5px;
`;

const ActionButton = styled.TouchableWithoutFeedback``;
