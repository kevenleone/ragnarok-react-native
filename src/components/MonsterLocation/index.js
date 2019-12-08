import React from 'react';
import {
  Container, CardList, Card, Loading, Map, MapTitle, Info,
} from './styles';

const MapLocation = ({ place }) => (
  <Card>
    <MapTitle>{place.map}</MapTitle>
    <Map
      source={{ uri: `http://www.ragnadb.com.br/img/maps/${place.map}.gif` }}
    />
    <Info>
      {`${place.quantity}/${place.spawn}`}
    </Info>
  </Card>
);

const MonsterLocation = ({ mobPlaces = [] }) => (
  <Container>
    <CardList
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {mobPlaces.map((place) => <MapLocation key={place.id} place={place} />)}
    </CardList>
  </Container>
);

export default MonsterLocation;
