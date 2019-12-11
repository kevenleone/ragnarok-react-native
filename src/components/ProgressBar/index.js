import React from 'react';
import PropTypes from 'prop-types';
import { Border, Progress } from './styles';

const ProgressBar = ({ percent, color }) => (
  <Border>
    <Progress color={color} percent={percent} />
  </Border>
);

ProgressBar.propTypes = {
  percent: PropTypes.number,
  color: PropTypes.string,
};

ProgressBar.defaultProps = {
  color: '#1A5276',
  percent: 1,
};

export default ProgressBar;
