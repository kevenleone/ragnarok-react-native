import React from 'react';
import {
  Container, View, Map, ImageContainer, MonsterView, ListItem,
} from './styles';

const MapCarousel = ({ mapData }) => {
  const { map, img, monsters = [] } = mapData;
  return (
    <Container>
      <View>
        <ImageContainer>
          <Map source={{ uri: img }} />
        </ImageContainer>
      </View>
      <MonsterView>
        { monsters.map((monster) => (
          <ListItem
            key={monster.id}
            title={monster.kName}
            titleStyle={{ color: '#333', fontWeight: '500' }}
            leftAvatar={{ rounded: false, source: { uri: monster.image.animated } }}
            badge={{ value: monster.spawn, textStyle: { fontSize: 15 } }}
            bottomDivider
            chevron
          />
        ))}
      </MonsterView>
    </Container>
  );
};

export default MapCarousel;
