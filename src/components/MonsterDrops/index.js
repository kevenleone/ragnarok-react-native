import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ListItem } from './styles';

const MonsterDrops = ({ monsterDrops }) => (
  <View>
    { monsterDrops.map((item) => (
      <ListItem
        key={item.id}
        title={item.name_japanese}
        leftAvatar={{ source: { uri: item.icon } }}
        bottomDivider
        chevron
      />
    ))}
  </View>
);

MonsterDrops.propTypes = {
  monsterDrops: PropTypes.arrayOf(PropTypes.object),
};

MonsterDrops.defaultProps = {
  monsterDrops: [],
};

export default MonsterDrops;
