import React from 'react';
import {
  Container, View, Map, ImageContainer, ListItem, MonsterImageContainer,
} from './styles';

const MonsterInfo = ({ mapData, navigation }) => {
  const { img, monsters = [] } = mapData;
  return (
    <Container showsVerticalScrollIndicator={false}>
      <View>
        <ImageContainer>
          <Map source={{ uri: img }} />
        </ImageContainer>
      </View>
      { monsters.map((monster) => (
        <ListItem
          key={monster.id}
          title={monster.kName}
          subtitle={monster.spawn}
          titleStyle={{ color: '#333', fontWeight: '500' }}
          containerStyle={{ height: 100 }}
          onPress={() => navigation.navigate('MonsterScreen', { id: monster.id })}
          leftElement={(
            <MonsterImageContainer>
              <Map width={100} height={50} source={{ uri: monster.image.animated }} />
            </MonsterImageContainer>
            )}
          bottomDivider
          chevron
        />
      ))}
    </Container>
  );
};

export default MonsterInfo;
