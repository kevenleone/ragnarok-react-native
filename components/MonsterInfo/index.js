import React from 'react'
import { View } from 'react-native';
import { Container, MonsterTitle, Monster, Badge, MonsterDetail, Row, Touchable } from './styles';
import { Ionicons } from '@expo/vector-icons';

const MonsterInfo = () => {
  return (
    <Container>
      <Monster>
        <Row>
          <Touchable>
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
        </Row>
        <Row>
          <Badge>Poison</Badge>
          <Badge>Grass</Badge>
        </Row>
        <Row>
          <MonsterTitle>Oi</MonsterTitle>
        </Row>
      </Monster>
      <MonsterDetail>
        <MonsterTitle>Oi</MonsterTitle>
      </MonsterDetail>
    </Container>
  )
}

export default MonsterInfo
