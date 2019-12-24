import React, { useState } from 'react';
import { Query } from 'react-apollo';
import MapQuery from '../../graphql/gql/query/map';
import List from '../../components/Map/List';

const MapScreen = ({ navigation }) => {
  const [variables, setVariables] = useState({ data: { Page: 1 } });
  return (
    <Query query={MapQuery} variables={variables}>
      {({ data, loading, error }) => (
        <>
          <List
            variables={variables}
            setVariables={setVariables}
            maps={data ? data.getMonsterPlaceFilter : []}
            navigation={navigation}
          />
        </>
      )}
    </Query>
  );
};

MapScreen.navigationOptions = {
  title: 'Ragnarok Maps',
};

export default MapScreen;
