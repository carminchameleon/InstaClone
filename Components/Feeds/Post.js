import React from "react";
import { View, Text, Button, Image, Dimensions } from "react-native";
import styled from "styled-components";
import {
  MaterialCommunityIcons,
  Ionicons,
  EvilIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Story from "./Story";
import { symbol } from "prop-types";

// 화면이 넓이와 크기를 얻어올 수 있음
const { width, height } = Dimensions.get("screen");

export default () => {
  console.log(width);
  return (
    <Container>
      <PostContainer>
        <InfoContainer>
          <InfoWrapper>
            <UserImgBox>
              <UserImg
                source={{
                  url:
                    "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/98419098_241835093901173_7720055465173843968_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wYWpEV2YUbcAX-nXpa6&oh=96d4a40c90f5ff375757854fdc008c74&oe=5F027A2C",
                }}
              ></UserImg>
            </UserImgBox>
            <UserIdBox>
              <UserId>Carmin</UserId>
            </UserIdBox>
          </InfoWrapper>
          <SettingBox>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="black"
            />
          </SettingBox>
        </InfoContainer>
        <ImgContainer>
          <PostImg
            source={{
              url:
                "https://images.unsplash.com/photo-1496208612508-eb52fba7d94e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            }}
          ></PostImg>
        </ImgContainer>
        <ContentsContainer>
          <IconContainer>
            <LeftIconBox>
              <Ionicons name="ios-heart-empty" size={30} color="black" />
              <EvilIcons name="comment" size={35} color="black" />
              <Entypo name="direction" size={30} color="black" />
            </LeftIconBox>
            <FontAwesome name="bookmark-o" size={30} color="black" />
          </IconContainer>
        </ContentsContainer>
      </PostContainer>
    </Container>
  );
};

const Container = styled.View`
  border: 1px solid black;
  flex: 1;
`;

const PostContainer = styled.View`
  width: 100%;
  height: 90%;
  display: flex;
`;

const InfoContainer = styled.View`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const InfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserImgBox = styled.View`
  width: 40px;
  height: 40px;
`;

const UserImg = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
  height: 100%;
  border-radius: 50;
`;

const UserIdBox = styled.View`
  margin-left: 10px;
`;

const UserId = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const SettingBox = styled.View``;

const ImgContainer = styled.View`
  height: 75%;
`;

const PostImg = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 100%;
`;
const ContentsContainer = styled.View``;

const IconContainer = styled.View`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

const LeftIconBox = styled.View`
  display: flex;
  flex-direction: row;
  width: 27%;
  justify-content: space-between;
`;
