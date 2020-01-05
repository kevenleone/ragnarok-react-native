import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { HomeCategories } from '../../constants/defaults';
import getRacesQuery from '../../graphql/gql/query/race';
import Home from '../../components/Home';
import Page from '../../components/UI/Page';

function normalizeRace(races) {
  if (races && races.getRaces.length) {
    return races.getRaces.map((race) => ({
      title: race.race,
      id: race.id,
      color: race.background,
      uri: race && race.representationMonster
        ? race.representationMonster.image.animated : null,
    }));
  }
  return [];
}

const HomeScreen = ({ navigation }) => (
  <Query query={getRacesQuery}>
    {({ data, error, loading }) => {
      const races = normalizeRace(data);
      return (
        <Page loading={loading} error={error}>
          <Home
            navigation={navigation}
            list={HomeCategories}
            races={races}
          />
        </Page>
      );
    }}
  </Query>
);

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
