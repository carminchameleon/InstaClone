import React from 'react';
import styled from 'styled-components';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';
import {Feather, Entypo} from '@expo/vector-icons';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;
import {theme} from '../theme';
import logo from '../../assets/logo_text.png';

export default () => {
  return (
    <SafeAreaView>
      <Container>
        <HeaderTitle>Activity</HeaderTitle>
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  /* display: flex;
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 6}px` : '10px'};
  align-items: center;
  background-color: ${theme.GRAY_COLOR};
  border-bottom-color: ${theme.BORDER_COLOR};
  border-bottom-width: 0.3px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 8px; */
`;

const LogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 30px;
`;

const ActionButton = styled.TouchableWithoutFeedback`
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
