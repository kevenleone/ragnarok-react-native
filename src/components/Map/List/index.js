import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, List, MapView, Image, Map,
} from './styles';
import ListFooter from '../../ListFooter';

const MapList = ({
  navigation, maps, variables, setVariables,
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
        data={maps}
        keyExtractor={(m) => m.id}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}
        numColumns={3}
        ListFooterComponent={ListFooter}
        renderItem={({ item }) => (
          <MapView onPress={() => navigation.navigate('MapScreen', { title: item.map, map: item.map })}>
            <Map>{item.map}</Map>
            <Image source={{ uri: item.img }} />
          </MapView>
        )}
      />
    </Container>
  );
};

MapList.propTypes = {
  maps: PropTypes.arrayOf(PropTypes.object),
  variables: PropTypes.objectOf(PropTypes.object),
  setVariables: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

MapList.defaultProps = {
  maps: [],
  variables: {},
};

export default MapList;
