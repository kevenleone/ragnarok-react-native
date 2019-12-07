import React from 'react'
import { Container, Monster, ScrollView, Image, MonsterName, MonsterRace, Info} from './styles';

const MonsterList = () => {
  return (
    <ScrollView>
      <Container>
        <Monster>
          <Image 
            source={{uri: "https://static.ragnaplace.com/bro/mob/1751.gif"}} 
            />
            <Info>
              <MonsterName> Valquíria Randgris </MonsterName>
              <MonsterRace> Angel </MonsterRace>
            </Info>
        </Monster> 
        <Monster></Monster> 
      </Container>
    </ScrollView>
  )
}

export default MonsterList
