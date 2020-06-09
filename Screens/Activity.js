import React from 'react';
import {View, Text, SafeAreaView, Platform, Dimensions} from 'react-native';
import Constants from 'expo-constants';
import {theme} from '../Styles/theme';
import styled from 'styled-components';
const statusBarHeight = Constants.statusBarHeight;
const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

export default () => (
  <Container isPlatform={Platform.OS === 'android'}>
    <Wrapper>
      <HeaderTitle>Activity</HeaderTitle>
    </Wrapper>
  </Container>
);

const Container = styled.SafeAreaView`
  background-color: ${theme.GRAY_COLOR};
  flex: 1;
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 6}px` : '15px'};
`;

const Wrapper = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 20}px;
  align-items: center;
  background-color: ${theme.GRAY_COLOR};
  border-bottom-color: ${theme.BORDER_COLOR};
  border-bottom-width: 0.3px;
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
