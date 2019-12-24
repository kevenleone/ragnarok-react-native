import React, { useState } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import MapQuery from '../../graphql/gql/query/map';
import List from '../../components/Map/List';
import Page from '../../components/UI/Page';

const MapScreen = ({ navigation }) => {
  const [variables, setVariables] = useState({ data: { Page: 1 } });
  const [maps, setMaps] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  function onCompleted(data) {
    if (data) {
      setMaps([...maps, ...data.getMonsterPlaceFilter]);
    }
    if (firstLoad) setFirstLoad(false);
  }

  return (
    <Query query={MapQuery} variables={variables} onCompleted={onCompleted}>
      {({ loading, error }) => (
        <Page
          delay={2000}
          loading={loading && firstLoad}
          error={error}
        >
          <List
            variables={variables}
            setVariables={setVariables}
            maps={maps}
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
