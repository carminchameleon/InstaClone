import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import styled from 'styled-components';
import {theme} from '../theme';
import ProfilePhotos from './ProfilePhotos';
export default () => {
  return (
    <Container>
      <InfoWrapper>
        <UserInfo>
          <UserProfileImg
            source={{
              uri:
                'https://images.unsplash.com/photo-1575224889663-4d96137aac12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
            }}
          />
          <UserNumbers>
            <NumberBox>
              <Number>533</Number>
              <Title>Posts</Title>
            </NumberBox>
            <NumberBox>
              <Number>256</Number>
              <Title>Followers</Title>
            </NumberBox>
            <NumberBox>
              <Number>233</Number>
              <Title>Following</Title>
            </NumberBox>
          </UserNumbers>
        </UserInfo>
      </InfoWrapper>
      <IntroWrapper>
        <UserName>Eunji Carmin Hwang</UserName>
        <UserIntro>WonderWall😄</UserIntro>
        <EditProfileBox>
          <TouchableWithoutFeedback>
            <EditProfile>Edit Profile</EditProfile>
          </TouchableWithoutFeedback>
        </EditProfileBox>
      </IntroWrapper>
      <ProfilePhotos />
    </Container>
  );
};

const Container = styled.ScrollView`
  display: flex;
`;
const InfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

const UserInfo = styled.View`
  display: flex;
  flex: 2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const UserProfileImg = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 1px solid gray;
`;

const UserNumbers = styled.View`
  flex: 8;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NumberBox = styled.View``;

const Number = styled.Text`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const Title = styled.Text`
  text-align: center;
`;

const IntroWrapper = styled.View`
  padding: 15px;

  padding-top: 15px;
`;

const UserName = styled.Text`
  font-weight: bold;
  padding-bottom: 2px;
`;

const UserIntro = styled.Text`
  padding-bottom: 10px;
`;

const EditProfileBox = styled.View`
  border: 1px solid ${theme.BORDER_COLOR};
  height: 30px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const EditProfile = styled.Text`
  text-align: center;
`;
