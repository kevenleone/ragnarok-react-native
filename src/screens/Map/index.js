import React from 'react';
import { Query } from 'react-apollo';
import MapInfo from '../../components/Map/Info';
import { getMapQuery } from '../../graphql/gql/query/map';

const MonsterScreen = ({ navigation }) => {
  const map = navigation.getParam('map', 'pay_fild04');
  return (
    <Query query={getMapQuery} variables={{ map }}>
      {({ data, error }) => (
        <MapInfo mapData={data ? data.getMap : {}} />
      )}
    </Query>

  );
};

export default MonsterScreen;
