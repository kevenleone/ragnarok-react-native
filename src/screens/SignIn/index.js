import React, { useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import { Platform, AsyncStorage } from 'react-native';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import { translate, translateError } from '../../components/UI/Translate';
import { Login } from '../../graphql/gql/mutation/user';
import logo from '../../../assets/images/logo.png';
import {
  Container, Button, ButtonText, Form, Input, Label, Image, TextArea, LinkText,
} from './styles';

const SignIn = ({ navigation: { navigate } }) => {
  const [form, setForm] = useState({});

  function onError(error) {
    showMessage({ type: 'danger', message: translateError(error) });
  }

  function onCompleted(data) {
    AsyncStorage.setItem('@token', data.login);
    navigate('Home');
  }

  return (
    <Mutation mutation={Login} onError={onError} onCompleted={onCompleted}>
      {(loginMutation) => (
        <Container behavior="padding" enabled={Platform.OS === 'ios'}>
          <Image source={logo} />
          <Form>
            <Label>{`${translate('EMAIL')} *`}</Label>
            <Input
              value={form.email}
              onChangeText={(t) => setForm({ ...form, email: t })}
              placeholder={translate('EMAIL')}
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Label>{`${translate('PASSWORD')} *`}</Label>
            <Input
              value={form.password}
              onChangeText={(t) => setForm({ ...form, password: t })}
              placeholder={translate('INSERT_PASSWORD')}
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
            />
            <TextArea onPress={() => {}}>
              <LinkText>{translate('FORGOT_PASSWORD')}</LinkText>
            </TextArea>
            <Button disabled={!form.email && !form.password} onPress={() => loginMutation({ variables: form })}>
              <ButtonText>{translate('SIGN_IN')}</ButtonText>
            </Button>
          </Form>
        </Container>
      )}
    </Mutation>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignIn;
