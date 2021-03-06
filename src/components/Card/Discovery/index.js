import React, { useState } from 'react';
import { useLazyQuery } from 'react-apollo';
import PropTypes from 'prop-types';
import { When } from 'react-if';
import { getMonsterRandom } from '../../../graphql/gql/query/monster';
import DiscoveryImg from '../../../../assets/images/discovery.jpg';
import MonsterCard from '../../MonsterCard';
import {
  Card, Container, Flip, Image, Header,
} from './styles';

function Discovery({ navigation, translate }) {
  const [flipedImg, setFlipImage] = useState(DiscoveryImg);
  const [enableMessages, setEnableMessages] = useState(false);
  const [shouldFlip, setShouldFlip] = useState(true);
  const [getMonster, { data }] = useLazyQuery(getMonsterRandom);
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
    setFlipImage({ uri: data.getMonsterRandom.image.art });
    setShouldFlip(false);
  }

  return (
    <Container>
      <Header>
        {shouldFlip ? translate('DISCOVERY_CLICK') : !enableMessages
          ? translate('DISCOVERY_LOADING') : translate('DISCOVERY_GOT_CARD', { card: monster.kName })}
      </Header>
      <Flip
        duration={2000}
        ref={(c) => card = c} //eslint-disable-line
        onFlipEnd={() => (shouldFlip ? card.flip() : setEnableMessages(true))}
      >
        <Card onPress={getCard}>
          <Image source={DiscoveryImg} />
        </Card>
        <Card onPress={getCard}>
          <Image source={flipedImg} />
        </Card>
      </Flip>

      <When condition={Boolean(monster) && enableMessages}>
        <MonsterCard navigation={navigation} monster={monster || {}} />
      </When>
    </Container>
  );
}

Discovery.propTypes = {
  translate: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Discovery;
