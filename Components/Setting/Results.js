import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {theme} from '../../Styles/theme';
import styled from 'styled-components';

export default (props) => {
  const {results} = props;
  return (
    <Container>
      <MenuContainer>
        {results.map((item) => {
          return (
            <MenuTouchZone
              activeOpacity={0.6}
              underlayColor={theme.BORDER_COLOR}
              onPress={() => alert(`you clicked ${item}`)}
            >
              <MenuBox>
                <MenuTitle>
                  <MenuName>{item}</MenuName>
                </MenuTitle>
                <AntDesign name="right" size={20} color={theme.BORDER_COLOR} />
              </MenuBox>
            </MenuTouchZone>
          );
        })}
      </MenuContainer>
    </Container>
  );
};
const Container = styled.View``;

const MenuContainer = styled.View`
  background-color: ${theme.GRAY_COLOR};
  padding: 6px;
  border-bottom-color: ${theme.BORDER_COLOR};
  border-bottom-width: 0.3px;
`;

const MenuTouchZone = styled.TouchableOpacity``;

const MenuBox = styled.View`
  width: 100%;
  padding: 7px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const MenuTitle = styled.View`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuName = styled.Text`
  font-size: 16px;
  color: ${theme.TEXT_COLOR};
`;
