import React from 'react';
import {
  Card, Container, Flip, Image,
} from './styles';

const index = () => {
  let card;
  return (
    <Container>
      <Flip duration={1200} ref={(c) => card = c}>
        <Card onPress={() => card.flip()}>
          <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/hearthstone-deck-back/671/cardBack1.png' }} />
        </Card>
        <Card>
          <Image source={{ uri: 'http://rode2.doddlercon.com/images/guides/113/cards/randgris.jpg' }} />
        </Card>
      </Flip>
    </Container>
  );
};

export default index;
