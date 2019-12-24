import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import MonstersScreen from '../screens/Monsters';
import MonsterScreen from '../screens/Monster';
import MapsScreen from '../screens/Maps';
import MapScreen from '../screens/Map';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Ragnarok: HomeScreen,
    MonsterScreen,
    Maps: MapsScreen,
    MapScreen,
    MonstersScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName, params } = navigation.state;
      const title = params && params.title ? params.title : routeName;
      return {
        headerTitle: title,
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

export default HomeStack;
