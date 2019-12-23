import React from 'react';
import {
  Container, View, Map, ImageContainer, MapTitle, MonsterView, ListItem,
} from './styles';

const MapCarousel = ({ mapData }) => {
  const { map, img, monsters = [] } = mapData;
  return (
    <Container>
      <View>
        <MapTitle>{ map }</MapTitle>
        <ImageContainer>
          <Map source={{ uri: img }} />
        </ImageContainer>
      </View>
      <MonsterView>
        { monsters.map((monster) => (
          <ListItem
            key={monster.id}
            title={monster.kName}
            subtitle={monster.spawn}
            leftAvatar={{ source: { uri: monster.image.animated } }}
            bottomDivider
            chevron
          />
        ))}
      </MonsterView>
    </Container>
  );
};

export default MapCarousel;
