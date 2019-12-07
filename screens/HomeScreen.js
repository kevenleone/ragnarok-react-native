import React from 'react'
import { View, Text } from 'react-native';
import MonsterInfo from '../components/MonsterInfo';
import MonsterList from '../components/MonsterList';

const HomeScreen = () => {
  return (
    <MonsterList />
  )
}

HomeScreen.navigationOptions = {
  title: "Ragnarok Online",
  headerStyle: {
    backgroundColor: '#333',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};


export default HomeScreen
