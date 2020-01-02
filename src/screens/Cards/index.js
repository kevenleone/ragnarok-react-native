import React, { useState } from 'react';
import { ButtonGroup } from 'react-native-elements';
import { View } from 'react-native';
import { Switch, Case } from 'react-if';
import { Galery, Discovery } from '../../components/Card';

const buttons = ['Galery', 'Discovery'];

const CardsScreen = () => {
  const [selectedIndex, setIndex] = useState(1);
  return (
    <View>
      <ButtonGroup
        onPress={setIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 30 }}
      />
      <Switch>
        <Case condition={selectedIndex === 0}>
          <Galery />
        </Case>
        <Case condition={selectedIndex === 1}>
          <Discovery />
        </Case>
      </Switch>
    </View>
  );
};

export default CardsScreen;
