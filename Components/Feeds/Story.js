import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {theme} from '../../Styles/theme';
import styled from 'styled-components';

export default () => {
  const renderItem = ({item}) => {
    return (
      <StoryContainer>
        <ImgContainer>
          <LinearGradient
            colors={['#f58529', '#FEDA77', '#dd2a7b', '#8134af']}
            style={{
              width: 65,
              height: 65,
              borderRadius: 32.5,
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <StoryImg source={{uri: `${item.source}`}}></StoryImg>
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
      <StoryWrapper
        keyExtractor={(item) => item.id}
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

const StoryWrapper = styled.FlatList``;

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
  resizeMode: 'cover',
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

const storyDatas = [
  {
    id: 1,
    name: 'david',
    source:
      'https://images.unsplash.com/photo-1468186376524-b53e47314061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'nicolas',
    source:
      'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'martin',
    source:
      'https://images.unsplash.com/photo-1475049120922-5fd74aecbfe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'kyle',
    source:
      'https://images.unsplash.com/photo-1517255666489-db1d2c54d083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'scott',
    source:
      'https://images.unsplash.com/photo-1517325619117-a469256220f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    name: 'brandon',
    source:
      'https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 7,
    name: 'nicole',
    source:
      'https://images.unsplash.com/photo-1517588978316-1cebd2151f37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 8,
    name: 'jenny__',
    source:
      'https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
];
