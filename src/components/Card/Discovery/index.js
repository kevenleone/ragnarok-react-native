import React, { useState } from 'react';
import { useLazyQuery } from 'react-apollo';
import { When } from 'react-if';
import {
  Card, Container, Flip, Image, Header, Message,
} from './styles';
import { getMonsterRandom } from '../../../graphql/gql/query/monster';

function Discovery() {
  const [flipedImg, setFlipImage] = useState('https://i.pinimg.com/564x/56/d3/c4/56d3c486453c3783186f81becc8f9d69.jpg');
  const [enableMessages, setEnableMessages] = useState(false);
  const [shouldFlip, setShouldFlip] = useState(true);
  const [getMonster, { data, loading, error }] = useLazyQuery(getMonsterRandom);
  const [monster, setMonster] = useState(null);
  let card;
  setTimeout(() => {
    setShouldFlip(false);
  }, 12000);

  function getCard() {
    if (!monster) {
      card.flip();
      getMonster();
    }
  }

  if (data && data.getMonsterRandom && !monster) {
    setMonster(data.getMonsterRandom);
    setFlipImage(data.getMonsterRandom.image.art);
    setShouldFlip(false);
  }

  return (
    <Container>
      <Header>{shouldFlip ? 'Click to Discovery' : !enableMessages ? 'Getting the best card' : 'Congratulations...'}</Header>
      <Flip
        duration={2000}
        ref={(c) => card = c}
        onFlipEnd={() => (shouldFlip ? card.flip() : setEnableMessages(true))}
      >
        <Card onPress={getCard}>
          <Image source={{ uri: 'https://i.pinimg.com/564x/56/d3/c4/56d3c486453c3783186f81becc8f9d69.jpg' }} />
        </Card>
        <Card onPress={getCard}>
          <Image source={{ uri: flipedImg }} />
        </Card>
      </Flip>

      <When condition={Boolean(monster) && enableMessages}>
        <Message>
          {`You got ${monster && monster.kName} Card`}
        </Message>
      </When>

    </Container>
  );
}

export default Discovery;
