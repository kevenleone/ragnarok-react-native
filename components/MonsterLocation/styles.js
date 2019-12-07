import styled from 'styled-components/native';
import { Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
  margin-top: 10px;
`;

export const Card = styled.View`
  margin-horizontal: 10px;
  height: 350px;
  width: 250px;
  text-align: center;
  borderRadius: 4px;
  borderWidth: 0.5px;
  borderColor: #333;
  padding: 10px;
`;

export const CardList = styled.ScrollView``;

export const Info = styled.Text``;

export const Map = styled(Image)`
  width: 300px;
  height: 300px;
`;

export const MapTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #555;
  text-align: center;
`;

export const Loading = styled(ActivityIndicator)``;
