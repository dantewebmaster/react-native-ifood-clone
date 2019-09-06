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

const DetailsTab = createSwitchNavigator(
  {
    Home: Main,
    Details: Main,
  },
);

const Routes = createBottomTabNavigator(
  {
    Home: HomeTab,
    Details: DetailsTab,
  },
  {
    defaultNavigationOptions: () => ({
      tabBarComponent: () => (
        <CustomFooterTabBar />
      ),
    }),
  },
);

export default createAppContainer(Routes);
