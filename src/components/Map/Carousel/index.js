import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  Container, View, Map, ImageContainer, MapTitle, MonsterView, ListItem, MapContainer,
} from './styles';

const renderItem = ({ item, index }) => (
  <MapContainer>
    <View>
      <MapTitle>{ item.map }</MapTitle>
      <ImageContainer>
        <Map source={{ uri: item.img }} />
      </ImageContainer>
    </View>
    <MonsterView>
      {
       item.monsters.map((monster) => (
         <ListItem
           key={monster.id}
           title={monster.kName}
           leftAvatar={{ source: { uri: monster.image.animated } }}
           bottomDivider
           chevron
         />
       ))
     }
    </MonsterView>
  </MapContainer>
);

const MapCarousel = ({ data = [] }) => (
  <Container>
    <Carousel
      layout="stack"
      data={data}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={350}
    />
  </Container>
);

export default MapCarousel;
