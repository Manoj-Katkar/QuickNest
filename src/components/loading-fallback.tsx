import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const LoadingFallback = () => {
  return (
    <View style={styles.container}>
      {/* Spinner Animation */}
      <ActivityIndicator size="large" color="#4A90E2" />

      {/* Message */}
      <Text style={styles.text}>Please wait, loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '600',
  },
});

export default LoadingFallback;
