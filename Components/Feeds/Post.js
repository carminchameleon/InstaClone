import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {
  MaterialCommunityIcons,
  Ionicons,
  EvilIcons,
  FontAwesome,
  Entypo,
} from '@expo/vector-icons';
import styled from 'styled-components';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

export default () => {
  const [page, setpage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);

  async function getFeedDatas() {
    try {
      const feeddata = await axios.get(
        `https://my-json-server.typicode.com/hong-dev/json_server/posts?_limit=5&_page=${page}`
      );
      setData(data.concat(feeddata['data']));
      isLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getFeedDatas();
    isLoading(true);
  }, []);

  const handleLoadMore = () => {
    setpage(page + 1);
    getFeedDatas();
  };

  const renderFooter = () => {
    return loading ? (
      <Loader>
        <ActivityIndicator size="large" />
      </Loader>
    ) : null;
  };

  const renderItem = ({item}) => {
    return (
      <PostContainer>
        <InfoContainer>
          <InfoWrapper>
            <UserImgBox>
              <UserImg
                source={{
                  uri: `${item.userImg}`,
                }}
              ></UserImg>
            </UserImgBox>
            <UserIdBox>
              <UserId>{item.userId}</UserId>
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
              uri: `${item.postImg}`,
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
          <Likes>{item.likes} likes</Likes>
          <TextContainer>
            <UserId>{item.userId}</UserId>
            <PostText>{item.postContents}</PostText>
          </TextContainer>
          <Comments>View all {item.comments} comments</Comments>
        </ContentsContainer>
      </PostContainer>
    );
  };

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={true}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        ListFooterComponent={renderFooter}
      />
    </Container>
  );
};

const Container = styled.View`
  width: ${WIDTH};
  flex: 1;
`;

const PostContainer = styled.View`
  width: 100%;
  height: 600px;
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
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const UserIdBox = styled.View`
  margin-left: 10px;
`;

const UserId = styled.Text`
  font-weight: bold;
`;

const SettingBox = styled.View``;

const ImgContainer = styled.View`
  height: ${WIDTH};
  height: ${WIDTH};
`;

const PostImg = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;
const ContentsContainer = styled.View`
  padding: 0 10px;
`;

const IconContainer = styled.View`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftIconBox = styled.View`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Likes = styled.Text`
  font-weight: bold;
`;

const TextContainer = styled.View`
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PostText = styled.Text`
  margin-left: 3px;
`;

const Comments = styled.Text`
  margin-top: 3px;
  color: gray;
`;

const Loader = styled.View`
  margin-top: 10px;
  align-items: center;
`;
