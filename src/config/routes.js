import { StackNavigator } from 'react-navigation';

import {
  Splash,
  Main,
  Map,
} from '../screens';
import { Drawer } from '../components';

const rootSettings = {
  headerMode: 'none',
};

const drawerSettings = {
  headerMode: 'none',
  contentComponent: Drawer,
};

const routes = StackNavigator({
  // Splash: { screen: Splash },
  UserMain: {
    screen: Map,
  },
}, rootSettings);

export default routes;
