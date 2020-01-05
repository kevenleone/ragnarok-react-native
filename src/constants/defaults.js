import { dict } from '../components/UI/Translate';

const { translate } = dict;
// eslint-disable-next-line import/prefer-default-export
export const HomeCategories = [
  {
    title: translate('CATEGORY_MONSTERS'),
    uri: 'http://www.ragnadb.com.br/img/monstro/1261/rosa-selvagem.gif',
    action() {
      return {
        page: 'Monsters',
        payload: '',
      };
    },
  },
  {
    title: translate('CATEGORY_RACES'),
    uri: 'http://www.ragnadb.com.br/img/monstro/1511/amon-ra.gif',
  },
  {
    title: translate('CATEGORY_MAPS'),
    uri: 'http://www.ragnadb.com.br/img/maps/prontera.gif',
    action() {
      return {
        page: 'Maps',
        payload: '',
      };
    },
  },
  {
    title: translate('CATEGORY_ITEMS'),
    uri: 'http://www3.worldrag.com/database/media/item/2679.gif',
    action: [],
  },
  {
    title: translate('CATEGORY_CARDS'),
    uri: 'http://file5.ratemyserver.net/items/small/card.gif',
    action() {
      return {
        page: 'Cards',
        payload: '',
      };
    },
  },
];
