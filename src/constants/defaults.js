export const HomeCategories = [
  {
    title: 'Monsters',
    uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
    action() {
      return {
        page: 'MonstersScreen',
        payload: '',
      };
    },
  },
  {
    title: 'Races',
    uri: 'http://www.ragnadb.com.br/img/monstro/1511/amon-ra.gif',
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
