import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import logo from '../../../assets/images/logo.png';
import {
  Container, Button, ButtonText, Form, Input, Label, Image,
} from './styles';

const SignIn = ({ navigation: { navigate } }) => (
  <>
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Image source={logo} />
      <Form>
        <Label>Seu Email *</Label>
        <Input
          placeholder="Seu E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Label>Sua Senha *</Label>
        <Input
          placeholder="********"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <Button onPress={() => navigate('Home')}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Form>
    </Container>
  </>
);

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignIn;
