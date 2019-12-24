import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, View, Map, ImageContainer, ListItem, MonsterImageContainer, Divider,
} from './styles';
import Image from '../../UI/Image';

const MonsterInfo = ({ mapData, navigation }) => {
  const { img, monsters = [] } = mapData;
  return (
    <Container showsVerticalScrollIndicator={false}>
      <View>
        <ImageContainer>
          <Image
            style={{ width: '100%', height: '100%' }}
            resizeMode="stretch"
            src={img}
          />
        </ImageContainer>
      </View>
      <Divider />
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

MonsterInfo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  mapData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MonsterInfo;
