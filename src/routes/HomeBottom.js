import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabIcon from '~/components/TabIcon';

import BottomTabs from '~/components/BottomTabs';
import Leaderboards from '~/screens/Leaderboards';
import Profile from '~/screens/Profile';
import History from '~/screens/History';
import Config from '~/screens/Config';
import Code from '~/screens/Code';

const ProfileIcon = ({ tintColor }) => (
  <TabIcon name="account" tintColor={tintColor} type="material" />
);

const HistoryIcon = ({ tintColor }) => (
  <TabIcon name="medal" tintColor={tintColor} type="material" />
);

const CodeIcon = ({ tintColor }) => (
  <TabIcon name="qrcode-scan" tintColor={tintColor} type="rounded" />
);

const LeaderboardIcon = ({ tintColor }) => (
  <TabIcon name="podium" tintColor={tintColor} type="material" />
);

const ConfigIcon = ({ tintColor }) => (
  <TabIcon name="dots-horizontal" tintColor={tintColor} type="material" />
);

const HomeBottom = createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
        tabBarIcon: ProfileIcon,
        tabBarLabel: () => null,
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        header: null,
        tabBarIcon: HistoryIcon,
        tabBarLabel: () => null,
      },
    },
    CodeScreen: {
      screen: Code,
      navigationOptions: () => ({
        header: null,
        tabBarLabel: () => null,
        tabBarIcon: CodeIcon,
        tabBarOnPress: ({ navigation }) => {
          navigation.navigate('Code');
        },
      }),
    },
    Leaderboards: {
      screen: Leaderboards,
      navigationOptions: {
        header: null,
        tabBarIcon: LeaderboardIcon,
        tabBarLabel: () => null,
      },
    },
    Config: {
      screen: Config,
      navigationOptions: {
        header: null,
        tabBarIcon: ConfigIcon,
        tabBarLabel: () => null,
      },
    },
  },
  {
    tabBarComponent: BottomTabs,
    tabBarOptions: {
      activeTintColor: '#81B247',
    },
  }
);

export default createAppContainer(HomeBottom);
