import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, CardList, Card, Map, MapTitle, Info,
} from './styles';

const MapLocation = ({ place, navigation }) => (
  <Card onPress={() => navigation.navigate('MapScreen', { title: place.map, map: place.map })}>
    <MapTitle>{place.map}</MapTitle>
    <Map source={{ uri: `http://www.ragnadb.com.br/img/maps/${place.map}.gif` }} />
    <Info>{`${place.quantity}/${place.spawn}`}</Info>
  </Card>
);

const MonsterLocation = ({ mobPlaces, navigation }) => (
  <Container>
    <CardList
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {mobPlaces.map((place) => (
        <MapLocation navigation={navigation} key={place.id} place={place} />))}
    </CardList>
  </Container>
);

MonsterLocation.propTypes = {
  mobPlaces: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

MonsterLocation.defaultProps = {
  mobPlaces: [],
};

MapLocation.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  place: PropTypes.shape({
    map: PropTypes.string,
    quantity: PropTypes.number,
    spawn: PropTypes.string,
  }).isRequired,
};

export default MonsterLocation;
