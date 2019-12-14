import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import PropTypes from 'prop-types';
import { ModalTitle, ModalContent, BottomModal } from 'react-native-modals';

import RaceQuery from '../../../../graphql/gql/query/race';
import MenuCategory from '../../../MenuCategory';
import { CardList } from './styles';
import Page from '../../../Page';

const RaceCategories = ({ setMenuOption, onPressRace }) => {
  const [showModal, setShowModal] = useState(true);
  const { loading, error, data } = useQuery(RaceQuery);
  let races = data.getRaces || [];
  if (races) {
    races = races.map((
      {
        id,
        race,
        background,
        representationMonster,
      },
    ) => ({
      id,
      title: race,
      color: background,
      uri: representationMonster ? representationMonster.image.animated : 'aaa',
    }));
  }

  function onSwipeOut() {
    setShowModal(false);
    setMenuOption(null);
  }

  function onPressCascade(content) {
    onPressRace(content);
    setShowModal(false);
  }

  return (
    <BottomModal
      visible={showModal}
      modalTitle={<ModalTitle title="Monster Races" />}
      height={450}
      swipeThreshold={150}
      swipeDirection="down"
      onSwipeOut={onSwipeOut}
    >
      <ModalContent>
        <Page loading={loading} error={error}>
          <CardList>
            { races.map((race, index) => (
              <MenuCategory onPress={onPressCascade} key={index} {...race} />
            ))}
          </CardList>
        </Page>
      </ModalContent>
    </BottomModal>
  );
};

RaceCategories.propTypes = {
  setMenuOption: PropTypes.func.isRequired,
  onPressRace: PropTypes.func.isRequired,
};

export default RaceCategories;
