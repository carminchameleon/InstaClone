import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";
import { theme } from "../theme";

const storyDatas = [
  {
    name: "david",
    source:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/98419098_241835093901173_7720055465173843968_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wYWpEV2YUbcAX-nXpa6&oh=96d4a40c90f5ff375757854fdc008c74&oe=5F027A2C",
  },
  {
    name: "nicolas",
    source:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/92227338_2497944530469406_3021297677833863168_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=PfH0JuaTqToAX_ARrew&oh=78f8a3126b599413a3bada7f257b48bd&oe=5F0363C0",
  },
  {
    name: "martin",
    source:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/73414114_2547376445282379_6117266579039191040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=xB8KbTnn4nsAX9Eyr--&oh=9e8cc0c2a1665a53e0d340cc64776b66&oe=5F037DF4",
  },
  {
    name: "kyle",
    source:
      "http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/1_img_01.png",
  },
  {
    name: "scott",
    source:
      "http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/4_img_01.png",
  },
  {
    name: "brandon",
    source:
      "http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/3_img_01.png",
  },
  {
    name: "nicole",
    source:
      "http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/5_img_01.png",
  },
];

export default () => {
  const renderItem = ({ item }) => {
    return (
      <StoryContainer>
        <ImgContainer>
          <LinearGradient
            colors={["#f58529", "#FEDA77", "#dd2a7b", "#8134af"]}
            style={{
              width: 65,
              height: 65,
              borderRadius: 32.5,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <StoryImg source={{ url: `${item.source}` }}></StoryImg>
          </LinearGradient>
        </ImgContainer>
        <IDContainer>
          <UserId>{item.name}</UserId>
        </IDContainer>
      </StoryContainer>
    );
  };
  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={storyDatas}
        renderItem={renderItem}
      />
    </Container>
  );
};

const Container = styled.View`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: white;
  border-bottom-width: 0.3px;
  border-bottom-color: ${theme.BORDER_COLOR};
`;

const StoryScrollView = styled.ScrollView``;

const StoryContainer = styled.View`
  width: 100%;
  padding: 8px;
  flex: 1;
`;

const ImgContainer = styled.View`
  flex: 8;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const StoryImg = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 3px solid white;
`;

const IDContainer = styled.View`
  flex: 2;
`;

const UserId = styled.Text`
  text-align: center;
  font-size: 12px;
`;
