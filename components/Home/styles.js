import styled from 'styled-components/native';
import { Input as InputField } from 'react-native-elements';

export const Container = styled.View`
  padding: 30px;
`;

export const Content = styled.View`
  margin-top: 20%;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Input = styled(InputField)`
`;

export const CardList = styled.View`
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.TouchableOpacity`
  background-color: #555;
  width: 45%;
  height: 60px;
  margin-horizontal: 5px;
  margin-vertical: 5px;
  border-radius: 10px;
  justify-content: center;
  padding-left: 20px;
  flex-direction: row;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-top: 14%;
  margin-right: auto;
`;

export const Icon = styled.Image`
  width: 45px;
  height: 45px;
`;

export const IconView = styled.View`
  justify-content: center;
  margin-right: 10px;
`;
