import React, { useState } from 'react';
import { FloatingAction } from 'react-native-floating-action';
import {
  When, Switch, Case,
} from 'react-if';
import PropTypes from 'prop-types';
import MonsterCard from '../MonsterCard';
import ListFooter from '../ListFooter';
import {
  List, Title, View, Touchable, Icon,
} from './styles';
import Race from '../Monster/Filter/Race';

const getIcon = ({ icon, color = 'white' }) => (
  <Icon
    name={icon}
    color={color}
    size={25}
  />
);

const actions = [
  {
    text: 'Favourite Monsters',
    icon: getIcon({ icon: 'ios-heart' }),
    name: 'favorite',
  },
  {
    text: 'Monsters by Race',
    icon: getIcon({ icon: 'ios-keypad' }),
    name: 'list_race',
  },
  {
    text: 'Search Monster',
    icon: getIcon({ icon: 'ios-search' }),
    name: 'search_monster',
  },
];


const MonsterList = ({
  list, navigation, variables, setVariables, setResetList,
}) => {
  const { data } = variables;
  const [menuOption, setMenuOption] = useState(null);
  function loadMore() {
    const content = {
      data: { ...data, Page: data.Page + 1 },
    };
    setVariables(content);
  }

  function onPressRace({ id }) {
    setResetList(true);
    setVariables({ data: { Page: 1, Race: id } });
    setTimeout(() => setMenuOption(null), 1000); // Wait the Component Unmount
  }

  return (
    <View>
      <Touchable
        onPress={() => navigation.goBack()}
        style={{ marginRight: 'auto' }}
      >
        {getIcon({ icon: 'ios-arrow-back', color: 'black' })}
      </Touchable>
      <Title>Monsters</Title>
      <List
        data={list}
        keyExtractor={(data) => data.id}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}
        numColumns={2}
        ListFooterComponent={ListFooter}
        renderItem={({ item }) => (
          <MonsterCard
            navigation={navigation}
            monster={item}
            origin="list"
          />
        )}
      />
      <FloatingAction
        actions={actions}
        floatingIcon={getIcon({ icon: 'ios-menu' })}
        onPressItem={(name) => setMenuOption(name)}
      />
      <When condition={!!menuOption}>
        <Switch>
          <Case condition={menuOption === 'list_race'}>
            <Race
              onPressRace={onPressRace}
              setMenuOption={setMenuOption}
            />
          </Case>
        </Switch>
      </When>
    </View>
  );
};

MonsterList.propTypes = {
  setResetList: PropTypes.func.isRequired,
  variables: PropTypes.objectOf(PropTypes.object),
  setVariables: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

MonsterList.defaultProps = {
  list: [],
  variables: { data: {} },
};

export default MonsterList;
