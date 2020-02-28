import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { translate } from '../components/UI/Translate';

import MonstersScreen from '../screens/Monsters';
import MonsterScreen from '../screens/Monster';
import HomeScreen from '../screens/Home';
import MapsScreen from '../screens/Maps';
import MapScreen from '../screens/Map';
import CardScreen from '../screens/Cards';
import SignIn from '../screens/SignIn';
import Root from '../screens/Root';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const HomeStack = createStackNavigator(
  {
    Root,
    SignIn,
    Ragnarok: HomeScreen,
    Cards: CardScreen,
    MonsterScreen,
    Maps: MapsScreen,
    MapScreen,
    Monsters: MonstersScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName, params } = navigation.state;
      const title = params && params.title ? params.title : routeName;
      return {
        headerTitle: translate(title.toUpperCase()),
        headerStyle: {
          backgroundColor: '#1A5276',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    },
  },
  config,
);

HomeStack.path = '';

const SwitchNavigator = createSwitchNavigator({
  Root,
  SignIn,
  Home: HomeStack,
});


export default HomeStack;
