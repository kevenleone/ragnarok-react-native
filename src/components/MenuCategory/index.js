import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Text, IconView, Icon,
} from './styles';

const MenuCategory = (props) => {
  const {
    color, title, uri, onPress,
  } = props;
  return (
    <Card color={color} onPress={() => onPress(props)}>
      <Text>{title}</Text>
      <IconView>
        <Icon source={{ uri }} />
      </IconView>
    </Card>
  );
};

MenuCategory.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

MenuCategory.defaultProps = {
  color: '#333',
  onPress: () => {},
};

export default MenuCategory;
