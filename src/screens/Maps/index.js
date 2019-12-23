import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import { Query } from 'react-apollo';
import MapQuery from '../../graphql/gql/query/map';
import List from '../../components/Map/List';

const MapScreen = () => {
  const [variables, setVariables] = useState({ data: { Page: 1 } });
  return (
    <Query query={MapQuery} variables={variables}>
      {({ data, loading, error }) => (
        <>
          <Header
            backgroundColor="#333"
            barStyle="light-content" // or directly
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Ragnarok Maps', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <List
            variables={variables}
            setVariables={setVariables}
            maps={data ? data.getMonsterPlaceFilter : []}
          />
        </>
      )}
    </Query>
  );
};

MapScreen.navigationOptions = {
  header: null,
};

export default MapScreen;
