import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import {
  View, Text, ProgressView, Item,
} from './styles';

const Status = ({
  status, value, reference, color,
}) => {
  const percent = Number(((reference * 100) / value).toFixed(0));
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
  // eslint-disable-next-line no-underscore-dangle
  delete statusReferences.__typename;
  return (
    <>
      { Object.keys(statusReferences).map((status) => (
        <Status
          value={statusReferences[status]}
          reference={monster[status]}
          color={monster.color}
          status={status}
          key={status}
        />
      ))}
    </>
  );
};

MonsterStats.propTypes = {
  monster: PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    statusReference: PropTypes.object,
  }),
};

MonsterStats.defaultProps = {
  monster: {},
};

Status.propTypes = {
  status: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  reference: PropTypes.number.isRequired,
};

export default MonsterStats;
