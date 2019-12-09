import React from 'react';
import { View as VVV, ActivityIndicator } from 'react-native';
import MonsterCard from '../MonsterCard';
import {
  List, Title, View,
} from './styles';


const renderFooter = () => (
  <VVV style={{ marginVertical: 10 }}>
    <ActivityIndicator />
  </VVV>
);

const MonsterList = ({
  list, navigation, variables, setVariables,
}) => {
  function loadMore() {
    const { data } = variables;
    setVariables({
      data: {
        ...data,
        Page: data.Page + 1,
      },
    });
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
        ListFooterComponent={renderFooter}
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

export default MonsterList;
