import styled from 'styled-components/native';
import { Input as InputField } from 'react-native-elements';

export const Container = styled.View`
  padding: 30px;
  flex: 1;
`;

export const Content = styled.View`
  margin-top: 1%;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Input = styled(InputField)`
`;
