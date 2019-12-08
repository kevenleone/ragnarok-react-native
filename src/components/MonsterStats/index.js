import React from 'react';
import { When } from 'react-if';
import {
  View, Text, ProgressView, Item,
} from './styles';
import ProgressBar from '../ProgressBar';

const Status = ({
  status, value, reference, color,
}) => {
  const percent = ((reference * 100) / value).toFixed(0);
  return (
    <View>
      <Item width="18">
        <Text>{status}</Text>
      </Item>
      <Item width="25">
        <Text>{value}</Text>
      </Item>
      <ProgressView>
        <ProgressBar color={color} percent={percent} />
      </ProgressView>
    </View>
  );
};

const MonsterStats = ({ monster }) => {
  const statusReferences = monster.statusReference;
  delete statusReferences.__typename;
  return (
    <>
      {
      Object.keys(statusReferences).map((status) => (
        <Status
          key={status}
          status={status}
          value={statusReferences[status]}
          reference={monster[status]}
          color={monster.color}
        />
      ))
    }
    </>
  );
};

export default MonsterStats;
