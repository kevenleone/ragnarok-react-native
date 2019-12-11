import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, CardList, Card, Map, MapTitle, Info,
} from './styles';

const MapLocation = ({ place }) => (
  <Card>
    <MapTitle>{place.map}</MapTitle>
    <Map source={{ uri: `http://www.ragnadb.com.br/img/maps/${place.map}.gif` }} />
    <Info>{`${place.quantity}/${place.spawn}`}</Info>
  </Card>
);

const MonsterLocation = ({ mobPlaces }) => (
  <Container>
    <CardList
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {mobPlaces.map((place) => <MapLocation key={place.id} place={place} />)}
    </CardList>
  </Container>
);

MonsterLocation.propTypes = {
  mobPlaces: PropTypes.arrayOf(PropTypes.object),
};

MonsterLocation.defaultProps = {
  mobPlaces: [],
};

MapLocation.propTypes = {
  place: PropTypes.shape({
    map: PropTypes.string,
    quantity: PropTypes.number,
    spawn: PropTypes.string,
  }).isRequired,
};

export default MonsterLocation;
