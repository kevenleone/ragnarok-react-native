import React from 'react';
import MonsterCard from '../../MonsterCard';
import { MonsterView, ScrollView } from './styles';

const SearchList = ({ monsters, navigation }) => (
  <ScrollView
    horizontal
  >
    { monsters && monsters.length ? monsters.map((monster) => (
      <MonsterView
        key={monster.id}
      >
        <MonsterCard
          navigation={navigation}
          monster={monster}
        />
      </MonsterView>
    )) : null}
  </ScrollView>
);

export default SearchList;
