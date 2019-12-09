import React, { useState } from 'react';
import {
  If, Then, Else, When,
} from 'react-if';
import PropTypes from 'prop-types';
import { useLazyQuery } from 'react-apollo';
import {
  Container, Content, Title, Input, CardList, Card, Text, Icon, IconView, Touchable, ButtonText, MonsterView, ScrollView,
} from './styles';
import { getMonsterFilter } from '../../graphql/gql/query/monster';
import MonsterCard from '../MonsterCard';

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
      lx.action = races.map((race) => ({ ...race, page: 'MonstersScreen', params: { data: { data: { Race: race.id } } } }));
    }
    return lx;
  });

  const useItems = subItems || newList;

  function onClickCategory(action, { page, params }) {
    if (typeof action === 'function') {
      const content = action();
      navigation.navigate(content.page);
    } else if (page !== undefined) {
      navigation.navigate(page, params);
    } else {
      setSubItems(action);
    }
  }

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
            <When condition={subItems !== null}>
              <Touchable onPress={() => setSubItems(null)}>
                <ButtonText color="#999">Back to Main List</ButtonText>
              </Touchable>
            </When>

            <CardList>
              { useItems.map(({
                page, params, action, title, uri, color,
              }) => (
                <Card
                  key={title}
                  color={color}
                  onPress={() => onClickCategory(action, { params, page })}
                >
                  <Text>{title}</Text>
                  <IconView>
                    <Icon
                      source={{ uri }}
                    />
                  </IconView>
                </Card>
              ))}
            </CardList>
          </Then>
          <Else>
            <ScrollView
              horizontal
            >
              {
            monsters && monsters.length ? monsters.map((monster) => (
              <MonsterView
                key={monster.id}
              >
                <MonsterCard navigation={navigation} monster={monster} />
              </MonsterView>
            )) : null
        }
            </ScrollView>
          </Else>
        </If>
      </Content>
    </Container>
  );
};

Home.propTypes = {
  // navigation: PropTypes.objectOf(PropTypes.object, PropTypes.func).isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  races: PropTypes.arrayOf(PropTypes.object),
};

Home.defaultProps = {
  races: [],
  list: [],
};

export default Home;
