import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import logo from '../../../assets/images/logo.png';
import { dict } from '../../components/UI/Translate';
import {
  Container, Button, ButtonText, Form, Input, Label, Image,
} from './styles';

const SignIn = ({ navigation: { navigate } }) => (
  <>
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Image source={logo} />
      <Form>
        <Label>{`${dict.translate('EMAIL')} *`}</Label>
        <Input
          placeholder={dict.translate('EMAIL')}
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Label>{`${dict.translate('PASSWORD')} *`}</Label>
        <Input
          placeholder={dict.translate('INSERT_PASSWORD')}
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <Button onPress={() => navigate('Home')}>
          <ButtonText>{dict.translate('LOGIN')}</ButtonText>
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
