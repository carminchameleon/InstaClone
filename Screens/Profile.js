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
import {theme} from '../Components/theme';

import styled from 'styled-components';
import TopMenu from '../Components/Profile/TopMenu';
import ProfileInfo from '../Components/Profile/ProfileInfo';
import ProfilePhotos from '../Components/Profile/ProfilePhotos';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

export default ({navigation}) => {
  return (
    <Container>
      <TopMenu navigation={navigation} />
      <ProfileInfo />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  display: flex;
  background-color: ${theme.GRAY_COLOR};
`;
