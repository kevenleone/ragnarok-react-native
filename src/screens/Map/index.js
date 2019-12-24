import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import MapInfo from '../../components/Map/Info';
import { getMapQuery } from '../../graphql/gql/query/map';
import Page from '../../components/Page';

const MonsterScreen = ({ navigation }) => {
  const map = navigation.getParam('map', 'ama_dun03');
  return (
    <Query query={getMapQuery} variables={{ map }}>
      {({ data, loading, error }) => (
        <Page loading={loading} error={error}>
          <MapInfo
            navigation={navigation}
            mapData={data ? data.getMap : {}}
          />
        </Page>
      )}
    </Query>
  );
};

MonsterScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default MonsterScreen;
