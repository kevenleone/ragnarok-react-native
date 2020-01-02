// eslint-disable-next-line import/prefer-default-export
export const HomeCategories = [
  {
    title: 'Monsters',
    uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
    action() {
      return {
        page: 'Monsters',
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
      return {
        page: 'Maps',
        payload: '',
      };
    },
  },
  {
    title: 'Itens',
    uri: 'http://www3.worldrag.com/database/media/item/2679.gif',
    action: [],
  },
  {
    title: 'Cards',
    uri: 'http://file5.ratemyserver.net/items/small/card.gif',
    action: [],
  },
];
