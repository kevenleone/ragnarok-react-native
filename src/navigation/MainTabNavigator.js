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
    MapScreen,
    MapsScreen,
    Home: HomeScreen,
    MonstersScreen,
    MonsterScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

HomeStack.path = '';

export default HomeStack;
