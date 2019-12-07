import React from 'react';
import Home from '../../components/Home';

const HomeScreen = ({ navigation }) => (
  <Home navigation={navigation} />
);

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
