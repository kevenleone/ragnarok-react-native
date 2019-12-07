import React from 'react';
import { View, Text, ProgressView } from './styles';
import ProgressBar from '../ProgressBar';

const Status = ({ status, value, total }) => (
  <View>
    <Text>Attack</Text>
    <Text>80</Text>
    <ProgressView>
      <ProgressBar />
    </ProgressView>
  </View>
);

const MonsterStats = () => (
  <>
    <Status />
    <Status />
    <Status />
  </>
);

export default MonsterStats;
