import React, { useState } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import MapQuery from '../../graphql/gql/query/map';
import List from '../../components/Map/List';
import Page from '../../components/Page';

const MapScreen = ({ navigation }) => {
  const [variables, setVariables] = useState({ data: { Page: 1 } });
  return (
    <Query query={MapQuery} variables={variables}>
      {({ data, loading, error }) => (
        <Page loading={loading} error={error}>
          <List
            variables={variables}
            setVariables={setVariables}
            maps={data ? data.getMonsterPlaceFilter : []}
            navigation={navigation}
          />
        </Page>
      )}
    </Query>
  );
};

MapScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default MapScreen;
