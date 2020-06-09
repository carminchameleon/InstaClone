import React, {useState} from 'react';
import styled from 'styled-components';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialIcons,
} from '@expo/vector-icons';
import {theme} from '../Components/theme';
const {width, height} = Dimensions.get('screen');
import {SearchBar, withTheme} from 'react-native-elements';
import Menu from '../Components/Setting/Menu';
import Results from '../Components/Setting/Results';
export default () => {
  const [value, onChangeText] = useState('');
  const [Typing, isTyping] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = (text) => {
    onChangeText(text);
    let searchResult = [];
    menuDatas.filter((item) => {
      if (item.menuName.search(text) !== -1) {
        searchResult.push(item.menuName);
      }
    });
    setResults(searchResult);
  };

  return (
    <SafeZone>
      <Container>
        <SearchContainer>
          <SearchBar
            round
            placeholder="Search"
            onChangeText={handleSearch}
            value={value}
            containerStyle={{
              width: '95%',
              height: 30,
              backgroundColor: `${theme.BORDER_COLOR}`,
              borderRadius: 7,
            }}
            platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          />
        </SearchContainer>
      </Container>
    </SafeZone>
  );
};

const SafeZone = styled.SafeAreaView`
  background-color: ${theme.GRAY_COLOR};
`;
const Container = styled.View`
  flex: 1;
`;

const SearchContainer = styled.View`
  background-color: ${theme.GRAY_COLOR};
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const menuDatas = [
  {
    menuId: 1,
    menuName: 'Follow and Invite Friends',
  },
  {
    menuId: 2,
    menuName: 'Your Activity',
  },
  {
    menuId: 3,
    menuName: 'Notifications',
  },
  {
    menuId: 4,
    menuName: 'Privacy',
  },
  {
    menuId: 5,
    menuName: 'Ads',
  },
  {
    menuId: 6,
    menuName: 'Account',
  },
  {
    menuId: 7,
    menuName: 'Help',
  },
  {
    menuId: 8,
    menuName: 'About',
  },
  {
    menuId: 9,
    menuName: 'Invite Friends by SMS',
  },
  {
    menuId: 10,
    menuName: 'Invite Friends by Email',
  },
  {
    menuId: 11,
    menuName: 'Invite Friends by...',
  },
  {
    menuId: 12,
    menuName: 'Follow Contacts',
  },
  {
    menuId: 13,
    menuName: 'Pause All',
  },
  {
    menuId: 14,
    menuName: 'Posts, Stories and Comments',
  },
  {
    menuId: 15,
    menuName: 'Following and Followers',
  },
  {
    menuId: 16,
    menuName: 'Direct Messages',
  },
];
