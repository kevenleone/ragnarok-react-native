import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const List = styled(FlatList)`
  background-color: #fafafa;
`;

export const Container = styled.View``;

export const MapView = styled.TouchableOpacity`
  width: 33%;
  margin-vertical: 10px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 130px;
  height: 130px;
`;

export const Map = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #222;
  margin-vertical: 2px;
`;
