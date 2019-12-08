import React, { useState } from 'react';
import { When } from 'react-if';
import {
  Container, Content, Title, Input, CardList, Card, Text, Icon, IconView, Touchable, ButtonText,
} from './styles';

// const races = [
//   {
//     title: 'Amorfo',
//     uri: 'http://www.ragnadb.com.br/img/monstro/1777/tita-de-gelo.gif',
//     action() {
//       alert('Should Type');
//     },
//     color: '#333',
//   },
//   {
//     title: 'Morto',
//     uri: 'http://www.ragnadb.com.br/img/monstro/1991/leao-de-vinhas.gif',
//     action() {
//       alert('Should Type');
//     },
//     color: '#333',
//   },
//   {
//     title: 'Bruto',
//     uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
//     action() {
//       alert('Should Type');
//     },
//     color: '#333',
//   },
//   {
//     title: 'Planta',
//     uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
//     action() {
//       alert('Should Type');
//     },
//     color: '#333',
//   },
//   {
//     title: 'Inseto',
//     uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
//     action() {
//       alert('Should Type');
//     },
//     color: '#333',
//   },
//   {
//     title: 'Peixe',
//     uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
//     action() {
//       alert('Should Type');
//     },
//     color: '#333',
//   },
//   {
//     title: 'Demônio',
//     uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
//     action() {
//       alert('Should Type');
//     },
//     color: '#333',
//   },
//   {
//     title: 'Anjo',
//     uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
//     action() {
//       alert('Should Type');
//     },
//     color: '#333',
//   },
//   {
//     title: 'Dragão',
//     uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
//     action() {
//       alert('Should Type');
//     },
//     color: '#333',
//   },
//   {
//     title: 'Humanóide',
//     uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
//     action() {
//       alert('Should Type');
//     },
//     color: '#333',
//   },
// ];

const Home = ({ navigation, list, races }) => {
  const [subItems, setSubItems] = useState(null);

  const newList = list.map((lx) => {
    if (lx.title === 'Races') {
      lx.action = races;
    }
    return lx;
  });

  const useItems = subItems || newList;
  function onClickCategory(action) {
    if (typeof action === 'function') {
      const content = action();
      navigation.navigate(content.page);
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

        <When condition={subItems !== null}>
          <Touchable onPress={() => setSubItems(null)}>
            <ButtonText color="#999">Back to Main List</ButtonText>
          </Touchable>
        </When>

        <CardList>
          {
            useItems.map(({
              action, title, uri, color,
            }) => (
              <Card
                key={title}
                color={color}
                onPress={() => onClickCategory(action)}
              >
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
