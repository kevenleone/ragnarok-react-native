import React from 'react';
import { Query } from 'react-apollo';
import Home from '../../components/Home';
import race from '../../graphql/gql/query/race';
import Page from '../../components/Page';
import { HomeCategories } from '../../constants/defaults';


function normalizeRace(races) {
  if (races && races.getRaces.length) {
    return races.getRaces.map((race) => ({
      title: race.race,
      id: race.id,
      color: race.background,
      uri: race && race.representationMonster ? race.representationMonster.image.animated : null,
    }));
  }
  return [];
}

const HomeScreen = ({ navigation }) => (
  <Query query={race}>
    {({ data, loading }) => {
      const races = normalizeRace(data);
      return (
        <Page loading={loading}>
          <Home
            loading={loading}
            navigation={navigation}
            list={HomeCategories}
            races={races}
          />
        </Page>
      );
    }}
  </Query>
);

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
