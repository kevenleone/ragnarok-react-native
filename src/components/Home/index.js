import React, { useState } from 'react';
import { If, Then, Else } from 'react-if';
import { useLazyQuery } from 'react-apollo';
import PropTypes from 'prop-types';
import { getMonsterFilter } from '../../graphql/gql/query/monster';
import SearchList from './SearchList';
import Categories from './Categories';
import {
  Container, Content, Title, Input,
} from './styles';

const Home = ({ navigation, list, races }) => {
  const [subItems, setSubItems] = useState(null);
  const [search, setSearch] = useState('');
  const [getMonsters, { data: monstersData }] = useLazyQuery(getMonsterFilter);
  let monsters = [];

  if (monstersData && monstersData.getMonsterFilter) {
    monsters = monstersData.getMonsterFilter;
  }

  function handleChange(text) {
    setSearch(text);
    if (text.length >= 3 || text === '') {
      getMonsters({ variables: { data: { iName: text } } });
    }
  }

  const newList = list.map((lx) => {
    if (lx.title === 'Races') {
      lx.action = races.map((race) => ({ ...race, page: 'Monsters', params: { data: { data: { Race: race.id } } } }));
    }
    return lx;
  });

  const useItems = subItems || newList;

  return (
    <Container>
      <Content>
        <Title>What Monster are you looking for?</Title>
        <Input
          leftIconContainerStyle={{ marginLeft: -5, marginRight: 10 }}
          leftIcon={{ type: 'ionicon', name: 'ios-search' }}
          rightIcon={{ type: 'ionicon', name: 'ios-close', onPress: () => handleChange('') }}
          placeholder="Search for your favorite Monster"
          onChangeText={(text) => handleChange(text)}
          autoCapitalize="none"
          value={search}
        />

        <If condition={!search}>
          <Then>
            <Categories
              items={useItems}
              subItems={subItems}
              setSubItems={setSubItems}
              navigation={navigation}
            />
          </Then>
          <Else>
            <SearchList monsters={monsters} navigation={navigation} />
          </Else>
        </If>
      </Content>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  races: PropTypes.arrayOf(PropTypes.object),
};

Home.defaultProps = {
  races: [],
  list: [],
};

export default Home;
