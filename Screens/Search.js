import React, {useState} from 'react';
import {View, SafeAreaView, Platform} from 'react-native';
import Constants from 'expo-constants';
import {theme} from '../Styles/theme';
import {SearchBar} from 'react-native-elements';
import styled from 'styled-components';

const statusBarHeight = Constants.statusBarHeight;

export default () => {
  const [value, onChangeText] = useState('');

  const checkPlatFrom = () => {
    if (Platform.OS === 'ios') {
      return {
        width: '95%',
        height: 30,
        backgroundColor: `${theme.BORDER_COLOR}`,
        borderRadius: 7,
      };
    }
  };

  return (
    <SafeZone isPlatform={Platform.OS === 'android'}>
      <Container>
        <SearchContainer isPlatform={Platform.OS === 'android'}>
          <SearchBar
            round
            placeholder="Search"
            onChangeText={(text) => onChangeText(text)}
            value={value}
            containerStyle={checkPlatFrom(Platform)}
            platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          />
        </SearchContainer>
      </Container>
    </SafeZone>
  );
};

const SafeZone = styled.SafeAreaView`
  background-color: ${theme.GRAY_COLOR};
  flex: 1;
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 6}px` : '15px'};
`;

const Container = styled.View`
  flex: 1;
`;

const SearchContainer = styled.View`
  background-color: ${theme.GRAY_COLOR};
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
