import React from 'react';
import PropTypes from 'prop-types';
import MonsterCard from '../MonsterCard';
import ListFooter from '../ListFooter';
import { List, Title, View } from './styles';

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
    </View>
  );
};

MonsterList.propTypes = {
  variables: PropTypes.objectOf(PropTypes.object),
  setVariables: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

MonsterList.defaultProps = {
  list: [],
  variables: { data: {} },
};

export default MonsterList;
