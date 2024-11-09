import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ShortsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shorts</Text>
      <Text>Your shorts content goes here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});