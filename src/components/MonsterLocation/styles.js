import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
  margin-top: 10px;
`;

export const Card = styled.TouchableOpacity`
  margin-horizontal: 10px;
  height: 350px;
  width: 250px;
  text-align: center;
  borderRadius: 4px;
  borderWidth: 0.5px;
  borderColor: #333;
  padding: 10px;
`;

export const CardList = styled.ScrollView`
  align-self: center;
`;

export const Info = styled.Text``;

export const MapTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #555;
  text-align: center;
`;

export const Loading = styled(ActivityIndicator)``;
