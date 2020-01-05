import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './styles';

const MonsterDrops = ({ monsterDrops }) => (
  <>
    { monsterDrops.map((item) => (
      <ListItem
        key={item.id}
        title={item.name_japanese}
        leftAvatar={{ source: { uri: item.icon } }}
        bottomDivider
        chevron
      />
    ))}
  </>
);

MonsterDrops.propTypes = {
  monsterDrops: PropTypes.arrayOf(PropTypes.object),
};

MonsterDrops.defaultProps = {
  monsterDrops: [],
};

export default MonsterDrops;
