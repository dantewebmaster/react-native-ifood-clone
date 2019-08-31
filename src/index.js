import React from 'react';
import {
  StyleSheet, Platform, StatusBar,
} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default function App() {
  return (
    <>
      <StatusBar
        style={styles.statusBar}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <Routes />
    </>
  );
}
