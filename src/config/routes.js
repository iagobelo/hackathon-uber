import { StackNavigator, DrawerNavigator } from 'react-navigation';

import {
  Splash,
  SignUp,
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
  SignUp: { screen: SignUp },
  UserMain: {
    screen: DrawerNavigator({
      UserMain: { screen: Main },
    }, drawerSettings),
  },
}, rootSettings);

export default routes;
