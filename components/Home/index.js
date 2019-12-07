import React, { useState } from 'react';
import {
  Container, Content, Title, Input, CardList, Card, Text, Icon, IconView,
} from './styles';

const races = [
  'Amorfo',
  'Morto',
  'Bruto',
  'Planta',
  'Inseto',
  'Peixe',
  'Demônio',
  'Anjo',
  'Dragão',
  'Humanóide',
];

const List = [
  {
    title: 'Monsters',
    uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
    action() {
      alert('Abrir página');
    },
  },
  {
    title: 'Races',
    uri: 'http://www.ragnadb.com.br/img/monstro/1916/imperador-morroc.gif',
    action: races,
  },
  {
    title: 'Maps',
    uri: 'http://www.ragnadb.com.br/img/maps/prontera.gif',
    action() {
      alert('Abrir página Maps');
    },
  },
  {
    title: 'Itens',
    uri: 'http://www.ragnadb.com.br/img/item-small/7053/cyfar.gif',
    action: [],
  },
];

const Home = () => {
  const [subItems, setSubItems] = useState();

  function onClickCategory(action) {
    if (typeof action === 'function') {
      action();
    } else {
      setSubItems(action);
    }
  }

  return (
    <Container>
      <Content>
        <Title>What Monster are you looking for?</Title>

        <Input
          leftIcon={{ type: 'ionicon', name: 'ios-search' }}
          rightIcon={{ type: 'ionicon', name: 'ios-close' }}
          leftIconContainerStyle={{ marginLeft: -5, marginRight: 10 }}
          placeholder="Search for your favorite Monster"
          autoCapitalize="none"
        />

        <CardList>
          {
            List.map(({ action, title, uri }) => (
              <Card key={title} onPress={() => onClickCategory(action)}>
                <Text>{title}</Text>
                <IconView>
                  <Icon
                    source={{ uri }}
                  />
                </IconView>
              </Card>
            ))
          }
        </CardList>
      </Content>
    </Container>
  );
};

export default Home;
