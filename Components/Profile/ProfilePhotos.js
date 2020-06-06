import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import { theme } from "../theme";
import styled from "styled-components";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
const numColumns = 3;
const singleheight = width / 3;

export default () => {
  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <InvisibleBox></InvisibleBox>;
    }
    return (
      <PhotoBox>
        <Photo singleheight={singleheight} source={{ url: item.key }}></Photo>
      </PhotoBox>
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
        key: `blank-${numberOfElementsLastRow}`,
        empty: true,
      });
      numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
    return data;
  };

  return (
    <Container>
      <MenuContainer>
        <MenuBox>
          <TouchableWithoutFeedback>
            <Ionicons name="md-grid" size={28} color={theme.BLACK_COLOR} />
          </TouchableWithoutFeedback>
        </MenuBox>
        <MenuSelectedBox>
          <TouchableWithoutFeedback>
            <MaterialIcons
              name="person-pin"
              size={28}
              color={theme.BORDER_COLOR}
            />
          </TouchableWithoutFeedback>
        </MenuSelectedBox>
      </MenuContainer>
      <PhotoContainer>
        <FlatList
          data={formatData(data, numColumns)}
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
  border-bottom-width: 1px;
`;

const MenuSelectedBox = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PhotoContainer = styled.View`
  flex: 1;
  display: flex;
`;

const PhotoBox = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  height: {width / numColumns};
`;

const InvisibleBox = styled.View`
  background-color: transparent;
`;

const Photo = styled.Image.attrs({
  resizeMode: "cover",
})`
  height: ${(props) => props.singleheight};
  width: ${width / 3};
  border: 1px solid gray;
`;

const data = [
  {
    key:
      "https://images.unsplash.com/photo-1588260411006-a2605a79d788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1451&q=80",
  },
  {
    key:
      "https://images.unsplash.com/photo-1546378197-0e1afd1539a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    key:
      "https://images.unsplash.com/photo-1541614869345-b7bfd3079543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    key:
      "https://images.unsplash.com/photo-1580046595094-ada968ad5f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    key:
      "https://images.unsplash.com/photo-1586864218799-313b60c5cc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    key:
      "https://images.unsplash.com/photo-1565151343375-00d140ec96b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    key:
      "https://images.unsplash.com/photo-1559567111-eb6cbba7e5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    key:
      "https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    key:
      "https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
  },
  {
    key:
      "https://images.unsplash.com/photo-1496208612508-eb52fba7d94e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    key:
      "https://images.unsplash.com/photo-1518911710364-17ec553bde5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    key:
      "https://images.unsplash.com/photo-1583265627959-fb7042f5133b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];
