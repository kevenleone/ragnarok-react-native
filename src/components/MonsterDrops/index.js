import React from 'react';
import { View } from 'react-native';
import { ListItem } from './styles';

const list = [
  {
    id: 1,
    title: ' Carta Valkyrie Randgris',
    icon: 'http://www.ragnadb.com.br/img/small/carta.gif',
  },
  {
    id: 2,
    title: 'Manto das Valquírias [1]',
    icon: 'http://www.ragnadb.com.br/img/item-small/2524/mantodasvalquirias1.gif',
  },
];

const index = () => (
  <View>
    { list.map((item) => (
      <ListItem
        key={item.id}
        title={item.title}
        leftAvatar={{ source: { uri: item.icon } }}
        bottomDivider
        chevron
      />
    ))}
  </View>
);

export default index;
