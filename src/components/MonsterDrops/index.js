import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from './styles';

const list = [
  {
    title: ' Carta Valkyrie Randgris',
    icon: 'http://www.ragnadb.com.br/img/small/carta.gif',
  },
  {
    title: 'Manto das Valquírias [1]',
    icon: 'http://www.ragnadb.com.br/img/item-small/2524/mantodasvalquirias1.gif',
  },
];

const index = () => (
  <View>
    <Text>Oi Drops</Text>
    {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftAvatar={{ source: { uri: item.icon } }}
        bottomDivider
        chevron
      />
    ))
  }
  </View>
);

export default index;
