import { StackNavigator } from 'react-navigation';

import {
  Splash,
  Main,
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
  Splash: { screen: Splash },
  UserMain: {
    screen: Main,
  },
}, rootSettings);

export default routes;
