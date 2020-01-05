import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import logo from '../../../assets/images/logo.png';
import { translate } from '../../components/UI/Translate';

import {
  Container, Button, ButtonText, Form, Input, Label, Image, TextArea, LinkText,
} from './styles';

const SignIn = ({ navigation: { navigate } }) => (
  <>
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Image source={logo} />
      <Form>
        <Label>{`${translate('EMAIL')} *`}</Label>
        <Input
          placeholder={translate('EMAIL')}
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Label>{`${translate('PASSWORD')} *`}</Label>
        <Input
          placeholder={translate('INSERT_PASSWORD')}
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TextArea onPress={() => {}}>
          <LinkText>{translate('FORGOT_PASSWORD')}</LinkText>
        </TextArea>
        <Button onPress={() => navigate('Home')}>
          <ButtonText>{translate('SIGN_IN')}</ButtonText>
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
