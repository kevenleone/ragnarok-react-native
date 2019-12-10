import React from 'react';
import PropTypes from 'prop-types';
import MonsterCard from '../../MonsterCard';
import { MonsterView, ScrollView } from './styles';

const SearchList = ({ monsters, navigation }) => (
  <ScrollView horizontal>
    { monsters && monsters.length ? monsters.map((monster) => (
      <MonsterView key={monster.id}>
        <MonsterCard
          navigation={navigation}
          monster={monster}
        />
      </MonsterView>
    )) : null}
  </ScrollView>
);

SearchList.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

SearchList.defaultProps = {
  monsters: [],
};

export default SearchList;
