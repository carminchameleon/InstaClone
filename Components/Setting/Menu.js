import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import {theme} from '../../Styles/theme';

const MenuList = [
  {
    MenuName: 'Follow and Invite Friends',
    IconName: 'person-add',
  },
  {
    MenuName: 'Your Activity',
    IconName: 'access-time',
  },
  {
    MenuName: 'Notifications',
    IconName: 'notifications-none',
  },
  {
    MenuName: 'Privacy',
    IconName: 'lock-outline',
  },
  {
    MenuName: 'Security',
    IconName: 'security',
  },
  {
    MenuName: 'Ads',
    IconName: 'business-center',
  },
  {
    MenuName: 'Accounts',
    IconName: 'account-circle',
  },
  {
    MenuName: 'Help',
    IconName: 'help-outline',
  },
  {
    MenuName: 'About',
    IconName: 'info-outline',
  },
];

export default ({navigation}) => {
  return (
    <Container>
      <MenuContainer>
        {MenuList.map((item) => {
          return (
            <MenuTouchZone
              activeOpacity={0.6}
              underlayColor={theme.BORDER_COLOR}
              onPress={() => alert('helllo')}
            >
              <MenuBox>
                <MenuTitle>
                  <IconBox>
                    <MaterialIcons
                      name={item.IconName}
                      size={25}
                      color={theme.TEXT_COLOR}
                    />
                  </IconBox>
                  <MenuName>{item.MenuName}</MenuName>
                </MenuTitle>
                <AntDesign name="right" size={20} color={theme.BORDER_COLOR} />
              </MenuBox>
            </MenuTouchZone>
          );
        })}
      </MenuContainer>
      <AuthContainer>
        <LoginTitle>Logins</LoginTitle>
        <MenuTouchZone>
          <LoginTitleName>Add Account</LoginTitleName>
        </MenuTouchZone>
        <MenuTouchZone
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <LoginTitleName>Log Out carminido</LoginTitleName>
        </MenuTouchZone>
      </AuthContainer>
      <CompanyContainer>
        <FromText>from</FromText>
        <CompanyText>FACEBOOK</CompanyText>
      </CompanyContainer>
    </Container>
  );
};
const Container = styled.ScrollView`
  flex: 1;
`;

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

const IconBox = styled.View`
  padding: 5px;
`;

const MenuTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuName = styled.Text`
  font-size: 16px;
  color: ${theme.TEXT_COLOR};
`;

const AuthContainer = styled.View`
  padding: 10px 6px;
  background-color: ${theme.GRAY_COLOR};
  display: flex;
  border-bottom-color: ${theme.BORDER_COLOR};
  border-bottom-width: 0.3px;
`;

const LoginTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  padding: 7px 5px;
`;

const LoginTitleName = styled.Text`
  padding: 7px 5px;
  font-size: 16px;
  color: ${theme.BLUE_COLOR};
`;

const CompanyContainer = styled.View`
  padding: 15px 12px;
  display: flex;
`;

const FromText = styled.Text`
  color: gray;
  font-size: 12px;
`;

const CompanyText = styled.Text`
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 13px;
`;
