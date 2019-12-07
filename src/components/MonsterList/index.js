import React from 'react';
import {
  Container, Monster, ScrollView, Image, MonsterName, MonsterRace, Info, Title, View,
} from './styles';

const MonsterList = ({ navigation }) => {
  function onSelectMonster() {
    navigation.navigate('MonsterScreen');
  }
  return (
    <View>
      <Title>Monsters</Title>
      <ScrollView>
        <Container>
          <Monster onPress={onSelectMonster}>
            <Info>
              <MonsterName> Valquíria Randgris </MonsterName>
              <MonsterRace> Angel </MonsterRace>
            </Info>
            <Image
              source={{ uri: 'https://static.ragnaplace.com/bro/mob/1751.gif' }}
            />
          </Monster>
          <Monster onPress={onSelectMonster}>
            <Info>
              <MonsterName> Valquíria Randgris </MonsterName>
              <MonsterRace> Angel </MonsterRace>
            </Info>
            <Image
              source={{ uri: 'https://static.ragnaplace.com/bro/mob/1751.gif' }}
            />
          </Monster>
        </Container>
      </ScrollView>
    </View>
  );
};

export default MonsterList;
