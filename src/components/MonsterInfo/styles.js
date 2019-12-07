import styled from 'styled-components/native';
import { ButtonGroup as BtnGroup } from 'react-native-elements';

function handleBackgroundColor({ color }) {
  return `background-color: ${color || '#333'}`;
}

export const Container = styled.View`
  flex: 1;
`;
export const Monster = styled.View`
  ${handleBackgroundColor}
  height: 40%;
  padding: 20px;
`;

export const Touchable = styled.TouchableOpacity``;

export const HeaderArea = styled.View`
  margin-horizontal: 8px;
  margin-top: 40px;
  flex-direction: row;
`;

export const Row = styled.View`
  margin-vertical: 10px;
  flex-direction: row;
`;

export const MonsterDetail = styled.View`
  background-color: #fff;
  borderTopRightRadius: 50px;
  borderTopLeftRadius: 50px;
  margin-top: -50px;
  height: 20%;
  flex: 3;
  padding: 20px;
`;

export const Badge = styled.View`
  background-color: #333;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
`;

export const Text = styled.Text`
  color: #fff;
  text-align: center;
`;

export const MonsterTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

export const Image = styled.Image`
  resizeMode: stretch;
  margin-top: -40px;
  margin-left: auto;
  margin-right: auto;
  width: 180px;
  height: 180px;
`;

export const ImageView = styled.View`
  margin-top: -120px;
  zIndex: 999;
`;

export const ScrollView = styled.ScrollView``;

export const ButtonGroup = styled(BtnGroup)``;
