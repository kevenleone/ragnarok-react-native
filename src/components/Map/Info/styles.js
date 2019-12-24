import styled from 'styled-components/native';
import { Divider as Div, ListItem as Item } from 'react-native-elements';

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
  width: ${(props) => props.width || 100}%;
  height: ${(props) => props.height || 100}%;
  resize-mode: stretch;
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
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #333;
`;

export const MonsterImageContainer = styled.View`
  width: 70px; 
  height: 100px;
  justify-content: center;
`;

export const ListItem = styled(Item)``;

export const Divider = styled(Div)``;
