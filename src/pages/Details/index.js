import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Details() {
  return (
    <View style={styles.container}>
      <Text>Em breve página de detalhes do produto...</Text>
    </View>
  );
}
