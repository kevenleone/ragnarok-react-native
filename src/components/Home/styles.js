import styled from 'styled-components/native';
import { Input as InputField } from 'react-native-elements';

function handleBackgroundColor({ color }) {
  return `background-color: ${color || '#333'}`;
}

export const Container = styled.View`
  padding: 30px;
  flex: 1;
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
  ${handleBackgroundColor}
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

export const Touchable = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: -10px;
  margin-left: 8px;
`;

export const ButtonText = styled.Text`
  color: #666;
  font-weight: 500;
`;

export const MonsterView = styled.View`
  width: 150px;
  height: 150px;
  margin-right: 10px;
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;
