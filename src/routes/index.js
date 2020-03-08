import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from '~/screens/Splash';
import Login from '~/screens/Login';
import HomeBottom from '~/routes/HomeBottom';

const MainStack = createStackNavigator(
  {
    HomeBottom: {
      screen: HomeBottom,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    // mode: 'modal',
    // headerMode: 'none',
  }
);

const Routes = createSwitchNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  MainStack: {
    screen: MainStack,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
});

export default createAppContainer(Routes);
