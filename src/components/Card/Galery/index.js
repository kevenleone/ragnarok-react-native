import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, List, MapView, Map,
} from './styles';
import ListFooter from '../../ListFooter';
import Image from '../../UI/Image';

const MapList = ({
  navigation, monsters, variables, setVariables,
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
        ListFooterComponent={ListFooter}
        onEndReachedThreshold={0.1}
        keyExtractor={(m) => m.id}
        onEndReached={loadMore}
        numColumns={3}
        data={monsters}
        renderItem={({ item }) => (
          <MapView onPress={() => navigation.navigate('MonsterScreen', { id: item.ID })}>
            <Map>{item.map}</Map>
            <Image src={item.img} style={{ width: 130, height: 130 }} />
          </MapView>
        )}
      />
    </Container>
  );
};

MapList.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.object),
  variables: PropTypes.objectOf(PropTypes.object),
  setVariables: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

MapList.defaultProps = {
  monsters: [],
  variables: {},
};

export default MapList;
