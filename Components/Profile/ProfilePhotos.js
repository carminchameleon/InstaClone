import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import {theme} from '../../Styles/theme';
import styled from 'styled-components';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
const {width, height} = Dimensions.get('screen');
const numColumns = 3;
const singleheight = width / 3;

export default () => {
  const [isTag, setIsTag] = useState(false);
  const renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <InvisibleBox></InvisibleBox>;
    }
    return (
      <PhotoBox>
        <Photo singleheight={singleheight} source={{uri: item.imgUrl}}></Photo>
      </PhotoBox>
    );
  };

  const handleKey = () => {
    return (
      new Date().getTime().toString() +
      Math.floor(Math.random() * Math.floor(new Date().getTime())).toString()
    );
  };

  const formatData = (data, numColumns) => {
    const NumberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - NumberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({
        imgUrl: `blank-${numberOfElementsLastRow}`,
        empty: true,
      });
      numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
    return data;
  };

  return (
    <Container>
      <MenuContainer>
        <MenuBox isTag={isTag}>
          <TouchableWithoutFeedback
            onPress={() => {
              setIsTag(!isTag);
            }}
          >
            <Ionicons
              name="md-grid"
              size={28}
              color={isTag ? theme.BORDER_COLOR : theme.BLACK_COLOR}
            />
          </TouchableWithoutFeedback>
        </MenuBox>
        <MenuSelectedBox isTag={isTag}>
          <TouchableWithoutFeedback
            onPress={() => {
              setIsTag(!isTag);
            }}
          >
            <MaterialIcons
              name="person-pin"
              size={28}
              color={isTag ? theme.BLACK_COLOR : theme.BORDER_COLOR}
            />
          </TouchableWithoutFeedback>
        </MenuSelectedBox>
      </MenuContainer>
      <PhotoContainer>
        <FlatList
          keyExtractor={(item) => item.id}
          data={
            isTag
              ? formatData(tagData, numColumns)
              : formatData(data, numColumns)
          }
          renderItem={renderItem}
          numColumns={numColumns}
        ></FlatList>
      </PhotoContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  display: flex;
`;

const MenuContainer = styled.View`
  height: 40px;
  border: 1px solid ${theme.BORDER_COLOR};
  display: flex;
  flex-direction: row;
`;

const MenuBox = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-color: ${theme.BLACK_COLOR};
  border-bottom-width: ${(props) => (props.isTag ? '0px' : '2px')};
`;

const MenuSelectedBox = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-color: ${theme.BLACK_COLOR};
  border-bottom-width: ${(props) => (props.isTag ? '2px' : '0px')};
`;

const PhotoContainer = styled.View`
  flex: 1;
  display: flex;
`;

const PhotoBox = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  height: ${width / numColumns};
`;

const InvisibleBox = styled.View`
  background-color: transparent;
`;

const Photo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: ${(props) => props.singleheight}px;
  width: ${width / 3}px;
`;

const data = [
  {
    id: 1,
    imgUrl:
      'https://images.unsplash.com/photo-1588260411006-a2605a79d788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1451&q=80',
  },
  {
    id: 2,
    imgUrl:
      'https://images.unsplash.com/photo-1546378197-0e1afd1539a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    imgUrl:
      'https://images.unsplash.com/photo-1541614869345-b7bfd3079543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    imgUrl:
      'https://images.unsplash.com/photo-1580046595094-ada968ad5f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    imgUrl:
      'https://images.unsplash.com/photo-1586864218799-313b60c5cc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    imgUrl:
      'https://images.unsplash.com/photo-1565151343375-00d140ec96b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 7,
    imgUrl:
      'https://images.unsplash.com/photo-1559567111-eb6cbba7e5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 8,
    imgUrl:
      'https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 9,
    imgUrl:
      'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 10,
    imgUrl:
      'https://images.unsplash.com/photo-1496208612508-eb52fba7d94e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 11,
    imgUrl:
      'https://images.unsplash.com/photo-1518911710364-17ec553bde5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 12,
    imgUrl:
      'https://images.unsplash.com/photo-1583265627959-fb7042f5133b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
];

const tagData = [
  {
    id: 1,
    imgUrl:
      'https://images.unsplash.com/photo-1557762820-f16cbda96afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 2,
    imgUrl:
      'https://images.unsplash.com/photo-1555739041-162a7940e07e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 3,
    imgUrl:
      'https://images.unsplash.com/photo-1563863018143-bd8e3bf41f6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    imgUrl:
      'https://images.unsplash.com/photo-1579158742910-d274a1e38e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    imgUrl:
      'https://images.unsplash.com/photo-1561966130-ce10f3746233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    imgUrl:
      'https://images.unsplash.com/photo-1579888286284-692fa4bdc42b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 7,
    imgUrl:
      'https://images.unsplash.com/photo-1551946650-60a22105bcb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 8,
    imgUrl:
      'https://images.unsplash.com/photo-1563927247281-e66ac52bef15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 9,
    imgUrl:
      'https://images.unsplash.com/photo-1543726283-92248fee1bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 10,
    imgUrl:
      'https://images.unsplash.com/photo-1589714684232-49eac05bbde4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 11,
    imgUrl:
      'https://images.unsplash.com/photo-1586110382726-e2d43674c379?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 12,
    imgUrl:
      'https://images.unsplash.com/photo-1588193024529-7f9d04d606c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];
