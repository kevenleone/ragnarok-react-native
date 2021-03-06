import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, CardList, Card, MapTitle, Info,
} from './styles';
import Image from '../UI/Image';

const MapLocation = ({ place, navigation }) => (
  <Card onPress={() => navigation.navigate('MapScreen', { title: place.map, map: place.map })}>
    <MapTitle>{place.map}</MapTitle>
    <Image style={{ width: 230, height: 300 }} src={place.img} />
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
    quantity: PropTypes.number,
    spawn: PropTypes.string,
    map: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default MonsterLocation;
