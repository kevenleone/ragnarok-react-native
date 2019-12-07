import React from 'react';
import MonsterList from '../../components/MonsterList';

const Monsters = ({ navigation }) => (
  <MonsterList navigation={navigation} />
);

Monsters.navigationOptions = {
  header: null,
};

export default Monsters;
