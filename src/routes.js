import React from 'react';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Main from '~/pages/Main';

import CustomFooterTabBar from '~/components/CustomFooterTabBar';

const HomeTab = createSwitchNavigator(
  {
    Home: Main,
    Details: Main,
  },
);

const SearchTab = createSwitchNavigator(
  {
    Home: Main,
    Details: Main,
  },
);

const Routes = createBottomTabNavigator(
  {
    Home: HomeTab,
    Search: SearchTab,
  },
  {
    defaultNavigationOptions: () => ({
      tabBarComponent: () => (
        <CustomFooterTabBar />
      )
      ,
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  },
);

export default createAppContainer(Routes);
