import styled from 'styled-components/native';
import { ListItem as Item } from 'react-native-elements';

export const ImageContainer = styled.View`
  margin-vertical: 5px;
  flex: 1;
  padding: 5px;
  width: 300px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Map = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

export const MonsterView = styled.View`
  height: 300px;
`;

export const MapTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

export const View = styled.View`
  height: 400px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.ScrollView`
  padding: 5px;
  height: 100%;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #333;
`;

export const ListItem = styled(Item)``;

export const MapContainer = styled.ScrollView`
  margin-top: 10px;
  border: 1px #dadada;
  background-color: #fff;
`;
