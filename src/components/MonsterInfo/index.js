import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Switch, Case } from 'react-if';

import PropTypes from 'prop-types';
import {
  Container,
  MonsterTitle,
  Monster,
  Badge,
  MonsterDetail,
  Row,
  Touchable,
  HeaderArea,
  Text,
  Image,
  ImageView,
  ScrollView,
  ButtonGroup,
} from './styles';

import MonsterStats from '../MonsterStats';
import MonsterLocation from '../MonsterLocation';
import MonsterDrops from '../MonsterDrops';

const MonsterInfo = ({ navigation, monster }) => {
  const buttons = ['Stats', 'Drops', 'Location'];
  const [selectedIndex, setIndex] = useState(0);
  const { goBack } = navigation;
  const {
    kName, race, id, image, color, mobplace, monsterDrops,
  } = monster;
  return (
    <Container>
      <Monster color={color}>
        <HeaderArea>
          <Touchable
            onPress={() => goBack()}
            style={{ marginRight: 'auto' }}
          >
            <Ionicons
              name="ios-arrow-back"
              color="white"
              size={25}
            />
          </Touchable>
          <Touchable>
            <Ionicons
              name="ios-heart"
              color="white"
              size={25}
            />
          </Touchable>
        </HeaderArea>
        <Row>
          <MonsterTitle>{kName}</MonsterTitle>
          <MonsterTitle style={{ marginTop: 9, fontSize: 18, marginLeft: 'auto' }}>
            {`#${id}`}
          </MonsterTitle>
        </Row>
        <Badge>
          <Text>{race}</Text>
        </Badge>

      </Monster>
      <MonsterDetail>
        <ImageView>
          <Image
            source={{ uri: image ? image.animated : null }}
          />
        </ImageView>
        <ButtonGroup
          onPress={(i) => setIndex(i)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 30 }}
        />
        <ScrollView>
          <Switch>
            <Case condition={selectedIndex === 0}>
              <MonsterStats monster={monster} />
            </Case>
            <Case condition={selectedIndex === 1}>
              <MonsterDrops monsterDrops={monsterDrops} />
            </Case>
            <Case condition={selectedIndex === 2}>
              <MonsterLocation navigation={navigation} mobPlaces={mobplace} />
            </Case>
          </Switch>
        </ScrollView>
      </MonsterDetail>
    </Container>
  );
};

MonsterInfo.propTypes = {
  monster: PropTypes.shape({
    color: PropTypes.string,
    id: PropTypes.number,
    kName: PropTypes.string,
    race: PropTypes.string,
    image: PropTypes.object,
    mobplace: PropTypes.array,
    monsterDrops: PropTypes.array,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default MonsterInfo;
