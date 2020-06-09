import React, {useState, useEffect, useRef} from 'react';
import {Text, View, TouchableOpacity, Dimensions, Platform} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import {Camera, fileSystem} from 'expo-camera';
import {EvilIcons, Ionicons} from '@expo/vector-icons';
import TopNav from '../Components/Upload/TopNav';
import styled from 'styled-components';
import {theme} from '../Styles/theme';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ALBUM_NAME = 'Eunstagram';

export default ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = React.createRef();

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    try {
      if (cameraRef.current) {
        let {uri} = await cameraRef.current.takePictureAsync({
          quality: 1,
        });
        if (uri) {
          savePhoto(uri);
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const savePhoto = async (uri) => {
    try {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === 'granted') {
        const asset = await MediaLibrary.createAssetAsync(uri);
        // 사진을 uri로 만들었음
        let album = await MediaLibrary.getAlbumAsync(ALBUM_NAME);
        // 만약 엘범이 없을 경우에, 만들어 줘야 함
        if (album === null) {
          let album = await MediaLibrary.createAlbumAsync(ALBUM_NAME, asset);
        } else {
          // 저장
          await MediaLibrary.addAssetsToAlbumAsync([asset], album.id);
        }
      } else {
        etHasPermission(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <TopNav navigation={navigation} />
      <CameraZone>
        <Camera style={{flex: 1}} type={type} ref={cameraRef}>
          <IconContainer>
            <IconZone
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <EvilIcons name="refresh" size={40} color="white" />
            </IconZone>
            <IconZone>
              <Ionicons name="ios-flash-off" size={30} color="white" />
            </IconZone>
          </IconContainer>
        </Camera>
      </CameraZone>
      <ButtonContainer>
        <ButtonZone
          onPress={() => {
            takePhoto(), alert('📲check EUNSTGAGRAM album!');
          }}
        >
          <Button></Button>
        </ButtonZone>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const CameraZone = styled.View`
  width: ${WIDTH};
  height: ${WIDTH};
  display: flex;
`;

const IconContainer = styled.View`
  background-color: transparent;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const IconZone = styled.TouchableOpacity`
  margin-top: 90%;
`;

const ButtonContainer = styled.View`
  flex: 1;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonZone = styled.TouchableOpacity``;

const Button = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 10px solid #dbdbdb;
  background-color: white;
`;
