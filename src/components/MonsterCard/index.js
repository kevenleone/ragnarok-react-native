import React from 'react';
import {
  Monster, Image, MonsterName, MonsterRace, Info, IconView,
} from './styles';

const MonsterCard = ({ origin, navigation, monster }) => {
  const {
    color, id, kName, race, image: { animated },
  } = monster;

  function onSelectMonster(id) {
    navigation.navigate('MonsterScreen', { id });
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

export default MonsterCard;
