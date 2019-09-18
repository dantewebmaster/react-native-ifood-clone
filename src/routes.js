import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Screens
import MainScreen from '~/pages/Main';
import SearchScreen from '~/pages/Search';
// Custom tabbar component
import CustomFooterTabBar from '~/components/CustomFooterTabBar';
// Tabbar icon sources
import HomeIcon from '~/assets/home.png';
import SearchIcon from '~/assets/search-black.png';
import OrdersIcon from '~/assets/order.png';
import ProfileIcon from '~/assets/profile.png';

const TabRoutes = createBottomTabNavigator(
  {
    Home: {
      screen: MainScreen,
      navigationOptions: {
        tabBarIcon: () => HomeIcon,
        tabBarLabel: 'Início',
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: () => SearchIcon,
        tabBarLabel: 'Buscar',
      },
    },
    Orders: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: () => OrdersIcon,
        tabBarLabel: 'Pedidos',
      },
    },
    Profile: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: () => ProfileIcon,
        tabBarLabel: 'Perfil',
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      tabBarComponent: CustomFooterTabBar,
      tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#666',
      },
    }),
  },
);

export default createAppContainer(TabRoutes);
