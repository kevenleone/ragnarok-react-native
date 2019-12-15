import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup, Header } from 'react-native-elements';
import { Query } from 'react-apollo';
import Carousel from '../../components/Map/Carousel';
import MapQuery from '../../graphql/gql/query/map';

const buttons = ['List View', 'Detailed View'];

const MapScreen = () => {
  const [variables, setVariables] = useState({ data: { Page: 1 } });
  const [index, setIndex] = useState(0);
  return (
    <Query query={MapQuery} variables={variables}>
      {({ data, loading, error }) => (
        <>
          <Header
            backgroundColor="#333"
            barStyle="light-content" // or directly
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Ragnarok Maps', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <ButtonGroup
            onPress={setIndex}
            selectedIndex={index}
            buttons={buttons}
            containerStyle={{ height: 30 }}
          />
          <Carousel data={data ? data.getMonsterPlaceFilter : []} />
        </>
      )}
    </Query>
  );
};

MapScreen.navigationOptions = {
  header: null,
};

export default MapScreen;
