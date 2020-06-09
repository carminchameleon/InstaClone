import React, {useState} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {theme} from '../Styles/theme';
import styled from 'styled-components';

export default ({navigation}) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleNavigation = () => {
    setId('');
    setPw('');
    navigation.push('mainStack');
  };

  return (
    <Container>
      <Wrapper>
        <InstaLogoImage
          source={require('../assets/logo_text.png')}
        ></InstaLogoImage>
        <InputBox
          value={id}
          name={id}
          placeholder="Phone number, username or email"
          onChangeText={(text) => setId(text)}
        ></InputBox>
        <InputBox
          secureTextEntry={true}
          name={pw}
          value={pw}
          placeholder="Password"
          onChangeText={(text) => setPw(text)}
        ></InputBox>
        <ForgetTouchZone>
          <ForgetText>Forgot password?</ForgetText>
        </ForgetTouchZone>

        <LoginButtonZone
          onPress={() =>
            id && pw ? handleNavigation() : alert('입력을 완료해 주세요')
          }
          isFilled={id && pw}
        >
          <LoginButton>Login</LoginButton>
        </LoginButtonZone>

        <OrBox>
          <OrLine></OrLine>
          <OrText>OR</OrText>
          <OrLine></OrLine>
        </OrBox>
        <FBBox>
          <FBLogoBox>
            <FBLogo source={require('../assets/Facebook.png')}></FBLogo>
          </FBLogoBox>
          <FBText onPress={() => handleNavigation()}>
            Continue as Carminido
          </FBText>
        </FBBox>
      </Wrapper>
      <ForgetContainer>
        <AskAccountText>Don't have an account?</AskAccountText>
        <SignUpText>Sign Up</SignUpText>
      </ForgetContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.View`
  padding: 15px;
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InstaLogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 170px;
`;

const InputBox = styled.TextInput`
  width: 100%;
  padding: 10px;
  background-color: rgb(250, 250, 250);
  border: 0.5px solid ${theme.BORDER_COLOR};
  border-radius: 7px;
  margin-top: 5%;
`;

const ForgetTouchZone = styled.TouchableOpacity`
  align-self: flex-end;
`;

const ForgetText = styled.Text`
  padding-top: 10px;
  color: ${theme.BLUE_COLOR};
  font-weight: bold;
  font-size: 12px;
`;

const LoginButtonZone = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  background-color: ${(props) =>
    props.isFilled ? '#3897f0' : 'rgb(138, 191, 245)'};
  border: 0.5px solid ${theme.BORDER_COLOR};
  border-radius: 7px;
  margin-top: 5%;
`;

const LoginButton = styled.Text`
  width: 100%;
  color: white;
  text-align: center;
  font-weight: bold;
`;

const OrBox = styled.View`
  margin-top: 15px;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OrLine = styled.View`
  width: 38%;
  height: 0.8px;
  background-color: rgb(230, 230, 230);
`;

const OrText = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: rgb(152, 152, 152);
`;

const FBBox = styled.TouchableOpacity`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FBLogoBox = styled.View`
  height: 30px;
  justify-content: center;
  align-items: center;
`;
const FBLogo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 20px;
  height: 20px;
`;

const FBText = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: ${theme.BLUE_COLOR};
`;

const ForgetContainer = styled.View`
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-color: ${theme.BORDER_COLOR};
  border-top-width: 0.5px;
`;

const AskAccountText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: rgb(152, 152, 152);
`;

const SignUpText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: ${theme.BLUE_COLOR};
  font-weight: bold;
`;
