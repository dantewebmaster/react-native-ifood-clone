import React from 'react';
import {
  StyleSheet, Platform, StatusBar, View,
} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

const App = () => (
  <>
    <StatusBar style={styles.statusBar} backgroundColor="#ffffff" barStyle="dark-content" />
    <Routes />
  </>
);

export default App;
