import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const View = styled.View`
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

export const Icon = styled(Ionicons)``;

export const Touchable = styled.TouchableOpacity`
  margin-left: 5px;
  margin-bottom: 15px;
`;
