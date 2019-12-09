import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const View = styled.View`
  margin-top: 60px;
  padding: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 24px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const List = styled(FlatList)``;
