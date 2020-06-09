import React from 'react';
import {View, Text, SafeAreaView, Platform} from 'react-native';
import styled from 'styled-components';
import TopHeader from '../Components/Activity/TopHeader';
import Constants from 'expo-constants';
import {theme} from '../Components/theme';
const statusBarHeight = Constants.statusBarHeight;
export default () => (
  <TouchZone isPlatform={Platform.OS === 'android'}>
    <Container>
      <HeaderTitle>Activity</HeaderTitle>
    </Container>
  </TouchZone>
);

const TouchZone = styled.SafeAreaView`
  background-color: ${theme.GRAY_COLOR};
  flex: 1;
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 6}px` : '15px'};
`;

const Container = styled.View`
  align-items: center;
  background-color: ${theme.GRAY_COLOR};
  border-bottom-color: ${theme.BORDER_COLOR};
  border-bottom-width: 0.3px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 8px;
`;

const HeaderTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
