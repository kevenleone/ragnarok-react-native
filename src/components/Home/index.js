import React, { useState } from 'react';
import { If, Then, Else } from 'react-if';
import { useLazyQuery } from 'react-apollo';
import PropTypes from 'prop-types';
import { getMonsterFilter } from '../../graphql/gql/query/monster';
import { translate } from '../UI/Translate';
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

  function handleChange(iName) {
    setSearch(iName);
    if (iName.length >= 3 || iName === '') {
      getMonsters({ variables: { data: { iName } } });
    }
  }

  const newList = list.map((lx) => {
    if (lx.title === translate('RACES')) {
      // eslint-disable-next-line no-param-reassign
      lx.action = races.map((race) => ({ ...race, page: 'Monsters', params: { data: { data: { Race: race.id } } } }));
    }
    return lx;
  });

  const useItems = subItems || newList;

  return (
    <Container>
      <Content>
        <Title>{translate('HOME_SEARCH_TITLE')}</Title>
        <Input
          leftIconContainerStyle={{ marginLeft: -5, marginRight: 10 }}
          leftIcon={{ type: 'ionicon', name: 'ios-search' }}
          rightIcon={{ type: 'ionicon', name: 'ios-close', onPress: () => handleChange('') }}
          placeholder={translate('HOME_SEARCH_PLACEHOLDER')}
          onChangeText={(text) => handleChange(text)}
          autoCapitalize="words"
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
