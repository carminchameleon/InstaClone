import React from 'react';
import {View} from 'react-native';
import FeedTopNav from '../Components/Feeds/FeedTopNav';
import Story from '../Components/Feeds/Story';
import styled from 'styled-components';
import Post from '../Components/Feeds/Post';
export default ({navigation}) => {
  return (
    <Container>
      <FeedTopNav />
      <Story />
      <Post />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;
