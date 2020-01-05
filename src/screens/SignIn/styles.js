import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  padding-horizontal: 30;
  margin-top: 30;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  marginBottom: 8;
`;

export const Input = styled.TextInput`
  borderWidth: 1;
  borderColor: #ddd;
  paddingHorizontal: 20px;
  fontSize: 16px;
  color: #444;
  height: 44px;
  marginBottom: 20px;
  borderRadius: 2px;
`;

export const Button = styled.TouchableOpacity`
  height: 42;
  backgroundColor: ${((props) => props.color || '#1A5276')};
  margin-bottom: 5px;
  justifyContent: center;
  alignItems: center;
  borderRadius: 2px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  fontWeight: bold;
  fontSize: 18px;
`;

export const TextArea = styled.TouchableOpacity`
  align-self: center;
  margin-vertical: 5px;
`;

export const LinkText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${((props) => props.color || '#888')};
`;

export const Image = styled.Image``;
