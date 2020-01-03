import React from 'react';
import PropTypes from 'prop-types';
import ListFooter from '../../ListFooter';
import Image from '../../UI/Image';
import { Container, List, MapView } from './styles';

const MapList = ({
  navigation, cards, variables, setVariables,
}) => {
  function loadMore() {
    const { data } = variables;
    const content = {
      data: { ...data, Page: data.Page + 1 },
    };
    setVariables(content);
  }
  return (
    <Container>
      <List
        showsVerticalScrollIndicator={false}
        ListFooterComponent={cards.length >= 50 ? ListFooter : null}
        onEndReachedThreshold={0.1}
        keyExtractor={(m) => m.id}
        onEndReached={loadMore}
        numColumns={2}
        data={cards}
        renderItem={({ item }) => (
          <MapView onPress={() => navigation.navigate('MonsterScreen', { id: item.id })}>
            <Image resizeMode="stretch" src={item.image.art} style={{ width: 200, height: 200 }} />
          </MapView>
        )}
      />
    </Container>
  );
};

MapList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  variables: PropTypes.objectOf(PropTypes.object),
  setVariables: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

MapList.defaultProps = {
  cards: [],
  variables: {},
};

export default MapList;
