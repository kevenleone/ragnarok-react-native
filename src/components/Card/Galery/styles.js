import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const List = styled(FlatList)`
  background-color: #fafafa;
`;

export const Container = styled.View`
`;

export const MapView = styled.TouchableOpacity`
  width: 45%;
  margin-horizontal: 2px;
  margin-vertical: 10px;
  align-items: center;
`;
