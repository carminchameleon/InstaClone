import React from "react";
import { View } from "react-native";
import FeedTopNav from "../Components/Feeds/FeedTopNav";
import Story from "../Components/Feeds/Story";
import Post from "../Components/Feeds/Post";
import styled from "styled-components";

export default ({ navigation }) => {
  return (
    <Container>
      <FeedTopNav />
      <Story />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;
