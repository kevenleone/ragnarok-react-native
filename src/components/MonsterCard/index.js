import React from 'react';
import PropTypes from 'prop-types';
import {
  Monster, Image, MonsterName, MonsterRace, Info, IconView,
} from './styles';

const MonsterCard = ({ origin, navigation, monster }) => {
  const {
    color, id, kName, race, image: { animated },
  } = monster;

  function onSelectMonster(monsterID) {
    navigation.navigate('MonsterScreen', { id: monsterID });
  }

  return (
    <Monster
      color={color}
      width={origin === 'list' ? 48 : null}
      onPress={() => onSelectMonster(id)}
    >
      <Info>
        <MonsterName>{kName}</MonsterName>
        <MonsterRace>{race}</MonsterRace>
      </Info>
      <IconView>
        <Image source={{ uri: animated }} />
      </IconView>
    </Monster>
  );
};

MonsterCard.propTypes = {
  origin: PropTypes.string,
  monster: PropTypes.shape({
    color: PropTypes.string,
    id: PropTypes.number,
    kName: PropTypes.string,
    race: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

MonsterCard.defaultProps = {
  origin: null,
};

export default MonsterCard;
