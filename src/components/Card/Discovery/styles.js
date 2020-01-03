import styled from 'styled-components/native';
import CardFlip from 'react-native-card-flip';

export const Container = styled.View`
  flex: 1;
  align-self: center;
`;

export const Card = styled.TouchableOpacity`
  backgroundColor: blue;
  width: 300;
  height: 400;
`;

export const Flip = styled(CardFlip)`
  margin-top: 20%;
  width: 300;
  height: 400;
  align-self: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Header = styled.Text`
  font-size: 22px;
  color: #333;
  font-weight: 600;
  margin-top: 10%;
  margin-bottom: -10%;
  align-self: center;
`;

export const Message = styled.Text`
    font-size: 22px;
    color: #999;
    font-weight: 600;
    margin-top: 5%;
    align-self: center;
`;
