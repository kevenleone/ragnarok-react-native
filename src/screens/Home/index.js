import React from 'react';
import { Query } from 'react-apollo';
import Home from '../../components/Home';
import race from '../../graphql/gql/query/race';
import Page from '../../components/Page';

const List = [
  {
    title: 'Monsters',
    uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
    action() {
      return {
        page: 'MonstersScreen',
        payload: '',
      };
    },
  },
  {
    title: 'Races',
    uri: 'http://www.ragnadb.com.br/img/monstro/1511/amon-ra.gif',
  },
  {
    title: 'Maps',
    uri: 'http://www.ragnadb.com.br/img/maps/prontera.gif',
    action() {
      alert('Abrir página Maps');
    },
  },
  {
    title: 'Itens',
    uri: 'http://www.ragnadb.com.br/img/item-small/7053/cyfar.gif',
    action: [],
  },
];


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
            list={List}
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
