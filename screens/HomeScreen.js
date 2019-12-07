import React from 'react';
import MonsterInfo from '../components/MonsterInfo';
import MonsterList from '../components/MonsterList';
import Home from '../components/Home';

const HomeScreen = () => (
  <>
    {/* <MonsterList /> */}
    <Home />
  </>
);

HomeScreen.navigationOptions = {
  header: null,
  title: 'Ragnarok Online',
  headerStyle: {
    backgroundColor: '#333',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};


export default HomeScreen;
