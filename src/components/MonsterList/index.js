import React from 'react';
import { View as VVV, ActivityIndicator } from 'react-native';
import {
  List, Monster, ScrollView, Image, MonsterName, MonsterRace, Info, Title, View, IconView,
} from './styles';

const renderFooter = () => (
  <VVV style={{ marginVertical: 10 }}>
    <ActivityIndicator />
  </VVV>
);

const MonsterList = ({
  list, navigation, variables, setVariables,
}) => {
  function onSelectMonster(id) {
    navigation.navigate('MonsterScreen', { id });
  }

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
      <ScrollView>
        <List
          data={list}
          keyExtractor={(data) => data.id + data.kName}
          onEndReachedThreshold={0.01}
          // onEndReached={loadMore}
          numColumns={2}
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => {
            const {
              id, race, kName, color, image: { animated },
            } = item;
            return (
              <Monster
                key={id}
                color={color}
                onPress={() => onSelectMonster(id)}
              >
                <Info>
                  <MonsterName>{kName}</MonsterName>
                  <MonsterRace>{race}</MonsterRace>
                </Info>
                <IconView>
                  <Image source={{ uri: animated }} />
                </IconView>
              </Monster>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default MonsterList;
