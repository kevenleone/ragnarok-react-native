import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

const ImageWithPlaceholder = ({ src: uri, style, resizeMode }) => (
  <Image
    source={{ uri }}
    style={style}
    resizeMode={resizeMode}
    PlaceholderContent={<ActivityIndicator color="white" />}
  />
);

ImageWithPlaceholder.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

ImageWithPlaceholder.defaultProps = {
  style: {},
};

export default ImageWithPlaceholder;
