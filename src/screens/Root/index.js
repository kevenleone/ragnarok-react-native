import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import {
  Container, Section, Divider, Center,
} from './styles';
import { translate } from '../../components/UI/Translate';
import Loading from '../../components/UI/Loading';

const MainScreen = ({ navigation: { navigate } }) => (
  <Container>
    <Center>
      <Loading />
    </Center>
    <Section>
      <Divider />
      <Button
        title={translate('SIGN_IN')}
        onPress={() => navigate('SignIn')}
        style={{ marginBottom: 10 }}
        buttonStyle={{ backgroundColor: '#333' }}
      />
      <Button
        title={translate('SIGN_UP')}
        onPress={() => navigate('SignUp')}
        buttonStyle={{ backgroundColor: '#333' }}
      />
    </Section>
  </Container>
);

MainScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default MainScreen;
