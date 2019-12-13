import React from 'react';
import { FloatingAction } from 'react-native-floating-action';
import PropTypes from 'prop-types';
import MonsterCard from '../MonsterCard';
import ListFooter from '../ListFooter';
import {
  List, Title, View, Touchable, Icon,
} from './styles';

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
    name: 'monster_by_race',
  },
  {
    text: 'Search Monster',
    icon: getIcon({ icon: 'ios-search' }),
    name: 'search_monster',
  },
];


const MonsterList = ({
  list, navigation, variables, setVariables,
}) => {
  function loadMore() {
    const { data } = variables;
    const content = {
      data: { ...data, Page: data.Page + 1 },
    };
    setVariables(content);
  }

  return (
    <View>
      <Touchable
        onPress={() => navigation.goBack()}
        style={{ marginRight: 'auto' }}
      />
      <Title>Monsters</Title>
      <List
        data={list}
        keyExtractor={(data) => `${data.id}-${Math.random() * 20000}`}
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
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );
};

MonsterList.propTypes = {
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
