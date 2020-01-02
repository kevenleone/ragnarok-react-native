import styled from 'styled-components/native';
import CardFlip from 'react-native-card-flip';

export const Container = styled.View`
  flex: 1;
  margin-top: 20%;
`;

export const Card = styled.TouchableOpacity`
  backgroundColor: blue;
  width: 300;
  height: 400;
`;

export const Flip = styled(CardFlip)`
  width: 300;
  height: 400;
  align-self: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
