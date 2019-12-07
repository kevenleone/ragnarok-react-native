import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Switch, Case } from 'react-if';
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
import ProgressBar from '../ProgressBar';

import MonsterStats from '../MonsterStats';
import MonsterLocation from '../MonsterLocation';
import MonsterDrops from '../MonsterDrops';

const MonsterInfo = () => {
  const [selectedIndex, setIndex] = useState(0);
  const buttons = ['Stats', 'Drops', 'Location'];

  return (
    <Container>
      <Monster>
        <HeaderArea>
          <Touchable style={{ marginRight: 'auto' }}>
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
          <MonsterTitle>Valquíria Randgris</MonsterTitle>
          <MonsterTitle style={{ marginTop: 9, fontSize: 18, marginLeft: 'auto' }}>#1000</MonsterTitle>
        </Row>
        <Badge>
          <Text>Anjo</Text>
        </Badge>

      </Monster>
      <MonsterDetail>
        <ImageView>
          <Image
            source={{ uri: 'https://static.ragnaplace.com/bro/mob/1751.gif' }}
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
              <MonsterStats />
            </Case>
            <Case condition={selectedIndex === 1}>
              <MonsterDrops />
            </Case>
            <Case condition={selectedIndex === 2}>
              <MonsterLocation />
            </Case>
          </Switch>
        </ScrollView>
      </MonsterDetail>
    </Container>
  );
};

export default MonsterInfo;
