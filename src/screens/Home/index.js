import React from 'react';
import { Query } from 'react-apollo';
import Home from '../../components/Home';
import race from '../../graphql/gql/query/race';

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
      title: race.race, id: race.id, color: race.background, uri: race.representationMonster.image.animated,
    }));
  }
  return [];
}

const HomeScreen = ({ navigation }) => (
  <Query query={race}>
    {({ data, loading }) => {
      const races = normalizeRace(data);
      return (
        <Home navigation={navigation} list={List} races={races} />
      );
    }}
  </Query>
);
HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
