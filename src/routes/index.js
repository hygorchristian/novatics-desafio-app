import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from '~/screens/Splash';
import Login from '~/screens/Login';
import HomeBottom from '~/routes/HomeBottom';
import Code from '~/screens/Code';
import colors from '~/assets/colors';

const MainStack = createStackNavigator(
  {
    HomeBottom: {
      screen: HomeBottom,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Code: {
      screen: Code,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
        cardStyle: {
          backgroundColor: colors.paper,
        },
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
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
