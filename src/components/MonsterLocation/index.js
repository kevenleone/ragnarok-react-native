import React from 'react';
import { View, Text } from 'react-native';
import {
  Container, CardList, Card, Loading, Map, MapTitle, Info,
} from './styles';

const MapLocation = () => (
  <Card>
    <MapTitle>pay_fild04</MapTitle>
    <Map
      source={{ uri: 'http://www.ragnadb.com.br/img/maps/prontera.gif' }}
    />
    <Info> 10 / Minutes </Info>
  </Card>
);

const MonsterLocation = () => (
  <Container>
    <CardList
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <MapLocation />
      <MapLocation />
      <MapLocation />
      <MapLocation />
    </CardList>
  </Container>
);

export default MonsterLocation;
