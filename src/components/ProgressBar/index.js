import React from 'react';
import { Border, Progress } from './styles';

const index = ({ percent, color }) => (
  <Border>
    <Progress color={color} percent={percent} />
  </Border>
);

export default index;
