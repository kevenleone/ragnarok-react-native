import React from 'react';
import {
  Container, List, MapView, Image, Map,
} from './styles';
import ListFooter from '../../ListFooter';

const MapList = ({ maps, variables, setVariables }) => {
  const { data } = variables;
  function loadMore() {
    const content = {
      data: { ...data, Page: data.Page + 1 },
    };
    setVariables(content);
  }
  return (
    <Container>
      <List
        data={maps}
        keyExtractor={(data) => data.id}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}
        numColumns={3}
        ListFooterComponent={ListFooter}
        renderItem={({ item }) => (
          <MapView>
            <Map>{item.map}</Map>
            <Image source={{ uri: item.img }} />
          </MapView>
        )}
      />
    </Container>
  );
};

export default MapList;
