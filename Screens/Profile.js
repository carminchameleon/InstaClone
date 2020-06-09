import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';
import Constants from 'expo-constants';
import TopMenu from '../Components/Profile/TopMenu';
import ProfileInfo from '../Components/Profile/ProfileInfo';
import {theme} from '../Styles/theme';
import styled from 'styled-components';

const statusBarHeight = Constants.statusBarHeight;

export default ({navigation}) => {
  return (
    <Container isPlatform={Platform.OS === 'android'}>
      <TopMenu navigation={navigation} />
      <ProfileInfo />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  background-color: ${theme.GRAY_COLOR};
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 10}px` : '10px'};
`;
