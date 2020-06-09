import React from 'react';
import {SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import FeedTopNav from '../Components/Feeds/FeedTopNav';
import Story from '../Components/Feeds/Story';
import Post from '../Components/Feeds/Post';
import styled from 'styled-components';
const statusBarHeight = Constants.statusBarHeight;

export default ({navigation}) => {
  return (
    <Container isPlatform={Platform.OS === 'android'}>
      <FeedTopNav />
      <Story />
      <Post />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fafafa;
  padding-top: ${(props) =>
    props.isPlatform ? `${statusBarHeight + 6}px` : '0px'};
`;
